const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./models/User");

// application/json으로된 데이터를 가져와서 분석할수있게 하는 코드
app.use(express.json());
// application/x-www-form-urlencoded 이런식으로 된 데이터를 가져와서 분석해주는 코드
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const mongoose = require("mongoose");
const config = require("./config/key");

mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  // 회원가입 정보 client가져와서 db에 넣어주기
  const user = new User(req.body);
  await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });
});

app.post("/login", (req, res) => {
  // 요청된 이메일을 db에서 찾기
  User.findOne({ nickname: req.body.nickname })
    .then((user) => {
      // if (user) {
      //   return res.json({
      //     loginSuccess: true,
      //     messsage: "로그인 성공",
      //   });
      // } else
      if (!user) {
        return res.json({
          loginSuccess: false,
          messsage: "제공된 이메일에 해당하는 유저가 없습니다.",
        });
      }

      // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
      user.comparePassword(req.body.password, (err, isMatch) => {
        // isMatch가 없으면 비번이 틀림
        if (!isMatch)
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 틀렸습니다.",
          });
        // 비밀번호까지 맞다면 토큰 생성
        user.generateToken((err, user) => {
          // status(400)->에러
          if (err) return res.status(400).send(err);

          // 토큰을 저장(쿠키, 로컬스토리지)
          // status(200)->성공
          res
            .cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id });
        });
      });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
