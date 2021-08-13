import { initialState } from "./initialState";

const loginReducer = (
  state = initialState.userState,
  { type, accessToken, userInfo }
) => {
  switch (type) {
    case "LOG_IN":
      return { ...state, login: { accessToken }, userInfo };

    case "LOG_OUT":
      return {
        ...state,
        login: { accessToken: "" },
        userInfo: {},
      };

    case "MODIFY_ACCESS_TOKEN":
      return { ...state, login: { accessToken } };

    default:
      return state;
  }
};

export default loginReducer;
