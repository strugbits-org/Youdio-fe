import i18next from "i18next";
import { t } from "i18next";

i18next.on("languageChanged", () => {
  // console.log(i18next.language, "changed");
})

const months = [
  "date.months.jan",
  "date.months.feb",
  "date.months.mar",
  "date.months.apr",
  "date.months.may",
  "date.months.jun",
  "date.months.july",
  "date.months.aug",
  "date.months.sep",
  "date.months.oct",
  "date.months.nov",
  "date.months.dec",
];

const weekDays = [
  "date.days.mon",
  "date.days.tue",
  "date.days.wed",
  "date.days.thu",
  "date.days.fri",
  "date.days.sat",
  "date.days.sun",
];

const getFormated = (date) => {
  const d = date.getDate();
  const m = date.getMonth();
  const wd = t(weekDays[date.getDay()]);
  const dateObject = {
    dateString: {
      date: `${m + 1}/${d}`,
      weekDay: `(${wd})`,
      concatDate: `${m + 1}/${d} (${wd})`,
    },
    d,
    m,
  };
  return dateObject;
};

const getDaysInWeek = (date, { prevDays, nextDays }) => {
  const currentDate = date;
  const pastDates = [...Array(prevDays)].map((_, i) => {
    const date = new Date(
      currentDate.getTime() - (i + 1) * 24 * 60 * 60 * 1000
    );
    return getFormated(date);
  });
  const futureDates = [...Array(nextDays)].map((_, i) => {
    const date = new Date(
      currentDate.getTime() + (i + 1) * 24 * 60 * 60 * 1000
    );
    return getFormated(date);
  });
  const week = pastDates.reverse().concat(getFormated(date), futureDates);
  return week;
};

const getDateValues = (date, prevNextDays) => {
  return {
    monthIndex: date.getMonth(),
    monthName: t(months[date.getMonth()]),
    year: date.getFullYear(),
    selectedDate: date.getDate(),
    day: weekDays[date.getDay()],
    date,
    daysInWeek: getDaysInWeek(date, prevNextDays),
  };
};

export const getDate = (action, current, prevNextDays, selectDate, isMonth) => {
  const date = current?.date ? current.date : new Date();

  if (isMonth) {
    if (action === "next") date.setMonth(current.monthIndex + 1);
    if (action === "prev") date.setMonth(current.monthIndex - 1);
    return getDateValues(date, prevNextDays);
  }

  if (action === "next") date.setDate(date.getDate() + 1);
  if (action === "prev") date.setDate(date.getDate() - 1);
  if (action === "select") {
    date.setDate(selectDate.d);
    date.setMonth(selectDate.m);
  }
  return getDateValues(date, prevNextDays);
};
