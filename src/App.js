import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Main from "./components/main/Main";
import Loading from "./components/loading/Loading";
import { GlobalStyle } from "./styles/global.style";
import Mypage from "./components/mypage/Mypage";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "./actions";

function App({ login }) {
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const result = await axios(
        "https://oneul.site/O_NeulServer/user/renewToken",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const { accessToken, user } = result.data.data;
      login(accessToken, user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("err:::" + error);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          {/* <Route path="/mypage">
            <Mypage />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

// for test
const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer,
  };
};

export default connect(mapStateToProps, { login })(App);
