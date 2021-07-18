import React from "react";
import { connect } from "react-redux";
import {
  OtherDiaryHeader,
  OtherDiaryInnerWrapper,
  OtherDiaryWrapper,
} from "../../../styles/main/cards/OtherCards.style";
import OtherCard from "./card/OtherCard";

const OtherCards = ({ diary, closeDiaryModal, passDiaryId }) => {
  const { publicDiary } = diary;

  return (
    <OtherDiaryWrapper>
      <OtherDiaryHeader>타인의 오늘 .</OtherDiaryHeader>
      <OtherDiaryInnerWrapper>
        {publicDiary &&
          publicDiary.map((d) => (
            <OtherCard
              key={d.id}
              diary={d}
              closeDiaryModal={closeDiaryModal}
              passDiaryId={passDiaryId}
            />
          ))}
      </OtherDiaryInnerWrapper>
    </OtherDiaryWrapper>
  );
};

const mapStateToProps = ({ mainReducer }) => {
  return {
    diary: mainReducer,
  };
};

export default connect(mapStateToProps)(OtherCards);
