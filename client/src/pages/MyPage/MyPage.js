import Nav from "../../Layout/Nav";
import Footer from "../../Layout/Footer";
import "../../styles/MyPage.css";
import { useSelector } from "react-redux";
// import profileImg from "../../../public/images/profile_img_sample.png";

function MyPage() {
  // redux에서 사용자 로그인 여부 상태 가져오기
  // 참고 : https://phsun102.tistory.com/85

  const user = useSelector((state) => state.user.userData);
  return (
    <div className="mypage-background">
      <Nav />

      <div className="mypage">
        <div className="mypage-box" />
        <img
          className="profile-img"
          src="images/profile_img_sample.png"
          alt="sdfd"
        />
        <div className="MypageTextContainer">
          <span className="profile-name">{user.name}</span>
          <span className="profile-email">{user.email}</span>
        </div>
      </div>

      <div className="footprint-box"></div>

      <Footer />
    </div>
  );
}

export default MyPage;
