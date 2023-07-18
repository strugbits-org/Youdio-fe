// import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "src/components/Header";
import Footer from "src/components/Footer";

// Authenticate
import Login from "src/screens/Authenticate/Login";
import Register from "src/screens/Authenticate/Register";

// User
import LiveClasses from "src/screens/user/LiveClasses";
import Instructor from "src/screens/user/Instructor";
import SingleInstructor from "src/screens/user/SingleInstructor";
import Payment from "src/screens/user/Payment";

// User Dashboard
import History from "src/screens/user/Dashboard/Screen/HistoryScreen/Index";
import Membership from "src/screens/user/Dashboard/Screen/MembershipScreen/Index";
import MyProfile from "src/screens/user/Dashboard/Screen/MyProfileScreen/Index";
import LiveBooking from "src/screens/user/Dashboard/Screen/LiveBookingScreen/Index";
import LiveVideo from "src/screens/user/LiveVideo";
import ForgotPassword from "src/screens/Authenticate/ForgotPassword";
import ResetPassword from "src/screens/Authenticate/ResetPassword";
import VideoClasses from "src/screens/user/VideoClasses";
import AddInstructor from "src/screens/admin/pages/AddInstructor/Index";
import AddLiveSession from "src/screens/admin/pages/AddLiveSession/Index";

import VideoClass from "src/screens/user/VideoClass";
import AddVideo from "src/screens/admin/pages/AddVideo/Index";
import AdminDashboard from "src/screens/admin/pages";
import UserDashboard from "src/screens/user/Dashboard";
import usePermission from "src/features/hooks/usePermission";
import useScrollToTop from "src/features/hooks/useScrollToTop";
import PaymentDetail from "src/screens/user/Dashboard/Screen/PaymentScreen/Index";
import PageNotFound from "src/screens/PageNotFound";

//f0d18eebe6a4a8805d27a3031a904dcb344de975
const AllRoutes = () => {
  useScrollToTop();

  const ProtectedRoute = ({ children, permission }) => {
    const base = useSelector((state) => state.user);
    let location = useLocation();
    const { hasPermission } = usePermission();

    if (!base.token) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (base.token && permission && !hasPermission(permission)) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
  };

  const ProtectedAuthRoute = ({ children }) => {
    const base = useSelector((state) => state.user);
    let location = useLocation();

    if (base.token) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
  };
  return (
    <Routes>
      {/* Authenticate */}
      <Route
        path="/login"
        element={<ProtectedAuthRoute children={<Login />} />}
      />
      <Route
        path="/register"
        element={<ProtectedAuthRoute children={<Register />} />}
      />

      <Route
        path="/forgot-password"
        element={
          <ProtectedAuthRoute children={<ForgotPassword isReset={false} />} />
        }
      />

      <Route
        path="/reset-password/:token"
        element={<ProtectedAuthRoute children={<ResetPassword />} />}
      />

      {/* User */}
      <Route path="/" element={<LiveClasses />} />
      <Route path="/instructor" element={<Instructor />} />
      <Route path="/live-class/:id" element={<LiveVideo />} />
      <Route path="/videoclasses" element={<VideoClasses />} />
      <Route path="/singleinstructor/:id" element={<SingleInstructor />} />
      <Route path="/payment" element={<Payment />} />

      {/* SINGLE VIDEO */}
      <Route
        path="/video-class"
        element={<VideoClass />}
        // loader={async ({params}) => {
        //   await fetchData(`liveSession/get/${params.id}`);
        // }}
      />

      {/* User Dashboard */}
      <Route
        path="user"
        element={
          <ProtectedRoute
            children={<UserDashboard />}
            permission="user.dashboard"
          />
        }
      >
        <Route path="membership" element={<Membership />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="payment" element={<PaymentDetail />} />
        <Route path="history" element={<History />} />
        <Route path="live-booking" element={<LiveBooking />} />
      </Route>

      {/* Admin Dashboard */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute
            children={<AdminDashboard />}
            permission="admin.dashboard"
          />
        }
      >
        {/* <Route path="/" index={true} element={<AddVideo />} /> */}
        <Route path="admin" element={<AddVideo />} />
        <Route path="add-instructor" element={<AddInstructor />} />
        <Route path="add-video" element={<AddVideo />} />
        <Route path="add-live-session" element={<AddLiveSession />} />
      </Route>
      <Route path="page-not-found" element={<PageNotFound />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default function Router() {
  // useEffect(() => {
  //     // Calling a auth function if user logged in setUser with id or something. Else setUser to null.
  // }, [])

  return (
    <BrowserRouter>
      <Header />
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
}
