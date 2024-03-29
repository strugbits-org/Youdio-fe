import React, { useEffect, useMemo, useState } from "react";
import { H2, P2, Section } from "src/components";
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
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const CustomSection = styled(Section)`
  min-height: 50dvh;
  .container {
    width: clamp(260px, 100%, 500px);
    margin-inline: auto;
    .plan-details {
      .plan-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
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
      navigate("/login", {
        state: { url: location.pathname.concat(location.search) },
      });
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
  }, [searchParams, user, token]);

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
      <div className="container">
        {planDetails && (
          <div className="plan-details">
            <div className="plan-info">
              <div>
                <H2>{planDetails?.name}</H2>
                <H2>
                  {`$${planDetails?.price}/`}
                  <span style={{ fontSize: "18px" }}>{planDetails?.type}</span>
                </H2>
              </div>
            </div>
            {planDetails?.description?.length > 0 && (
              <P2>{planDetails.description.join(" ")}</P2>
            )}
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
      </div>
    </CustomSection>
  );
};

export default Payment;
