import { NavLink } from "react-router-dom";
import { SidebarData } from "./Constant";
import { SidebarBtn, SideBarWrapper, WholeSidebar } from "./SidebarComponent";
// import { Heading3 } from '../Heading';
// import {FaBars} from "react-icons/fa"
import Item from "../Item/Item";
import { motion } from "framer-motion";
import {
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  DashboardRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { TocRounded } from "@mui/icons-material";

function Sidebar() {
  // const [menu, setMenu] = useState(false);
  // const reset = () => {
  //   setMenu(false);
  // };
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "4rem",
      transition: {
        delay: 0,
      },
    },
  };


  return (
    <WholeSidebar>
      <SideBarWrapper>
        {SidebarData.map((item, index) => {
          return (
            <NavLink to={item.path}>
              <SidebarBtn key={index} >
                <span>{item.title}</span>
              </SidebarBtn>
            </NavLink>
          );
        })}
      </SideBarWrapper>

      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
        style={{position:"absolute",zIndex:"1"}}
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          <div className="groups">
            {/* Heading  */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                Dashboard
              </motion.h3>
              <Item icon={<DashboardRounded />} name="My Profile" path="/myprofile" />
              <Item icon={<BarChartRounded />} name="Membership" path="/membership" />
              <Item icon={<AttachMoneyRounded />} name="Payment" path="/payment" />
              <Item icon={<AssignmentTurnedInRounded />} name="History" path="/history" />
              <Item icon={<AssignmentTurnedInRounded />} name="Live Booking" path="/livebooking" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </WholeSidebar>
  );
}

export default Sidebar;
