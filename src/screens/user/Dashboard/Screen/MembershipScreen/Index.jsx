import React from "react";
import { Wrapper } from "src/screens/user/Dashboard/Components/Wrapper";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import {
  Heading,
  Heading2,
  Heading3,
} from "src/screens/user/Dashboard/Components/Heading";
import { Container } from "src/screens/user/Dashboard/Components/Container";
import { P2, H3, P3 } from "src/components";
import { Description, Box } from "./MembershipScreenComponent";
import Sidebar from "../../Components/Sidebar/Index";
import { membershipScreenStaticContent as content } from "./Constant";
const Membership = () => {
  return (
    <Wrapper>
      <Heading>{content.membership}</Heading>
      <HorizontalLine2 />
      <div className="whole_box">
        <Sidebar />
        <Container>
          <Heading2>{content.yourPlan}</Heading2>
          <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
            {content.lorem}
          </P2>
          <HorizontalLine2 />
          <Description>
            <div className="sub_heading">
              <div  className="small-box">
                <Heading3> {content.monthly}</Heading3>
                <H3>
                  {content.price}
                  <span>{content.month}</span>
                </H3>
              </div>
            </div>

            <P2 className="lorem_text">
              {content.lorem}
            </P2>
          </Description>
          <HorizontalLine2 />

          <Description>
            <div className="sub-heading">
              <div>
                <Heading3> {content.annually}</Heading3>
                <H3>
                  {content.price}
                  <span>{content.montBilledAnnually}</span>
                </H3>
              </div>
            </div>

            <P2 className="lorem_text">
              {content.lorem}
            </P2>
          </Description>
          <HorizontalLine2 />
          <Box>
            <input type="radio" />
            <P3>{content.lorem}</P3>
          </Box>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Membership;
