import React, { useEffect, useMemo, useState } from "react";
import { H4, P3 } from "src/components";
import { icons } from "src/helpers";
// import { Main, Container } from "./PaymentComponent";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import usePostAPI from "src/features/hooks/usePostAPI";
import { Loader } from "src/components";
import styled from "styled-components";
const stripePromise = loadStripe(
  "pk_test_51NSIlJCz6A0J32KfawEKMFsfzwVOcuGJSQkJTGcwtbXtYE0jTQFQk628ZlUNP6kApZy8JUlnDYrQPEj1Ksmak1m600VisDRfA7"
);

const Container = styled.div`
  max-width: 540px;
  margin-inline: auto;
  min-height: 740px;

  .plan-info{
    text-align: center;
  }
`;

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [paymentIntent, setPaymentIntent] = useState(null);
  const { postData } = usePostAPI();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (getId.type === "plan") {
      const payload = {
        planId: getId.id,
      };
      postData(
        "subscription/create-payment-intent",
        payload,
        undefined,
        undefined,
        undefined,
        setPaymentIntent
      );
      return;
    }
    setPaymentIntent({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const getId = useMemo(() => {
    const planId = searchParams.get("plan");
    const sessionId = searchParams.get("session");
    if (planId) return { id: planId, type: "plan" };
    if (sessionId) return { id: sessionId, type: "session" };
    return null;
  }, [searchParams]);

  useEffect(() => {
    console.log(paymentIntent);
  }, [paymentIntent]);

  return (
    <Container>
      <div className="plan-info">
        <img src={icons.youdio} alt="youdio" width="130px" height="90px" />
        <div>
          <H4>Monthly</H4>
          <H4>
            20$/ <span style={{ fontSize: "12px" }}>month</span>
          </H4>
        </div>
      </div>
      <P3>
        Lorem ipsum dolor sit amet consectetur. In tristique nunc in tellus id
        eu. Porttitor egestas viverra ultricies tincidunt nulla in nisl eget.
        Magna lacus accumsan arcu ultrices varius.
      </P3>
      <P3>
        Lorem ipsum dolor sit amet consectetur. In tristique nunc in tellus id
        eu. Porttitor egestas viverra ultricies tincidunt nulla in nisl eget.
        Magna lacus accumsan arcu ultrices varius.
      </P3>
      {paymentIntent ? (
        <Elements
          stripe={stripePromise}
          options={
            paymentIntent ? { clientSecret: paymentIntent.clientSecret } : {}
          }
        >
          <PaymentForm user={user} intent={paymentIntent} plan={getId} />
        </Elements>
      ) : (
        <Loader />
      )}
    </Container>
    // <Container>
    //   <Main>
    //     <Elements stripe={stripePromise} options={options}>
    //       <PaymentForm user={user} />
    //     </Elements>
    //   </Main>
    //   <Main>
    //     <div className="payment-left-top-div">
    //       <img src={icons.youdio} alt="youdio" width="130px" height="90px" />
    //       <div>
    //         <H4>Monthly</H4>
    //         <H4>
    //           20$/
    //           <span style={{ fontSize: "12px" }}>month</span>
    //         </H4>
    //       </div>
    //     </div>

    //     <P3>
    //       Lorem ipsum dolor sit amet consectetur. In tristique nunc in tellus id
    //       eu. Porttitor egestas viverra ultricies tincidunt nulla in nisl eget.
    //       Magna lacus accumsan arcu ultrices varius.
    //     </P3>
    //     <P3>
    //       Lorem ipsum dolor sit amet consectetur. In tristique nunc in tellus id
    //       eu. Porttitor egestas viverra ultricies tincidunt nulla in nisl eget.
    //       Magna lacus accumsan arcu ultrices varius.
    //     </P3>
    //   </Main>
    // </Container>
  );
};

export default Payment;
