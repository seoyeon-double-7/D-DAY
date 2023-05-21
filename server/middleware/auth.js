const { User } = require("../models/User");
let auth = (req, res, next) => {
  // 인증처리 하기

  // 1. 클라이언트 쿠키에서 토큰(key 사용) 가져오기
  let token = req.cookies.x_auth;

  // 2. 토큰 복호화 한 후 유저 찾기
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    // 유저 없으면 인증 실패
    if (!user) return res.json({ isAuth: false, error: true });

    // 유저가 있으면 인증 완료
    req.token = token;
    req.user = user;

    // 미들웨어에 갇히지 않고 다시 돌아가기
    next();
  });
};

module.exports = { auth };
