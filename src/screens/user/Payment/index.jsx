import React, { useEffect, useMemo, useState } from "react";
import { H4, P3, Section } from "src/components";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import usePostAPI from "src/features/hooks/usePostAPI";
import { Loader } from "src/components";
import styled from "styled-components";
import useFetch from "src/features/hooks/useFetch";
import InfoPupup from "src/components/InfoPopup";
const stripePromise = loadStripe(
  "pk_test_51NSIlJCz6A0J32KfawEKMFsfzwVOcuGJSQkJTGcwtbXtYE0jTQFQk628ZlUNP6kApZy8JUlnDYrQPEj1Ksmak1m600VisDRfA7"
);

const CustomSection = styled(Section)`
  max-width: 540px;
  margin-inline: auto;
  min-height: 740px;
  .plan-details {
    .plan-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  }
`;

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [paymentIntent, setPaymentIntent] = useState(null);
  const { postData, postError, postLoading } = usePostAPI();
  const { fetchData, res } = useFetch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!getId) {
      navigate("/page-not-found");
      return;
    }
    if (getId?.type === "plan") {
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
      fetchData(`/subscriptionPlan/${getId.id}`);
      return;
    }
    user && fetchData(`/subscriptionPlan/${user.subscription.plan}`);
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
    
  }, [paymentIntent, postError]);

  const planDetails = useMemo(() => {
    if (res && res.subscriptionPlan) {
      return res.subscriptionPlan;
    }
    return {};
  }, [res]);

  const handleLink = () => {
    navigate("/user/membership")
  }

  return (
    <CustomSection backgroundColor="#fff">
      <div className="plan-details">
        <div className="plan-info">
          <div>
            {planDetails && <H4>{planDetails?.name}</H4>}
            {planDetails && (
              <H4>
                {`$${planDetails?.price}/`}
                <span style={{ fontSize: "12px" }}>{planDetails?.type}</span>
              </H4>
            )}
          </div>
        </div>
        {planDetails?.description?.length > 0 &&
          planDetails.description.map((desc) => {
            return <P3>{desc}</P3>;
          })}
      </div>
      {paymentIntent && getId && (
        <Elements
          stripe={stripePromise}
          options={
            paymentIntent ? { clientSecret: paymentIntent.clientSecret } : {}
          }
        >
          <PaymentForm user={user} intent={paymentIntent} plan={getId} />
        </Elements>
      )}
      {(paymentIntent || getId) && postLoading && <Loader />}
      <InfoPupup open={postError} data={postError} handleLink={handleLink} />
    </CustomSection>
  );
};

export default Payment;
