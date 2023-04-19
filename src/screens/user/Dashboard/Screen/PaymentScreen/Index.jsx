import { H4, Label, P3 } from "src/components";
import {
  Heading,
  Heading2,
} from "src/screens/user/Dashboard/Components/Heading";
import { Wrapper } from "src/screens/user/Dashboard/Components/Wrapper";
import Sidebar from "../../Components/Sidebar/Index";
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
import React, { useState, useRef } from 'react';

import { paymentScreenStaticContent as constant } from "./Constant";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const radioRef = useRef(null);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }
  const handleParagraphClick = () => {
    radioRef.current.click();
  }
  return (
    <Wrapper>
       <div className="membership_top_div">

      <Heading>{constant.paymentH1}</Heading>
      <HorizontalLine2 />
      </div>
      <div className="whole_box">
        <Sidebar />
        <Container2>
          <Main>
            <form>
              <Heading2>{constant.paymentH2}</Heading2>
              <PaymentInput
                placeholder="Email                                                                               AlexaMorgan@gmail.com"
                required="Empty"
              />
                <PaymentLabel>{constant.cardInfo}</PaymentLabel>
              <div>

                <PaymentInput
                  placeholder="1234 1233 1234 1234"
                  required="Empty"
                />
                <div>
                  <Input3
                    placeholder="MM/YY"
                    required="Empty"
                    style={{ borderTop: "0px" }}
                  />
                  <Input3
                    placeholder="CVC"
                    required="Empty"
                    style={{ borderTop: "0px" }}
                  />
                </div>
              </div>
              <PaymentLabel>{constant.cardName}</PaymentLabel>

              <PaymentInput
                placeholder="1234 1233 1234 1234"
                required="Empty"
              />
              <PaymentLabel>{constant.country}</PaymentLabel>

              <PaymentInput placeholder="United State" required="Empty" />

              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <input type="radio" name="option" value="option2" checked={selectedOption === "option2"} onChange={handleOptionChange} ref={radioRef} />
                <P3  onClick={handleParagraphClick} style={{cursor:"pointer"}}>{constant.lorem}</P3>
              </div>
              <PaymentBtn>{constant.paymentBtn}</PaymentBtn>
              <div style={{ display: "flex", gap: "1rem" }}>
                <input
                  type="checkbox"
                  id="rememberCheckbox"
                  name="rememberMe"
                />
                <Label htmlFor="rememberCheckbox">{constant.rememberMe}</Label>
              </div>
            </form>
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
