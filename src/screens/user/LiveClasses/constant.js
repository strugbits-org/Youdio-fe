// import { current } from "@reduxjs/toolkit";
import moment from "moment/moment";

export const liveClassStaticContent = {
  heroSectionh1: "Find Perfect Live Class",
  heroSectionp1:
    "Start your Yoga, Meditation and Fitness routines by availing our live or recorded VIDEOS",
  monthSectionMonth: "December",
  weekSectionPrev: "previous",
  weekSectionNext: "next",
  searchPlaceholder: "Search",
  instructorSectionh1: "Our Instructor",
  instructorSectionp1:
    "Start your Yoga, Meditation and Fitness routines by availing our live or recorded VIDEOS",
};

export const dates = [
  {
    dateString: "12/7  (Wed)",
  },
  {
    dateString: "12/8  (Thu)",
  },
  {
    dateString: "12/9  (Fri)",
  },
  {
    dateString: "12/10  (Sat)",
  },
  {
    dateString: "12/11  (Sun)",
  },
  {
    dateString: "12/12  (Mon)",
  },
  {
    dateString: "12/13  (Tue)",
  },
  {
    dateString: "12/14  (Wed)",
  },
  {
    dateString: "12/15  (Thu)",
  },
  {
    dateString: "12/16  (Fri)",
  },
  {
    dateString: "12/17  (Sat)",
  },
  {
    dateString: "12/18  (Sun)",
  },
  {
    dateString: "12/19  (Mon)",
  },
  {
    dateString: "12/20  (Tue)",
  },
];

export const monthNames = moment.months().map((val, ind) => {
  return { id: ind, name: val };
});

export const getDaysArray = function (year, month) {
  var monthIndex = month; // 0..11 instead of 1..12
  var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var date = new Date(year, monthIndex, 1);
  var result = [];
  while (date.getMonth() === monthIndex) {
    // result.push(date.getDate() + '-' + names[date.getDay()]);
    result.push({
      id: date.getDate(),
      dateString: `${date.getMonth() + 1}/${date.getDate()} (${
        names[date.getDay()]
      })`,
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getMonth = (action, current) => {
  const date = current?.date ? current.date : new Date();
    console.log(current);
  if (action === "next") {
    date.setMonth(current.monthIndex + 1);
    return {
      monthName: months[date.getMonth()],
      year: date.getFullYear(),
      date,
      monthIndex: date.getMonth(),
      weekDay: weekDays[date.getDay()],
      todayDate: date.getDate(),
    };
  } else if (action === "prev") {
    date.setMonth(current.monthIndex - 1);
    return {
      monthName: months[date.getMonth()],
      year: date.getFullYear(),
      date,
      monthIndex: date.getMonth(),
      weekDay: weekDays[date.getDay()],
      todayDate: date.getDate(),
    };
  }
  return {
    monthName: months[date.getMonth()],
    year: date.getFullYear(),
    date,
    monthIndex: date.getMonth(),
    weekDay: weekDays[date.getDay()],
    todayDate: date.getDate(),
  };
};
