import React, { useState } from "react";
import { P3, Error, H3 } from "src/components";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {
  Buttons,
  DisbaleEmailBox,
  FormRow,
  SaveButton,
} from "../Dashboard/Screen/PaymentScreen/PaymentComponent";
import styled from "styled-components";
import usePostAPI from "src/features/hooks/usePostAPI";
import { useNavigate } from "react-router-dom";


const Form = styled.form`
margin-top: 24px;
  h3{
    margin-block: 16px;
    text-align: center;
  }
`
const Box = styled.div`
  .card-element {
    border: 1px solid grey;
    padding: 16px 16px;
    margin-bottom: 4px;
  }
`;

function PaymentForm({ user, intent, plan }) {
  const elements = useElements();
  const stripe = useStripe();
  const [cardError, setCardError] = useState("");
  const navigate = useNavigate();
  const { postData, postLoading } = usePostAPI();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);

    if (result.error) {
      setCardError(result.error.message);
    } else {
      setCardError("");
      let payload = {};
      let apiUrl = "subscription/subscribe";
      payload = {
        token: result.token.id,
        planId: plan.id,
        paymentIntentId: intent.paymentIntentId,
      };
      if (plan.type === "session") {
        payload = {
          token: {
            id: result.token.id,
          },
          liveSession: plan.id,
        };
        apiUrl = "booking/buySingleSession";
      }
      postData(apiUrl, payload, undefined, undefined, undefined, () =>
        navigate("/user/profile")
      );
    }
  };

  return (
    <Form>
      <H3>Enter Payment Details</H3>
      <FormRow>
        <DisbaleEmailBox>
          <P3>Email</P3>
          <P3 className="email">{user?.email}</P3>
        </DisbaleEmailBox>
      </FormRow>
      <Box id="box">
        <CardElement className="card-element" />
        {cardError && <Error>{cardError}</Error>}
      </Box>
      <Buttons>
        <SaveButton disabled={postLoading} type="submit" onClick={handleSubmit}>
          Start Trial
        </SaveButton>
      </Buttons>
    </Form>
  );
}

export default PaymentForm;
