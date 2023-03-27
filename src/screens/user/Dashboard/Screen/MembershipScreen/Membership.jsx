import React from "react";
import { Wrapper } from "src/screens/user/Dashboard/style/Wrapper";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import { Heading, Heading2, Heading3 } from "src/screens/user/Dashboard/style/Heading";
import { Container } from "src/screens/user/Dashboard/style/Container";
import { P2,H3, P3 } from "src/components";
import {
  Description,
  Box,
} from "src/screens/user/Dashboard/Screen/MembershipScreen/MembershipScreenComponent";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Membership = () => {
  return (
    <Wrapper>
      <Heading>Membership</Heading>
      <HorizontalLine2 />
      <div style={{display:"flex",flexDirection:"row"}}>
<Sidebar/>
      <Container>
        <Heading2>Your Plan</Heading2>
        <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, facere
          in impedit ex ipsum dolorum consectetur quo praesentium ratione?
          Excepturi temporibus culpa cupiditate. Vero similique repudiandae eius
          blanditiis, a optio.
        </P2>
        <HorizontalLine2 />
        <Description>
          <div className="sub_heading"
          >
   
            <div style={{minWidth:"189px"}}>
              <Heading3> Monthly</Heading3>
              <H3 >
                20$/
                <span style={{ fontSize: "14px" }}>month</span>
              </H3>
            </div>
          </div>

          <P2 style={{ minwidth: "100px", maxWidth: "650px" }}>
            Lorem ipsum dc in tellus id eu. Porttitor egestas viverra ultricies
            tincidunt nulla in nisl eget. Magna integer platea dolor risus
            porttitor blandit rhoncus tortor iaculis. Ultricies r id risus lacus
            accumsan arcu ultrices varius.
          </P2>
        </Description>
        <HorizontalLine2 />

        <Description>
          <div className="sub-heading"
            
            >
            <div>
              <Heading3> Annually</Heading3>
              <H3>
                8.30$/
                <span style={{ fontSize: "14px" }}>month billed annually</span>
              </H3>
            </div>
          </div>

          <P2 style={{ minwidth: "100px", maxWidth: "650px" }}>
            Lorem ipsum dc in tellus id eu. Porttitor egestas viverra ultricies
            tincidunt nulla in nisl eget. Magna integer platea dolor risus
            porttitor blandit rhoncus tortor iaculis. Ultricies r id risus lacus
            accumsan arcu ultrices varius.
          </P2>
        </Description>
        <HorizontalLine2 />
        <Box>
          <input type="radio" />
          <P3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            delectus, sint dolorum fuga dolores inventore, iusto aperiam vero
            consectetur, id sunt? Adipisci, laborum. Commodi accusamus,
            repellendus magnam consequatur cupiditate corrupti.
          </P3>
        </Box>
      </Container>
            </div>
    </Wrapper>
  );
};

export default Membership;
