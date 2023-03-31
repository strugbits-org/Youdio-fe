
import {  NavLink } from 'react-router-dom';
import { SidebarData } from './Constant';
import { SidebarBtn, SideBarWrapper, WholeSidebar } from './SidebarComponent';
// import { Heading3 } from '../Heading';
// import {FaBars} from "react-icons/fa"
import Item from '../Item/Item';
import { motion } from "framer-motion";
import {
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  DashboardRounded,
} from "@mui/icons-material";
import { useState } from 'react';
import { TocRounded } from '@mui/icons-material';


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
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "4rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  // const profileVariants = {
  //   true: {
  //     alignSelf: "center",
  //     width: "4rem",
  //   },
  //   false: {
  //     alignSelf: "flex-start",
  //     marginTop: "2rem",
  //     width: "4rem",
  //   },
  // };
  return (

<WholeSidebar>
  
        <SideBarWrapper >
            {SidebarData.map((item, index) => {
              return (
                <NavLink to={item.path}>
                <SidebarBtn   
                key={index} className={item.cName}>
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
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          {/* <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
           <h1>H</h1>
          </motion.div> */}
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                Dashboard
              </motion.h3>
              <Item icon={<DashboardRounded />} name="My Profile" />
              <Item icon={<BarChartRounded />} name="Membership" />
            <Item icon={<AttachMoneyRounded />} name="Payment" />
            <Item icon={<AssignmentTurnedInRounded />} name="History" />
            <Item icon={<AssignmentTurnedInRounded />} name="Live Booking" />


            </div>
          </div>
         
        </motion.div>
      </motion.div>

     
      
          {/* ///////////////// this is a comment code of Sidebar donot uncomment this I will remove this later //////////////// */}
             {/* <div className="sidebar_container"
             >
                 <div className="sidebar">
                  <div className='top-gray-level'>
                  <div className="top_level">
                  <FaBars style={{color:"white",height:"1rem",}}/>
                   <Heading3 style={{color:"white"}}>
                   Hassan Lodhi
                  </Heading3>
                 
                 </div>
               
                </div>
               

                <div className="groups">
                    <div className="group">
                      <Item/>
                    </div>
                  </div>

              </div>

             </div> */}
</WholeSidebar>
  );
}

export default Sidebar;

