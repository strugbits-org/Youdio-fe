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

// User Dashboard
import History from "src/screens/user/Dashboard/Screen/HistoryScreen/Index";
import Membership from "src/screens/user/Dashboard/Screen/MembershipScreen/Index";
import MyProfile from "src/screens/user/Dashboard/Screen/MyProfileScreen/Index";
import Payment from "src/screens/user/Dashboard/Screen/PaymentScreen/Index";
import LiveBooking from "src/screens/user/Dashboard/Screen/LiveBookingScreen/Index";
import LiveVideo from "src/screens/user/LiveVideo";
import ForgotPassword from "src/screens/Authenticate/ForgotPassword";
import ResetPassword from "src/screens/Authenticate/ResetPassword";
import VideoClasses from "src/screens/user/VideoClasses";
import AddInstructor from "src/screens/admin/pages/AddInstructor/Index";
import AddLiveSession from "src/screens/admin/pages/AddLiveSession/Index";

import SingleVideo from "src/screens/user/SingleVideo/Index";
import AddVideo from "src/screens/admin/pages/AddVideo/Index";
import AdminDashboard from "src/screens/admin/pages";
import UserDashboard from "src/screens/user/Dashboard";

//f0d18eebe6a4a8805d27a3031a904dcb344de975

export default function Router() {
  // useEffect(() => {
  //     // Calling a auth function if user logged in setUser with id or something. Else setUser to null.
  // }, [])

  const ProtectedRoute = ({ children }) => {
    const base = useSelector((state) => state.user);
    let location = useLocation();

    if (!base.token) {
      return <Navigate to="/login" state={{ from: location }} replace />;
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
    <div>
      <BrowserRouter>
        {/* {user ? <DashboardHeader /> : <Header />} */}
        <Header />

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
              <ProtectedAuthRoute
                children={<ForgotPassword isReset={false} />}
              />
            }
          />

          <Route
            path="/reset-password/:token"
            element={<ProtectedAuthRoute children={<ResetPassword />} />}
          />

          {/* User */}
          <Route path="/" element={<LiveClasses />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/livevideo" element={<LiveVideo />} />
          <Route path="/videoclasses" element={<VideoClasses />} />
          <Route path="/singleinstructor/:id" element={<SingleInstructor />} />

          {/* SINGLE VIDEO */}
          <Route path="/singlevideo" element={<SingleVideo />} />

          {/* User Dashboard */}
          <Route
            path="user"
            element={<ProtectedRoute children={<UserDashboard />} />}
          >
            <Route path="membership" element={<Membership />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="payment" element={<Payment />} />
            <Route path="history" element={<History />} />
            <Route path="live-booking" element={<LiveBooking />} />
          </Route>

          {/* Admin Dashboard */}
          <Route path="dashboard" element={<ProtectedRoute children={<AdminDashboard />}/>}>
            {/* <Route path="/" index={true} element={<AddVideo />} /> */}
            <Route path="add-instructor" element={<AddInstructor />} />
            <Route path="add-video" element={<AddVideo />} />
            <Route path="add-live-session" element={<AddLiveSession />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
