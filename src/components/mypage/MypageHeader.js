import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import { connect } from "react-redux";
import { logout } from "../../actions";

const MainHeaderCompo = ({ logout }) => {
  const history = useHistory();
  const Logout = () => {
    return axios
      .get("https://oneul.site/O_NeulServer/user/signout", {
        withCredentials: true,
      })
      .then(() => {
        console.log("로그아웃");
        logout();
        history.push("/");
        Swal.fire({
          title: "👋 로그아웃 🥲",
          showConfirmButton: true,
          timer: 5000,
        });
      });
  };

  return (
    <MainHeader>
      <HeaderWrapper>
        <Link to="/main">
          <h1>오늘 ,</h1>
        </Link>
        <button onClick={Logout}>로그아웃</button>
      </HeaderWrapper>
    </MainHeader>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer,
  };
};

export default connect(mapStateToProps, { logout })(MainHeaderCompo);
