export const fonts = {
  poppinsRegular: "PoppinsRegular",
  poppinsMedium: "PoppinsMedium",
  poppinsSemiBold: "PoppinsSemiBold",
  poppinsBold: "PoppinsBold",
  comfortaaRegular: "ComfortaaRegular",
  comfortaaBold: "ComfortaaBold",
  interBold: "InterBold",
};

export const path = {
  home: "/",
  liveClasses: "/",
  liveClass: "/live-class",
  videos: "/videoclasses",
  videoClass: "/video-class",

  membership: "/user/profile",
  admin: "/dashboard/admin",
  instructor: "/instructors",

  signIn: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
};

export const adminDashboardMenu = [
  {
    name: "Admin Profile",
    path: "/dashboard/admin",
  },
  {
    name: "Instrutors",
    path: "/dashboard/instructors",
  },
  {
    name: "Live Sessions",
    path: "/dashboard/live-sessions",
  },
  {
    name: "Video Listing",
    path: "/dashboard/video-listing",
  },
  {
    name: "Feature Lesson",
    path: "/dashboard/feature-lesson",
  },
  {
    name: "Add Reveiw",
    path: "/dashboard/add-review",
  },
];

export const userDashboardMenu = [
  {
    name: "My Profile",
    path: "/user/profile",
  },
  {
    name: "Membership",
    path: "/user/membership",
  },
  {
    name: "Payment",
    path: "/user/payment",
  },
  {
    name: "History",
    path: "/user/history",
  },
  {
    name: "Live Booking",
    path: "/user/live-booking",
  },
];

export const layout = {
  mobile: "280px",
  mobileMedium: "420px",
  mobileLarge: "650px",
  tablet: "768px",
  laptop: "1001px",
  desktop: "1368px",
  largeDesktop: "1980px",
};

export const filterKeys = {
  duration: "duration",
  instructors: "instructors",
  styles: "styles",
  fitness: "fitness",
  mindfulness: "mindfulness",
  skills: "skills",
  yoga: "yoga",
  setYourIntention: "setYourIntention",
  difficulty: "difficulty",
  intensity: "intensity",
  date: "date",
};

export const externalLinks = {
  subscriptionPlan: {
    url: "https://youdio.strugbits.com/membership/",
  },
};

export const timeZones = [
  { value: "-12:00", label: "(GMT -12:00) Eniwetok, Kwajalein" },
  { value: "-11:00", label: "(GMT -11:00) Midway Island, Samoa" },
  { value: "-10:00", label: "(GMT -10:00) Hawaii" },
  { value: "-09:30", label: "(GMT -9:30) Taiohae" },
  { value: "-09:00", label: "(GMT -9:00) Alaska" },
  { value: "-08:00", label: "(GMT -8:00) Pacific Time (US & Canada)" },
  { value: "-07:00", label: "(GMT -7:00) Mountain Time (US & Canada)" },
  {
    value: "-06:00",
    label: "(GMT -6:00) Central Time (US & Canada), Mexico City",
  },
  {
    value: "-05:00",
    label: "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",
  },
  { value: "-04:30", label: "(GMT -4:30) Caracas" },
  {
    value: "-04:00",
    label: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",
  },
  { value: "-03:30", label: "(GMT -3:30) Newfoundland" },
  { value: "-03:00", label: "(GMT -3:00) Brazil, Buenos Aires, Georgetown" },
  { value: "-02:00", label: "(GMT -2:00) Mid-Atlantic" },
  { value: "-01:00", label: "(GMT -1:00) Azores, Cape Verde Islands" },
  {
    value: "+00:00",
    label: "(GMT) Western Europe Time, London, Lisbon, Casablanca",
  },
  { value: "+01:00", label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris" },
  { value: "+02:00", label: "(GMT +2:00) Kaliningrad, South Africa" },
  {
    value: "+03:00",
    label: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",
  },
  { value: "+03:30", label: "(GMT +3:30) Tehran" },
  { value: "+04:00", label: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi" },
  { value: "+04:30", label: "(GMT +4:30) Kabul" },
  {
    value: "+05:00",
    label: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",
  },
  { value: "+05:30", label: "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi" },
  { value: "+05:45", label: "(GMT +5:45) Kathmandu, Pokhara" },
  { value: "+06:00", label: "(GMT +6:00) Almaty, Dhaka, Colombo" },
  { value: "+06:30", label: "(GMT +6:30) Yangon, Mandalay" },
  { value: "+07:00", label: "(GMT +7:00) Bangkok, Hanoi, Jakarta" },
  {
    value: "+08:00",
    label: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",
  },
  { value: "+08:45", label: "(GMT +8:45) Eucla" },
  {
    value: "+09:00",
    label: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
  },
  { value: "+09:30", label: "(GMT +9:30) Adelaide, Darwin" },
  {
    value: "+10:00",
    label: "(GMT +10:00) Eastern Australia, Guam, Vladivostok",
  },
  { value: "+10:30", label: "(GMT +10:30) Lord Howe Island" },
  {
    value: "+11:00",
    label: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia",
  },
  { value: "+11:30", label: "(GMT +11:30) Norfolk Island" },
  {
    value: "+12:00",
    label: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",
  },
  { value: "+12:45", label: "(GMT +12:45) Chatham Islands" },
  { value: "+13:00", label: "(GMT +13:00) Apia, Nukualofa" },
  { value: "+14:00", label: "(GMT +14:00) Line Islands, Tokelau" },
];
