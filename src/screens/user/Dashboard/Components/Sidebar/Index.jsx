import React from 'react';
import {  NavLink } from 'react-router-dom';
import { SidebarData } from './Constant';
import { SidebarBtn, SideBarWrapper } from './SidebarComponent';

function Sidebar() {
  return (
        <SideBarWrapper >
            {SidebarData.map((item, index) => {
              return (
                <SidebarBtn   key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarBtn>
              );
            })}
            </SideBarWrapper>
  );
}

export default Sidebar;
