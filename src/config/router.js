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

//f0d18eebe6a4a8805d27a3031a904dcb344de975

const ProtectedRoute = ({ children }) => {
  const base = useSelector((state) => state.counter);
  let location = useLocation();

  if (!base.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default function Router() {

  // // Protected Routes For check the user is logged in or not | if loggedin show redirect to member page else show login or signup page.
  // const protectedAuthRoute = (component) => {
  //     if (user) {
  //         return <Dashboard />
  //     }
  //     else {
  //         return component
  //     }
  // }

  // useEffect(() => {
  //     // Calling a auth function if user logged in setUser with id or something. Else setUser to null.
  // }, [])

  return (
    <div>
      <BrowserRouter>
        {/* {user ? <DashboardHeader /> : <Header />} */}
        <Header />

        <Routes>
          {/* Authenticate */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User */}
          <Route path="/" element={<LiveClasses />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/livevideo" element={<LiveVideo />} />
          <Route path="/singleinstructor/:id" element={<SingleInstructor />} />

          {/* User Dashboard */}
          <Route
            path="/membership"
            element={
              <ProtectedRoute>
                <Membership />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myprofile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/membership2"
            element={
              <ProtectedRoute>
                <MembershipScreen2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path="/liveBooking"
            element={
              <ProtectedRoute>
                <LiveBooking />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
