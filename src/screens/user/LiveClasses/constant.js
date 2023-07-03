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

const getFormated = (date) => {
  const d = date.getDate();
  const m = date.getMonth();
  const wd = weekDays[date.getDay()].slice(0, 3);
  const dateObject = {
    dateString: `${m + 1}/${d} (${wd})`,
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
    monthName: months[date.getMonth()],
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
