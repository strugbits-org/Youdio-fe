import React from "react";
import { P2, H3, P3 } from "src/components";
import { Container } from "src/screens/user/Dashboard/Components/Container";
import {
  Heading,
  Heading2,
  Heading3,
} from "src/screens/user/Dashboard/Components/Heading";
import { Wrapper } from "src/screens/user/Dashboard/Components/Wrapper";
import {
  Description,
  Input2,
  Box,
  Button,
} from "src/screens/user/Dashboard/Screen/MembershipScreen2/MembershipScreen2Component";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";

const MembershipScreen2 = () => {
  return (
    <>
      <Wrapper>
        <Heading>Membership</Heading>
        <HorizontalLine2 />
        <Container>
          <Heading2>You Choose Our Annual Plan 8.30$/</Heading2>
          <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
            facere in impedit ex ipsum dolorum consectetur quo praesentium
            ratione? Excepturi temporibus culpa cupiditate. Vero similique
            repudiandae eius blanditiis, a optio.
          </P2>
          <HorizontalLine2 />

          <Description>
            <div className="sub_heading">
              <input type="radio" />
              <div>
                <Heading3> Annually</Heading3>
                <H3 style={{ maxwidth: "228px", minWidth: "150px" }}>
                  8.30$/
                  <span style={{ fontSize: "14px" }}>
                    month billed annually
                  </span>
                </H3>
              </div>
            </div>

            <P2 style={{ minwidth: "300px", maxWidth: "650px" }}>
              Lorem ipsum dc in tellus id eu. Porttitor egestas viverra
              ultricies tincidunt nulla in nisl eget. Magna integer platea dolor
              risus porttitor blandit rhoncus tortor iaculis. Ultricies r id
              risus lacus accumsan arcu ultrices varius.
            </P2>
          </Description>
          <HorizontalLine2 />

          <Description>
            <Heading3>Have a Promocode</Heading3>
            <Input2 placeholder="Enter your promocode here" />
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
          <Button>Coninue</Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default MembershipScreen2;
