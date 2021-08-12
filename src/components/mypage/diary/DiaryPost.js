import React, { useState, useEffect } from "react";
import { DiaryContainer, Div } from "../../../styles/mypage/DiaryPost.style";
import { connect } from "react-redux";
import SelectFilter from "./SelectFilter";
import MyCardList from "./MyCardList";

const DiaryPost = ({ diary, myDiaries, setMyDiaries, modalHandle }) => {
  const [onPublic, setOnPublic] = useState("");

  console.log(myDiaries);

  const filteringPublic = (e) => {
    let selectCard = e.target.value;
    setOnPublic(selectCard);
    if (selectCard === "") {
      setMyDiaries(diary.myDiary);
    } else if (selectCard === "true") {
      setMyDiaries(
        diary.myDiary.filter((diary) => {
          return diary.isPublic === true;
        })
      );
    } else if (selectCard === "false") {
      setMyDiaries(
        diary.myDiary.filter((diary) => {
          return diary.isPublic === false;
        })
      );
    }
  };

  return (
    <>
      <Div>
        <SelectFilter filteringPublic={filteringPublic} onPublic={onPublic} />
      </Div>
      <DiaryContainer>
        {myDiaries && (
          <MyCardList myDiaries={myDiaries} modalHandle={modalHandle} />
        )}
      </DiaryContainer>
    </>
  );
};

const mapStateToProps = ({ loginReducer, mainReducer }) => {
  return {
    userInfo: loginReducer,
    diary: mainReducer,
  };
};

export default connect(mapStateToProps)(DiaryPost);
