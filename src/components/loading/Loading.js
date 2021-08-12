import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../actions";
import styled from "styled-components";
import LoadingPage from "./LoadingPage";

const Loading = ({ login }) => {
  const history = useHistory();

  useEffect(async () => {
    const link = document.location.href;

    if (link.indexOf("?") !== -1) {
      const query = link.split("?")[1].split("&");

      let state, code;
      if (query[0].slice(0, 5) === "state") {
        state = query[0].slice(6);
        code = query[1].slice(5);
      } else {
        code = query[0].slice(5);
        state = query[1].slice(6);
      }

      axios
        .post(
          "https://oneul.site/O_NeulServer/oauth/login",
          {
            code: code,
            state: state,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data.data);
          login(res.data.data.accessToken, res.data.data.user);
          history.push("/main");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <Background>
      <LoadingPage />
    </Background>
  );
};
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default connect(null, { login })(Loading);
