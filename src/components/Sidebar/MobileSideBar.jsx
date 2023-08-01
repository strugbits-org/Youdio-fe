import React from "react";
import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";
import { icons, path } from "src/helpers";
// import {styled} from "@mui/material";
import styled from "styled-components";
import { IconButton } from "@mui/material";

const CustomDrawer = styled(Drawer)({
  marginTop: "16px",
  color: "var(--textHeadingWhite)",
  paddingBlock: "1vw",
  "& .MuiDrawer-paper": {
    background: "white",
    width: "100%",
    maxWidth: "280px",
    paddingInline: "3vw",
    paddingBlock: "8px",
    ".logo": {
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "a > img": {
        flex:1,
        width: "clamp(100px, 10vw, 189px)",
      },
    },
  },
});

const VerticalMenus = styled.nav`
  .vericalMenu {
    li {
      margin-block: 4px;
      a {
        width: 100%;
        padding: 8px;
        transition: var(--transition01s);
        color: var(--textHeadingBlack);
        font-size: 16px;
        font-weight: 500;
        display: inline-block;
      }
      .active {
        background: var(--backgroundGreen);
        color: white;
      }
    }
  }
`;

export default function MobileSideBar({ menu, setActive, open, handleClose }) {
  return (
    <CustomDrawer anchor={"left"} open={open} onClose={handleClose}>
      <div className="logo">
        <NavLink to={path.home}>
          <img src={icons.youdio} alt="youdio" width="" height="" />
        </NavLink>

        <IconButton onClick={handleClose}>
          <img
            className="close"
            src={icons.crossDark}
            alt="Close"
            width="14px"
            height="14px"
          />
        </IconButton>
      </div>
      <VerticalMenus>
        <ul className="vericalMenu">
          {menu &&
            menu.map((item, ind) => {
              return (
                <li
                  key={`${item.path}-${ind}`}
                  onClick={() => setActive(item.name)}
                >
                  <NavLink to={item.path} state={{ activePath: item.name }}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </VerticalMenus>
    </CustomDrawer>
  );
}
