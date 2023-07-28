import React, { useEffect, useMemo, useState } from "react";
import { H4, P3, Section } from "src/components";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const { fetchData, res, error } = useFetch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user, token } = useSelector((state) => state.user);

  useEffect(() => {
    if (!getId) {
      navigate("/page-not-found", { replace: true });
      return;
    }

    if (!token && !user) {
      navigate("/login", { state: { url: location.pathname.concat(location.search) } });
      return;
    }
    if (getId?.type === "session" && token && !planDetails) {
      navigate("/user/membership");
      return;
    }
    if (getId?.type === "plan") {
      if (token && !planDetails) {
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
      } else {
        navigate("/user/membership");
      }

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

  useEffect(() => {}, [paymentIntent, postError]);

  const planDetails = useMemo(() => {
    if (res && res.subscriptionPlan) {
      return res.subscriptionPlan;
    }
    if (user && user?.subscription?.plan?._id) {
      return user.subscription.plan;
    }
    return null;
  }, [res, user]);

  const errorMessage = useMemo(() => {
    if (error) {
      return {
        status: true,
        text: "Check your url, some problem on getting plan details",
      };
    } else if (postError) {
      return {
        status: true,
        text: postError,
      };
    } else {
      return false;
    }
  }, [error, postError]);

  const handleLink = () => {
    navigate("/user/membership", { replace: true });
  };

  return (
    <CustomSection backgroundColor="#fff">
      {planDetails && (
        <div className="plan-details">
          <div className="plan-info">
            <div>
              <H4>{planDetails?.name}</H4>
              <H4>
                {`$${planDetails?.price}/`}
                <span style={{ fontSize: "12px" }}>{planDetails?.type}</span>
              </H4>
            </div>
          </div>
          {planDetails?.description?.length > 0 &&
            planDetails.description.map((desc) => {
              return <P3>{desc}</P3>;
            })}
        </div>
      )}
      {paymentIntent && getId && planDetails && (
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
      {errorMessage?.status && (
        <InfoPupup
          open={errorMessage.status}
          data={errorMessage.text}
          handleLink={handleLink}
        />
      )}
    </CustomSection>
  );
};

export default Payment;
