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

app.post("/register", (req, res) => {
  // 회원가입 정보 client가져와서 db에 넣어주기
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
