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
  liveClasses: "",
  videos: "/videoclasses",

  membership: "/user/profile",
  admin: "/dashboard/admin",
  instructor: "/instructor",

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
    name: "Premium Instrutors",
    path: "",
  },
  {
    name: "Live Sessions",
    path: "",
  },
  {
    name: "Video Listing",
    path: "",
  },
  {
    name: "Add Video",
    path: "/dashboard/add-video",
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
