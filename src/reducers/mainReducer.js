import { initialState } from "./initialState";

const mainReducer = (
  state = initialState.diaryState,
  {
    type,
    publicDiary,
    myDiary,
    musicList,
    diaryId,
    newEmphathyObj,
    empathyId,
    newPublicDiary,
    newPrivateDiary,
    modifiedDiary,
  }
) => {
  switch (type) {
    case "FETCH_ALL_UNLOGIN_DATA":
      return {
        ...state,
        publicDiary: [...publicDiary],
        myDiary: [],
        musicList: [...musicList],
      };
    case "FETCH_ALL_LOGIN_DATA":
      return {
        ...state,
        publicDiary: [...publicDiary],
        myDiary: [...myDiary],
        musicList: [...musicList],
      };
    case "ADD_NEW_PUBLIC_DIARY":
      return {
        ...state,
        publicDiary: [newPublicDiary, ...state.publicDiary],
        myDiary: [newPublicDiary, ...state.myDiary],
      };
    case "ADD_NEW_PRIVATE_DIARY":
      return {
        ...state,
        myDiary: [newPrivateDiary, ...state.myDiary],
      };
    case "ADD_EMPATHY":
      return {
        ...state,
        publicDiary: state.publicDiary.map((diary) =>
          diary.id === diaryId
            ? { ...diary, emphathies: [...diary.emphathies, newEmphathyObj] }
            : diary
        ),
      };
    case "REMOVE_EMPATHY":
      return {
        ...state,
        publicDiary: state.publicDiary.map((diary) =>
          diary.id === diaryId
            ? {
                ...diary,
                emphathies: diary.emphathies.filter(
                  (empathy) => empathy.id !== empathyId
                ),
              }
            : diary
        ),
      };

    case "REMOVE_DIARY":
      return {
        ...state,
        myDiary: state.myDiary.filter((diary) => {
          return diary.id !== diaryId;
        }),
      };

    case "REMOVE_PUBLIC_DIARY":
      return {
        ...state,
        myDiary: state.myDiary.filter((diary) => {
          return diary.id !== diaryId;
        }),
        publicDiary: state.publicDiary.filter((diary) => {
          return diary.id !== diaryId;
        }),
      };

    case "CHANGE_TO_PUBLIC": {
      return {
        ...state,
        publicDiary: [...state.publicDiary, newPublicDiary],
      };
    }

    case "CHANGE_TO_PRIVATE": {
      return {
        ...state,
        publicDiary: state.publicDiary.filter((diary) => {
          return diary.id !== diaryId;
        }),
      };
    }

    case "MODIFY_DIARY":
      return {
        ...state,
        myDiary: state.myDiary.map((diary) => {
          return diary.id === diaryId ? { ...modifiedDiary } : diary;
        }),
      };

    case "MODIFY_PUBLIC_DIARY":
      return {
        ...state,
        myDiary: state.myDiary.map((diary) => {
          return diary.id === diaryId ? { ...modifiedDiary } : diary;
        }),
        publicDiary: state.publicDiary.map((diary) => {
          return diary.id === diaryId ? { ...modifiedDiary } : diary;
        }),
      };

    default:
      return state;
  }
};

export default mainReducer;
