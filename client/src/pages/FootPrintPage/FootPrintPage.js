import Nav from "../../Layout/Nav";
import Post from "./sections/FootPrintPost";
import "../../styles/FootPrintPage.css";
import { useDispatch } from "react-redux";
import { newPost } from "../../_actions/footprint_action";
import { getPost } from "../../_actions/footprint_action";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

var moment = require("moment-timezone");

function FootPrintPage() {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [Contents, setContents] = useState("");
  const [Posts, setPosts] = useState({});

  const onContentsHandler = (event) => {
    setContents(event.currentTarget.value);
  };

  useEffect(() => {
    dispatch(getPost()).then((res) => {
      // console.log("post 내용!!! ", res.payload.postData);
      setPosts(res.payload.postData);
      // console.log("과연 바뀌었을까? : ", Posts);
    });
  }, [Contents]);

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
      console.log(res);
      if (res.payload.postSuccess) {
        alert("게시물 전송 성공⚡");
        setContents("");
      } else {
        alert("발자취 게시물 게시에 실패하였습니다.");
      }
    });
  };

  return (
    <div className="footprint-background">
      <Nav />
      {/* 포스트 보여주는 부분 */}

      <div className="footprint-post">
        {Object.values(Posts).map(function (element) {
          return <Post key={element.id} postContents={element} />;
        })}
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
