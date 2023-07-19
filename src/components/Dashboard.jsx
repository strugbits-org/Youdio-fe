import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { H1, Section } from "src/components";
import styled from "styled-components";
import { layout } from "src/helpers";
import SideBar from "src/components/Sidebar";
import { HorizontalLine } from "src/components/BreakLines";
import useWindowSize from "src/features/hooks/useInnerWidth";
import { useSelector } from "react-redux";

const { laptop, desktop, mobile } = layout;
const CustomSection = styled(Section)`
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
  h1 {
    margin-block: 45px 26px;
  }
`;

function Dashboard({ menu }) {
  const { width } = useWindowSize();
  const [active, setActive] = useState("");
  const location = useLocation();
  const { user } = useSelector(state => state.user)

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

  return (
    <CustomSection paddingBlock="0px" backgroundColor="white">
      <DashboardHeader>
        <H1>{ user && user.role === 'admin' ? "Admin" : "My Profile"  }</H1>
        <HorizontalLine />
      </DashboardHeader>
      <Container>
        {width >= 1001 && (
          <SideBar menu={menu} active={active} setActive={setActive} />
        )}
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Container>
    </CustomSection>
  );
}

export default Dashboard;
