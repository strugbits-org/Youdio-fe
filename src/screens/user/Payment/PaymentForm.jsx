import React from "react";
import { P3, H2 } from "src/components";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  Buttons,
  DisbaleEmailBox,
  FormRow,
  SaveButton,
} from "../Dashboard/Screen/PaymentScreen/PaymentComponent";

function PaymentForm({ user }) {
  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(PaymentElement);
    console.log(cardElement);

    stripe
      .createToken(cardElement)
      .then((res) => {
        console.log({res});
      })
      .catch((e) => {
        console.log(e);
      });

    // const result = await stripe.confirmPayment({
    //   elements,
    //   // confirmParams: {
    //   //   return_url: "https://www.google.com",
    //   // },
    //     redirect: "if_required",
    // });

    // if (result.error) {
    //   console.log("Error", result.error);
    // } else {
    //   console.log("Success", result);
    //   // const { token, err } = await stripe.createToken(cardElement);
    //   stripe.createToken(cardElement).then((res) => {
    //     console.log(res);
    //    }).catch(e => {
    //     console.log(e);
    //   })
    //   // token && console.log({ token });
    //   // err && console.log({ err });
    // }
  };

  return (
    <form>
      <H2>Enter Payment Details</H2>
      <FormRow>
        <DisbaleEmailBox>
          <P3>Email</P3>
          <P3 className="email">{user.email}</P3>
        </DisbaleEmailBox>
      </FormRow>
      <PaymentElement />
      <Buttons>
        <SaveButton type="submit" onClick={handleSubmit}>
          Start Trial
        </SaveButton>
      </Buttons>
    </form>
  );
}

export default PaymentForm;
