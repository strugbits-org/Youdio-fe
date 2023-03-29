import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './Constant';
import { SidebarBtn, SideBarWrapper } from './SidebarComponent';

function Sidebar() {
  return (
        <SideBarWrapper >
            {SidebarData.map((item, index) => {
              return (
                <SidebarBtn  key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </SidebarBtn>
              );
            })}
            </SideBarWrapper>
  );
}

export default Sidebar;
