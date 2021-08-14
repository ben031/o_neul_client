import axios from "axios";

const modifyAxios = (url, obj, userInfo) => {
  return axios.patch(
    url,
    obj,
    {
      headers: {
        authorization: "Bearer " + userInfo.login.accessToken,
        "Content-Type": "application/json",
      },
    },
    {
      withCredentials: true,
    }
  );
};

export default modifyAxios;
