export const makecalendar = (value) => {
  const startday = value.clone().startOf("M").startOf("week");
  const lastday = value.clone().endOf("M").endOf("week");

  const calendar = [];

  const lastdayoflastM = startday.clone().subtract(1, "day");

  while (lastdayoflastM.isBefore(lastday, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          return lastdayoflastM.add(1, "day").clone();
        })
    );
  }

  return calendar;
};

export const diaryCheck = (myDiaryInfo, day, func) => {
  return myDiaryInfo.find(
    (diary) => diary.date === func(day).format("YYYY-M-D")
  );
};
