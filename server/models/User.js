const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  nickname: {
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

const User = mongoose.model("User", userSchema);
module.exports = { User };
