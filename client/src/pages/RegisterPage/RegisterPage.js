import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import Logo from "../LoginPage/Settings/showLogo";
import "../../styles/Form.css";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인을 같아야합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
      playNum: 0,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        // props.history.push("/");
        navigate("/login");
      } else {
        alert("failed to sign up");
      }
    });
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="form-main">
      <Logo />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={onSubmitHandler}
        >
          <label>이메일</label>
          <input type="email" value={Email} onChange={onEmailHandler} />

          <label>이름</label>
          <input type="text" value={Name} onChange={onNameHandler} />

          <label>비밀번호</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />

          <label>비밀번호 확인</label>
          <input
            type="password"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />

          <br />
          <div className="button-box">
            <button>회원가입하기</button>
            <button onClick={navigateToLogin}>로그인하러 가기</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
