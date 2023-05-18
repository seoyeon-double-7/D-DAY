import Nav from "../../Layout/Nav";
import Footer from "../../Layout/Footer";
import "../../styles/HomePage.css";
function MyPage() {
  return (
    <div className="home">
      <Nav />

      <div className="mypage-main">마이페이지</div>

      <Footer />
    </div>
  );
}

export default MyPage;
