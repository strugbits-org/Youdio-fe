import React, { useEffect, useMemo } from "react";
// import { H4, P3 } from "src/components";
// import { icons } from "src/helpers";
// import { Main, Container } from "./PaymentComponent";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51NSIlJCz6A0J32KfawEKMFsfzwVOcuGJSQkJTGcwtbXtYE0jTQFQk628ZlUNP6kApZy8JUlnDYrQPEj1Ksmak1m600VisDRfA7"
);
// process.env.

const Payment = () => {
  const location = useLocation();
  const options = {
    clientSecret:
      "pi_3NUtrICz6A0J32Kf1MmR4Cvv_secret_7wjVISvS9WNbQnTolHCKHIXRB",
  };

  const { user } = useSelector((state) => state.user);

  useEffect(() => {}, [location]);

//   const link = useMemo(() => {
//     let path = location.pathname;
//     path = path.slice(path.lastIndexOf("/") + 1);
//     const planId = path;
//     return { _id: path, link };
//   }, [location]);
    return (
      <div style={{maxWidth: '450px', marginInline:"auto", minHeight:"740px"}}>
        <Elements stripe={stripePromise} options={options} >
          <PaymentForm user={user} />
        </Elements>
      </div>
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
