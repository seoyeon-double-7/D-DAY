const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

// application/json으로된 데이터를 가져와서 분석할수있게 하는 코드
app.use(express.json());
// application/x-www-form-urlencoded 이런식으로 된 데이터를 가져와서 분석해주는 코드
app.use(express.urlencoded({ extended: true }));

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
  // 요청된 이메일을 데이터베이스 찾기
  User.findOne({ nickname: req.body.nickname })
    .then((user) => {
      if(user){
        return res.json({
          loginSuccess: true,
          messsage: "로그인 성공",
        })
      }
      else if (!user) {
        return res.json({
          loginSuccess: false,
          messsage: "제공된 이메일에 해당하는 유저가 없습니다.",
        });
      }

//       user.comparePassword(req.body.password, (err, isMatch) => {
//         if(!isMatch) return res.json({loginSuccess: false, messsage: "비밀번호가 틀렸습니다."})
// // Password가 일치하다면 토큰 생성
//     })
  })
    .catch((err) => {
      return res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
