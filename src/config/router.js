// import { useState, useEffect } from 'react'
import {
    BrowserRouter,
    Routes, Route
} from "react-router-dom";

// import Home from '../screens/user/Home';
// import UserProfile from '../screens/user/UserProfile';
import LiveClasses from 'src/screens/user/LiveClasses';
// import VideoClasses from '../screens/user/VideoClasses';
import Login from "src/screens/user/Login";
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import MembershipScreen2 from "src/screens/user/Dashboard/Screen/MembershipScreen2/MembershipScreen2";
import Membership from "src/screens/user/Dashboard/Screen/MembershipScreen/Membership";
import MyProfile from "src/screens/user/Dashboard/Screen/MyProfileScreen/MyProfile";
import Payment from "src/screens/user/Dashboard/Screen/PaymentScreen/Payment";


export default function Router() {

    // const [user, setUser] = useState()

    // const protectedRoute = (component) => {
    //     if (!user) {
    //         return <Login />
    //     }
    //     else {
    //         return component
    //     }
    // }

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

    return <div>
        <BrowserRouter>
            {/* {user ? <DashboardHeader /> : <Header />} */}
            <Header />

            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<LiveClasses />} />
                {/* <Route path="/live-classes" element={<LiveClasses />} /> */}
                {/* <Route path="/video-classes" element={<VideoClasses />} />
                <Route path="/user-profile" element={<UserProfile />} />*/
                    <Route path="/login" element={<Login />} />}

                    <Route path="/membership" element={<Membership/>} />
                     <Route path="/myprofile" element={<MyProfile/>} />
                     <Route path="/membership2" element={<MembershipScreen2/>} />
                     <Route path="/payment" element={<Payment/>} />

                {/* <Route path="/" element={protectedAuthRoute(<Login />)} />
                <Route path="/login" element={protectedAuthRoute(<Login />)} />
                <Route path="/signup" element={protectedAuthRoute(<Signup />)} />
                
                <Route path="/dashboard" element={protectedRoute(<Dashboard />)} />
                <Route path="/createAd" element={protectedRoute(<CreateAd />)} />
            <Route path="/productDetails/:adId" element={protectedRoute(<ProductDetails />)} /> */}

            </Routes>
            <Footer />

        </BrowserRouter>
    </div>
}

//Types of Routing
//1. 