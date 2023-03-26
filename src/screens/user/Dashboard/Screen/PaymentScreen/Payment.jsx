import React from "react";
import { Label, P3, PrimaryButton } from "src/components";
import { Heading, Heading2 } from "src/screens/user/Dashboard/style/Heading";
import { Wrapper } from "src/screens/user/Dashboard/style/Wrapper";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import { Main, Input3, PaymentInput, Container2 } from "./PaymentComponent";
const Payment = () => {
  return (
    <Wrapper>
      <Heading>Payment</Heading>
      <HorizontalLine2 />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />

        <Container2>
          <Main>
            <Heading2>Enter Payment Details</Heading2>
            <PaymentInput placeholder="AlexaMorgan@gmail.com" />
            <Label>Card Information</Label>
            <PaymentInput placeholder="1234 1233 1234 1234" />
            <div>
              <Input3 placeholder="MM/YY" />
              <Input3 placeholder="CVC" />
            </div>
            <Label>Name on Card</Label>

            <PaymentInput placeholder="1234 1233 1234 1234" />
            <Label>Country Or Region</Label>

            <PaymentInput placeholder="United State" />

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <input type="radio"  />
              <P3 style={{ width: "400px" }}>
                Lorem ipsum dolor sit amet consectetur. In tristique id eu.
                Porttitor egestas viverra ultricies tincidunt nulla in nisl
                eget. Magna dolor risus porttitor blandit rhoncus iaculis.
                Ultricies r id risuslacus accumsan arcu ultrices varius.
              </P3>
             
            </div>
            <PrimaryButton>
            Start trial
            </PrimaryButton>
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
