import React from "react";
import moment from "moment";
import {
  DayWarpper,
  DaySpan,
  Emoji,
} from "../../../styles/main/calendar/Day.style";
import { connect } from "react-redux";
import { icons } from "../../../icons/icons";

const Day = ({ diary, value, day, modalHandle }) => {
  let dayEmoji;
  const { faceIcons } = icons;

  diary.myDiary.forEach(
    (ele) =>
      ele.date === day.format("YYYY-M-D") &&
      (dayEmoji = faceIcons.find((icon) => icon.id === ele.feeling))
  );

  const m = moment();

  return (
    <DayWarpper
      today={m.format("L") === day.format("L")}
      onClick={() => {
        modalHandle(day);
      }}
    >
      <DaySpan
        today={m.format("L") === day.format("L")}
        sunday={day.format("dddd") === "일요일"}
        saturday={day.format("dddd") === "토요일"}
        lastmonth={day.format("M") !== value.format("M")}
      >
        {day.format("D")}
      </DaySpan>
      <Emoji>{dayEmoji && dayEmoji.icon}</Emoji>
    </DayWarpper>
  );
};

const mapStateToProps = ({ mainReducer }) => {
  return {
    diary: mainReducer,
  };
};

export default connect(mapStateToProps)(Day);
