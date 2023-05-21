import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default function f(SpecificComponent, option, adminRoute = null) {
  // <option>
  // null(아무나 출입 가능한 페이지)
  // true(로그인한 유저만 출입가능한 페이지)
  // false(로그인한 유저는 출입불가능한 페이지)

  function AuthenticationCheck(props) {
    // request로 백엔드에서 상태 가져오기
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        // if (response.payload.name)
        //   console.log(`${response.payload.name}님 안녕하세요`);
        //console.log(response);

        // 로그인 하지 아닐 때 로그인 페이지로 보내주기
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          // 로그인 한 상태

          // admin이 아닐때 랜딩페이지로 보내주기
          if (
            adminRoute &&
            !response.payload.isAdmin &&
            response.payload.isAuth
          ) {
            navigate("/");
          } else {
            if (option === false) navigate("/");
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
