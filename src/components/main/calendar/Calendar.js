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

export default React.memo(Calendar);

const CalendarArticle = styled.article`
  font-size: 1.6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
