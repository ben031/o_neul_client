import React from "react";
import uniqueId from "lodash/uniqueId";
import { Icon } from "react-icons-kit";
import { ic_navigate_before, ic_navigate_next } from "react-icons-kit/md";
import {
  CalHeader,
  Days,
  DaysWrapper,
  Year,
} from "../../../styles/main/calendar/CalendarHeader.style";

const CalendarHeader = ({ value, next, before }) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <CalHeader>
        <Icon
          icon={ic_navigate_before}
          size={34}
          onClick={before}
          style={style}
        />
        <Year>
          {value.format("YYYY")}년 {value.format("M")}월
        </Year>
        <Icon icon={ic_navigate_next} size={34} onClick={next} style={style} />
      </CalHeader>
      <DaysWrapper>
        {days.map((day) => (
          <Days day={day} key={uniqueId()}>
            {day}
          </Days>
        ))}
      </DaysWrapper>
    </>
  );
};

export default React.memo(CalendarHeader);

const style = { cursor: "pointer" };
