import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { H1, Section } from "src/components";
import styled from "styled-components";
import { layout } from "src/helpers";
import { HorizontalLine } from "src/components/BreakLines";
import useWindowSize from "src/features/hooks/useInnerWidth";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import MobileSideBar from "./Sidebar/MobileSideBar";
import { SideBar } from "./Sidebar";
const { laptop, desktop, mobile } = layout;
const CustomSection = styled(Section)`
  position: relative;
  /* padding-inline: ${({ isResponsive }) =>
    isResponsive ? "0px 3vw !important" : "3vw"}; */

  @media only screen and (min-width: ${laptop}) {
    padding-inline: 42px;
  }
  @media only screen and (min-width: ${desktop}) {
    padding-inline: 122px;
  }
`;
const Container = styled.div`
  display: grid;
  padding-block: 24px;
  gap: 4.5vw;

  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 220px 1fr;
    gap: 69px;
  }
`;

const OutletContainer = styled.div`
  max-width: 1379px;
  margin-bottom: 12dvh;
`;

const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  button {
    color: var(--backgroundGreen);
  }
  h1 {
    flex: 1;
    padding-block: 16px;
    @media only screen and (max-width: ${layout.tablet}) {
      font-size: 28px;
    }
  }
`;

function Dashboard({ menu }) {
  const { width } = useWindowSize();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (location.state?.activePath) {
      setActive(location.state.activePath);
    } else {
      menu.forEach((item) => {
        item.path === location.pathname && setActive(item.name);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleClose = () => {
    setOpen(!open);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const isResponsive = useMemo(() => {
    return width < 1001 && true;
  }, [width]);

  return (
    <CustomSection paddingBlock="0px" backgroundColor="white">
      <DashboardHeader>
        {isResponsive && (
          <IconButton onClick={handleOpen}>
            <DashboardCustomizeIcon />
          </IconButton>
        )}
        <H1>{user && user.role === "admin" ? "Admin" : "Profile"}</H1>
      </DashboardHeader>
      <HorizontalLine />
      <Container>
        {width >= 1001 && (
          <SideBar menu={menu} active={active} setActive={setActive} />
        )}
        {width < 1001 && (
          <MobileSideBar
            menu={menu}
            active={active}
            setActive={setActive}
            open={open}
            handleClose={handleClose}
          />
        )}
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Container>
    </CustomSection>
  );
}

export default Dashboard;
