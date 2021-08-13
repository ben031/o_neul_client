export const login = (accessToken, userInfo) => {
  return {
    type: "LOG_IN",
    accessToken,
    userInfo,
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export const modifyAccessToken = (accessToken) => {
  return {
    type: "MODIFY_ACCESS_TOKEN",
    accessToken,
  };
};

export const fetchAllUnloginDiary = (publicDiary, musicList) => {
  return {
    type: "FETCH_ALL_UNLOGIN_DATA",
    publicDiary,
    musicList,
  };
};

export const fetchAllLoginDiary = (publicDiary, myDiary, musicList) => {
  return {
    type: "FETCH_ALL_LOGIN_DATA",
    publicDiary,
    myDiary,
    musicList,
  };
};

export const addNewPublicDiary = (newPublicDiary) => {
  return {
    type: "ADD_NEW_PUBLIC_DIARY",
    newPublicDiary,
  };
};

export const addNewPrivateDiary = (newPrivateDiary) => {
  return {
    type: "ADD_NEW_PRIVATE_DIARY",
    newPrivateDiary,
  };
};

export const addEmpathy = (diaryId, newEmphathyObj) => {
  return {
    type: "ADD_EMPATHY",
    diaryId,
    newEmphathyObj,
  };
};

export const removeEmpathy = (diaryId, empathyId) => {
  return {
    type: "REMOVE_EMPATHY",
    diaryId,
    empathyId,
  };
};

export const removePublicDiary = (diaryId) => {
  return {
    type: "REMOVE_PUBLIC_DIARY",
    diaryId,
  };
};

export const removeDiary = (diaryId) => {
  return {
    type: "REMOVE_DIARY",
    diaryId,
  };
};

export const changeToPublic = (newPublicDiary) => {
  return {
    type: "CHANGE_TO_PUBLIC",
    newPublicDiary,
  };
};

export const changeToPrivate = (diaryId) => {
  return {
    type: "CHANGE_TO_PRIVATE",
    diaryId,
  };
};

export const modifyDiary = (diaryId, modifiedDiary) => {
  return {
    type: "MODIFY_DIARY",
    diaryId,
    modifiedDiary,
  };
};

export const modifyPublicDiary = (diaryId, modifiedDiary) => {
  return {
    type: "MODIFY_PUBLIC_DIARY",
    diaryId,
    modifiedDiary,
  };
};
