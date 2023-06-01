import Nav from "../../Layout/Nav";
import Post from "./sections/FootPrintPost";
import "../../styles/FootPrintPage.css";
import { useDispatch } from "react-redux";
import { newPost } from "../../_actions/footprint_action";
import { getPost } from "../../_actions/footprint_action";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

var moment = require("moment-timezone");

function FootPrintPage() {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const [Contents, setContents] = useState("");
  const [Posts, setPosts] = useState({});
  const [count, setCount] = useState(0);

  // 방명록 내용 저장
  const onContentsHandler = (event) => {
    setContents(event.currentTarget.value);
  };

  // 사용자 이름, 방명록, 날짜 데이터 서버로 보내기
  const onsubmitHandler = (event) => {
    event.preventDefault();
    var postData = moment.tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss");

    let body = {
      name: user.name,
      email: user.email,
      contents: Contents,
      date: postData,
    };

    dispatch(newPost(body)).then((res) => {
      if (res.payload.postSuccess) {
        alert("게시물 전송 성공⚡");
        setContents("");
      } else {
        alert("발자취 게시물 게시에 실패하였습니다.");
      }
    });
  };

  // 방명록 포스트 가져오기
  const getPosts = () => {
    dispatch(getPost()).then((res) => {
      setPosts(res.payload.postData);
    });
  };

  // const request = axios
  //   // 백엔드 서버 url에 dataToSubmit 데이터 보내주기
  //   .post("/api/users/login", dataToSubmit)
  //   .then((response) => response.data);

  // 포스트 삭제
  const deletePost = (postId) => {
    // 복잡하지 x 기능이므로 axios 바로 써줌
    console.log("삭제할 포스트의 id", postId);
    let data = {
      id: postId,
    };
    axios.post("/api/users/footprint/delete", data).then((res) => {
      if (res.data.deltePostSuccess) {
        alert("게시물 삭제 완료!");
        getPosts();
      }
    });
  };

  useEffect(() => {
    getPosts();
  }, [Contents]);

  return (
    <div className="footprint-background">
      <Nav />
      {/* 포스트 보여주는 부분 */}

      <div grid-container="true">
        <main className="main-container">
          <ul className="footprint-posts">
            {Object.values(Posts).map(function (element) {
              return (
                <li>
                  <div className="footprint-post">
                    <span className="footprint-post-name">{element.name}</span>
                    <br />
                    <span className="footprint-post-contents">
                      {element.contents}
                    </span>
                    <br />
                    <span className="footprint-post-date">{element.date}</span>
                    <button
                      className="footprint-btn"
                      onClick={() => deletePost(element._id)}
                    >
                      삭제
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>

      {/* 방명록 작성 */}
      <form onSubmit={onsubmitHandler}>
        <textarea
          value={Contents}
          placeholder="방명록을 남겨주세요!"
          onChange={onContentsHandler}
        />
        <button className="footprint-submit" />
      </form>
    </div>
  );
}

export default FootPrintPage;
