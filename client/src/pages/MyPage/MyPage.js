import Nav from "../../Layout/Nav";
import Footer from "../../Layout/Footer";
import "../../styles/MyPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPost } from "../../_actions/footprint_action";
// import profileImg from "../../../public/images/profile_img_sample.png";

function MyPage() {
  const [Posts, setPosts] = useState({});
  const [MyPosts, setMyPosts] = useState({});
  const dispatch = useDispatch();
  // redux에서 사용자 로그인 여부 상태 가져오기
  // 참고 : https://phsun102.tistory.com/85

  // 유저정보
  const user = useSelector((state) => state.user.userData);

  // 방명록 포스트 가져오기
  const getPosts = () => {
    dispatch(getPost())
    .then((res) => {
      setPosts(res.payload.postData);
      console.log(res.payload.postData);
      filterMyPosts(Posts);
    })
    
  };
  
  const filterMyPosts = (posts) => {
    // user.name과 post.name이 같으면 내가 쓴 Post MyPosts에 넣기
    const filteredPosts = Object.values(posts).filter((post) => post.name === user.name);
    setMyPosts(filteredPosts);
  };

  useEffect(() => {
    getPosts();
    console.log(Posts);
    console.log(MyPosts);
  }, []);

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
          <div className="profile-name">{user.name}</div> 
          <div className="profile-email">{user.email}</div>
        </div>
      </div>

      <div className="footprint-box">
      <ul className="posts">
            {Object.values(MyPosts).map(function (element) {
              return (
                <li>
                  <div className="footprint-post">
                    <span className="footprint-post-name">{element.name}</span>
                    <br />
                    <span className="footprint-post-contents">{element.contents}</span>
                    <br />
                    <span className="footprint-post-date">{element.date}</span>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>

      <Footer />
    </div>
  );
}

export default MyPage;
