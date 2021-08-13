import React from "react";
import Day from "./Day";
import uniqueId from "lodash/uniqueId";

const Week = ({ value, week, modalHandle }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {week.map((day) => (
        <Day
          value={value}
          day={day}
          modalHandle={modalHandle}
          key={uniqueId()}
        />
      ))}
    </div>
  );
};

export default Week;
