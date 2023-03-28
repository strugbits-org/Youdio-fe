import React from "react";
import { H4, Label, P3 } from "src/components";
import { Heading, Heading2 } from "src/screens/user/Dashboard/style/Heading";
import { Wrapper } from "src/screens/user/Dashboard/style/Wrapper";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import { icons } from "src/helpers";

import {
  Main,
  Input3,
  PaymentInput,
  Container2,
  PaymentBtn,
  PaymentLabel,
} from "./PaymentComponent";

import { paymentScreenStaticContent as constant } from "./Constant";

const Payment = () => {
  return (
    <Wrapper>
      <Heading>{constant.paymentH1}</Heading>
      <HorizontalLine2 />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Container2>
          <Main>
            <Heading2>{constant.paymentH2}</Heading2>
            <PaymentInput
              placeholder="Email                                                                               AlexaMorgan@gmail.com"
              style={{ backgroundColor: "#F7F7F7" }}
            />
            <PaymentLabel>{constant.cardInfo}</PaymentLabel>
            <PaymentInput placeholder="1234 1233 1234 1234" />
            <div>
              <Input3 placeholder="MM/YY" />
              <Input3 placeholder="CVC" />
            </div>
            <PaymentLabel>{constant.cardName}</PaymentLabel>

            <PaymentInput placeholder="1234 1233 1234 1234" />
            <PaymentLabel>{constant.country}</PaymentLabel>

            <PaymentInput placeholder="United State" />

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <input type="radio" />
              <P3>{constant.lorem}</P3>
            </div>
            <PaymentBtn>{constant.paymentBtn}</PaymentBtn>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input type="checkbox" id="rememberCheckbox" name="rememberMe" />
              <Label htmlFor="rememberCheckbox">{constant.rememberMe}</Label>
            </div>
          </Main>
          <Main>
            <div className="payment-left-top-div">
              <img
                src={icons.youdio}
                alt="youdio"
                width="130px"
                height="90px"
              />
              <div>
                <H4>{constant.monthly}</H4>
                <H4>
                  {constant.price}
                  <span style={{ fontSize: "12px" }}>{constant.month}</span>
                </H4>
              </div>
            </div>

            <P3>{constant.lorem}</P3>
            <P3>{constant.lorem}</P3>
          </Main>
        </Container2>
      </div>
    </Wrapper>
  );
};

export default Payment;
