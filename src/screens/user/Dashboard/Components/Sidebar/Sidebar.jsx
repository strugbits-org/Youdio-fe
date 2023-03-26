import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SidebarBtn } from './SidebarComponent';

function Sidebar() {
  return (
    <>
        <div style={{ paddingTop:"40px",display:"flex",flexDirection:"column",gap:"1rem",}}>
            {SidebarData.map((item, index) => {
              return (
                <SidebarBtn style={{listStyleType:"none"}} key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </SidebarBtn>
              );
            })}
         
            </div>
    </>
  );
}

export default Sidebar;
