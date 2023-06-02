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
import MembershipScreen2 from "src/screens/user/Dashboard/Screen/MembershipScreen2/MembershipScreen2";
import Membership from "src/screens/user/Dashboard/Screen/MembershipScreen/Index";
import MyProfile from "src/screens/user/Dashboard/Screen/MyProfileScreen/Index";
import Payment from "src/screens/user/Dashboard/Screen/PaymentScreen/Index";
import LiveBooking from "src/screens/user/Dashboard/Screen/LiveBookingScreen/Index";
import LiveVideo from "src/screens/user/LiveVideo";
import ForgotPassword from "src/screens/Authenticate/ForgotPassword";
import ResetPassword from "src/screens/Authenticate/ResetPassword";
import VideoClasses from "src/screens/user/VideoClasses";

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
          <Route path="/videoclasses" element={<LiveClasses />} />
          <Route path="/singleinstructor/:id" element={<SingleInstructor />} />

          {/* User Dashboard */}
          <Route
            path="/membership"
            element={<ProtectedRoute children={<Membership />} />}
          />
          <Route
            path="/myprofile"
            element={<ProtectedRoute children={<MyProfile />} />}
          />
          <Route
            path="/membership2"
            element={<ProtectedRoute children={<MembershipScreen2 />} />}
          />
          <Route
            path="/payment"
            element={<ProtectedRoute children={<Payment />} />}
          />
          <Route
            path="/history"
            element={<ProtectedRoute children={<History />} />}
          />
          <Route
            path="/liveBooking"
            element={<ProtectedRoute children={<LiveBooking />} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
