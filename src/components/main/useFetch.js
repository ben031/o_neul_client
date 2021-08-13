import axios from "axios";

const url = "https://oneul.site/O_NeulServer/main";

const fetchAxios = (userInfo) => {
  return axios(
    url,
    {
      headers: {
        authorization: "Bearer " + userInfo.login.accessToken,
      },
    },
    {
      withCredentials: true,
    }
  ).then((res) => res.data.data);
};

export default fetchAxios;
