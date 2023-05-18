import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import { useNavigate } from "react-router-dom";

import { guest_account } from "./Settings/guest_account";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        // props.history.push("/");
        navigate("/");
      } else {
        alert(response.payload.message);
      }
    });
  };

  const onGuestHandler = (event) => {
    event.preventDefault();
    dispatch(loginUser(guest_account)).then((response) => {
      if (response.payload.loginSuccess) {
        // props.history.push("/");
        navigate("/");
      } else {
        alert(response.payload.message);
      }
    });
  };
  return (
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
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <br />
        <button>Login</button>
        <button onClick={onGuestHandler}>게스트 플레이</button>
        <button onClick={navigateToRegister}>Register</button>
      </form>
    </div>
  );
}

export default LoginPage;

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../../_actions/user_action";
// import { useNavigate } from "react-router-dom";

// import { guest_account } from "./Settings/guest_account";

// function LoginPage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = userData;
//   const onChange = (e) => {
//     console.log("onChange");
//     const { props, data } = e.target;
//     setUserData({
//       ...userData,
//       [data]: props,
//     });
//   };

//   // const [Email, setEmail] = useState("");
//   // const [Password, setPassword] = useState("");

//   // const onEmailHandler = (event) => {
//   //   setEmail(event.currentTarget.value);
//   // };

//   // const onPasswordHandler = (event) => {
//   //   setPassword(event.currentTarget.value);
//   // };

//   const navigateToRegister = () => {
//     navigate("/register");
//   };

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     console.log(email, password);

//     let body = {
//       email: email,
//       password: password,
//     };

//     dispatch(loginUser(body)).then((response) => {
//       if (response.payload.loginSuccess) {
//         navigate("/");
//       } else {
//         alert(response.payload.message);
//       }
//     });
//   };

//   const onGuestHandler = () => {
//     setUserData({
//       email: guest_account.email,
//       password: guest_account.password,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//       <form
//         style={{
//           display: "flex",
//           flexDirection: "column",
//         }}
//         onSubmit={onSubmitHandler}
//       >
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="e-mail"
//           name="email"
//           props={email}
//           onChange={onChange}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="password"
//           name="password"
//           props={password}
//           onChange={onChange}
//         />

//         <div>
//           <button type="submit">Login</button>
//         </div>

//         <button onClick={onGuestHandler}>게스트 모드</button>
//         <button onClick={navigateToRegister}>Register</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
