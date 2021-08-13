import React, { useState } from "react";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Signup from "../modals/signup_in/Signup";

const MainHeaderCompo = ({ userLogin }) => {
  const history = useHistory();
  const [loginModal, setLoginModal] = useState(false);

  const loginModalHandler = () => {
    setLoginModal((prev) => !prev);
  };

  const handleMypage = () => {
    history.push("/mypage");
  };

  return (
    <MainHeader>
      <HeaderWrapper>
        <Link to="/">
          <h1>오늘 ,</h1>
        </Link>
        {userLogin.accessToken ? (
          <button onClick={handleMypage}>MY PAGE</button>
        ) : (
          <button onClick={loginModalHandler}>로그인</button>
        )}
      </HeaderWrapper>
      {loginModal && <Signup handleModal={loginModalHandler} />}
    </MainHeader>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer.login,
  };
};

export default connect(mapStateToProps)(MainHeaderCompo);
