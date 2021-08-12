import React, { useEffect } from "react";
import MyCard from "../../main/cards/card/MyCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";

const MyCardList = ({ myDiaries, diary, modalHandle }) => {
  console.log(myDiaries);
  console.log(diary.myDiary);

  const content =
    myDiaries.length === 0 ? (
      <Link to="/main">
        {/* <DiaryLogin>📣 "일기작성은 메인페이지로" >>> Click</DiaryLogin> */}
      </Link>
    ) : (
      <CardFace>
        {myDiaries.map((diary) => (
          <MyCard key={diary.id} diary={diary} modalHandle={modalHandle} />
        ))}
      </CardFace>
    );

  return <div>{content}</div>;
};
const mapStateToProps = ({ mainReducer }) => {
  return {
    diary: mainReducer,
  };
};

export default connect(mapStateToProps)(MyCardList);

export const CardFace = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 65vh;
  transform-style: preserve-3d;
  ${flexCenter}
  transition: 1s all ease-out;
  backface-visibility: hidden;
  border-radius: 5px;
`;

export const DiaryLogin = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 1.2rem 4rem;
  font-size: 1.7rem;
  font-family: var(--thick-font);
  border-radius: 0rem;
  outline: none;
  transition: all 0.35s;
  & svg {
    width: 19px;
    height: 19px;
    color: var(--black-color);
    margin-left: 1rem;
  }

  &:hover {
    border-radius: 3rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding: 1.2rem 2rem;
    margin-left: 1rem;
  }
`;
