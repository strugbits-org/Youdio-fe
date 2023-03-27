import React from "react";
import { P3 } from "src/components";
import { Heading, Heading2 } from "src/screens/user/Dashboard/style/Heading";
import { Wrapper } from "src/screens/user/Dashboard/style/Wrapper";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import {
  Main,
  Input3,
  PaymentInput,
  Container2,
  PaymentBtn,
  PaymentLabel,
} from "./PaymentComponent";

const Payment = () => {
  return (
    <Wrapper style={{}}>
      <Heading>Payment</Heading>
      <HorizontalLine2 />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Container2>
          <Main>
            <Heading2>Enter Payment Details</Heading2>
            <PaymentInput
              placeholder="AlexaMorgan@gmail.com"
              style={{ backgroundColor: "#F7F7F7" }}
            />
            <PaymentLabel>Card Information</PaymentLabel>
            <PaymentInput placeholder="1234 1233 1234 1234" />
            <div>
              <Input3 placeholder="MM/YY" />
              <Input3 placeholder="CVC" />
            </div>
            <PaymentLabel>Name on Card</PaymentLabel>

            <PaymentInput placeholder="1234 1233 1234 1234" />
            <PaymentLabel>Country Or Region</PaymentLabel>

            <PaymentInput placeholder="United State" />

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <input type="radio" />
              <P3>
                Lorem ipsum dolor sit amet consectetur. In tristique id eu.
                Porttitor egestas viverra ultricies tincidunt nulla in nisl
                eget. Magna dolor risus porttitor blandit rhoncus iaculis.
                Ultricies r id risuslacus accumsan arcu ultrices varius.
              </P3>
            </div>
            <PaymentBtn>START TRIAL</PaymentBtn>
          </Main>
          <Main>
            <Heading2>youdio</Heading2>
            <P3>
              Lorem ipsum dlit. Atque, reiciendis veniam! Voluptatum explicabo
              tempore, ipsam architecto eos pariatur impedit expedita quas
              necessitatibus laboriosam nisi natus. Autem, enim. Doloribus, sint
              et?
            </P3>
            <P3>
              Lorem reiciendis veniam! Voluptatum explicabo tempore, ipsam
              architecto eos pariatur impedit expedita quas necessitatibus
              laboriosam nisi natus. Autem, enim. Doloribus, sint et?
            </P3>
          </Main>
        </Container2>
      </div>
    </Wrapper>
  );
};

export default Payment;
