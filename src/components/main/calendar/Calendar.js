import React from "react";
import Week from "./Week";
import uniqueId from "lodash/uniqueId";
import { makecalendar } from "./calendarFuntion";
import styled from "styled-components";

const Calendar = ({ value, modalHandle }) => {
  let calendar = makecalendar(value);

  return (
    <CalendarArticle>
      {calendar &&
        calendar.map((week) => (
          <Week
            value={value}
            week={week}
            modalHandle={modalHandle}
            key={uniqueId()}
          />
        ))}
    </CalendarArticle>
  );
};

export default Calendar;

const CalendarArticle = styled.article`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;