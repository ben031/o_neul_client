import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";
import DiaryWriting from "../modals/DiaryWriting";
import { connect } from "react-redux";
import "aos/dist/aos.css";

const Diary = ({
  closeDiaryModal,
  clickmoment,
  diary,
  selectedDiaryId,
  passDiaryId,
}) => {
  const filterDiary = () => {
    if (selectedDiaryId) {
      const otherDiary = diary.publicDiary.filter(
        (el) => el.id === selectedDiaryId
      )[0];
      otherDiary.isOtherDiary = true;
      return otherDiary;
    } else if (clickmoment) {
      return diary.myDiary.filter(
        (el) => el.date === clickmoment.format("YYYY-M-D")
      )[0];
    }
  };

  const selectedDiary = filterDiary();
  console.log(selectedDiaryId);
  return (
    <Diarybackground data-aos={"zoom"} data-aos-duration={"500"}>
      <DiaryWriting
        closeDiaryModal={closeDiaryModal}
        clickmoment={clickmoment}
        selectedDiary={selectedDiary}
        passDiaryId={passDiaryId}
      />
    </Diarybackground>
  );
};
const mapStateToProps = ({ mainReducer }) => {
  return {
    diary: mainReducer,
  };
};

export default connect(mapStateToProps)(Diary);

export const Diarybackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  ${flexCenter}
`;
