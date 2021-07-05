import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";
import MusicHook from "../music/MusicHook";
const Diary = ({ modalHandle, clickmoment }) => {
  console.log(clickmoment.format("L"));

  return (
    <Diarybackground>
      <Button onClick={modalHandle}>
        닫을려면 이거 눌러주세요 {clickmoment.format("")}
      </Button>
      {/* <MusicHook /> */}
    </Diarybackground>
  );
};

export default Diary;

const Diarybackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  ${flexCenter}
`;

const Button = styled.button`
  padding: 5rem;
  color: #000;
  background: #fff;
  border: 5px solid cornflowerblue;
`;