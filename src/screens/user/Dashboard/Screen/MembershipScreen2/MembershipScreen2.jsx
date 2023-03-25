import React from "react";
import { P2, H5, H3,P3, } from "src/components";
import { HorizontalLine } from "src/components/Footer/footerComponents";
import { Container } from "src/screens/user/Dashboard/style/Container";
import { Heading, Heading2 } from "src/screens/user/Dashboard/style/Heading";
import { Wrapper } from "src/screens/user/Dashboard/style/Wrapper";
import { Description, Input2,Box } from "src/screens/user/Dashboard/Screen/MembershipScreen2/MembershipScreen2Component";
import Circle from 'src/assets/icons/Circle.png'
import {PrimaryButton} from "src/components/Button"

const MembershipScreen2 = () => {
  return (
    <>
      <Wrapper>
        <Heading>Membership</Heading>
        <HorizontalLine style={{ backgroundColor: "#E6E6E6" }} />
        <Container>
          <Heading2>You Choose Our Annual Plan 8.30$/</Heading2>
          <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
            facere in impedit ex ipsum dolorum consectetur quo praesentium
            ratione? Excepturi temporibus culpa cupiditate. Vero similique
            repudiandae eius blanditiis, a optio.
          </P2>
          <HorizontalLine style={{ backgroundColor: "#E6E6E6" }} />
          <Description>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <img src={Circle} alt="" />
              <div>
                <H5> Annually</H5>
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
          <HorizontalLine style={{ backgroundColor: "#E6E6E6" }} />
          <Description>
            <H3>Have a Promocode</H3>
            <Input2 />
          </Description>

          <HorizontalLine style={{ backgroundColor: "#E6E6E6" }} />
        
          <Box>

          <img src={Circle} alt="" style={{width:"15px",height:"15px"}} />
          <P3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus, sint dolorum fuga dolores inventore, iusto aperiam vero consectetur, id sunt? Adipisci, laborum. Commodi accusamus, repellendus magnam consequatur cupiditate corrupti.
          </P3>
          </Box>
          <PrimaryButton style={{width: "241px",backgroundColor:"#FFE7DA" , color:"black"}}>
          Coninue
          </PrimaryButton>
        </Container>
      </Wrapper>
    </>
  );
};

export default MembershipScreen2;
