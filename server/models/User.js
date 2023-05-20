const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

//pre 함수 : user 모델에 user 정보를 저장하기 전에 동작
userSchema.pre("save", function (next) {
  var user = this;
  // 비밀번호가 바뀌었을 때만 실행
  if (user.isModified("password")) {
    // 비밀번호를 암호화 시키기
    // bcrypt 가져와서 salt 만들기
    bcrypt.genSalt(saltRounds, function (err, salt) {
      // 에러나면 index.js로 돌아가기
      if (err) return next(err);

      // 패스워드 가져오기
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        // 패스워드 가져오는걸 성공하면 hash된 비밀번호로 바꿔주기
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plainPassword 1234567    암호회된 비밀번호 $2b$10$l492vQ0M4s9YUBfwYkkaZOgWHExahjWC
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    // 사용자가 입력한 비번(plainPassword)와 db에 저장된 비번과 비교
    // 틀리고, 에러가 나면 콜백함수에 err를 반환하고,
    // 같다면 콜백함수에 null값과 true값이 있는 isMatch를 반환
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  // console.log('user._id', user._id)

  // jsonwebtoken을 이용해서 token을 생성하기
  var token = jwt.sign(user._id.toHexString(), "secretToken");
  // user._id + 'secretToken' = token
  // ->
  // 'secretToken' -> user._id

  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  // 토큰을 decode 하기
  jwt.verify(token, "secretToken", function (err, decoded) {
    // 유저 아이디로 유저 찾기
    // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
