import React from "react";
import { Form, Formik } from "formik";
import { H4, Label, P3, H2 } from "src/components";
import { icons } from "src/helpers";
import { FieldInput } from "src/components";
import {
  Main,
  Container,
  FormRow,
  Buttons,
  CardInfoRow,
  RadioFormRow,
  SaveButton,
} from "./PaymentComponent";
import { paymentFormValidate } from "src/helpers/forms/validateForms";

const Payment = () => {
  const handleSubmit = (data) => {
    console.log('ahmza');
    console.log(data);
  };

  return (
    <Container>
      <Main>
        <Formik
          initialValues={{
            email: "dummy@gmail.com",
            expiry: "",
            monthYear: "",
            cardNumber: "",
            nameOnCard: "",
            countryOrRegion: "",
            paymentAcceptRadio: "",
          }}
          validationSchema={paymentFormValidate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="form">
              <H2>Enter Payment Details</H2>
              <FormRow>
                <FieldInput
                  id="email"
                  name="email"
                  type="text"
                  value={formik.values.email}
                  readOnly={true}
                  style={{ fontSize: "16px" }}
                />
              </FormRow>
              <CardInfoRow>
                <FieldInput
                  className="cardNumber"
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  label="Card Information"
                  placeholder="1234 1234 1237 1346"
                  style={{ fontSize: "16px" }}
                />
                <div className="expiryCVC">
                  <FieldInput
                    id="monthYear"
                    name="monthYear"
                    type="text"
                    placeholder="MM/YY"
                    style={{ fontSize: "16px" }}
                  />
                  <FieldInput
                    id="expiry"
                    name="expiry"
                    type="text"
                    placeholder="CVC"
                    style={{ fontSize: "16px" }}
                  />
                </div>
              </CardInfoRow>
              <FormRow>
                <FieldInput
                  id="nameOnCard"
                  name="nameOnCard"
                  label="Name on Card"
                  placeholder="Your Name On Card"
                  type="text"
                  style={{ fontSize: "16px" }}
                />
              </FormRow>
              <FormRow>
                <FieldInput
                  id="countryOrRegion"
                  name="countryOrRegion"
                  label="Country or Region"
                  placeholder="United States"
                  type="text"
                  style={{ fontSize: "16px" }}
                />
              </FormRow>
              <RadioFormRow>
                <input
                  type="radio"
                  id="paymentAcceptRadio"
                  name="paymentAcceptRadio"
                  value={""}
                />
                <Label htmlFor="paymentAcceptRadio">
                  Lorem ipsum dolor sit amet consectetur. In tristique id eu.
                  Porttitor egestas viverra ultricies tincidunt nulla in nisl
                  eget. Magna dolor risus porttitor blandit rhoncus iaculis.
                  Ultricies r id risuslacus accumsan arcu ultrices varius.
                </Label>
              </RadioFormRow>

              <Buttons>
                <SaveButton type="submit">Start Trial</SaveButton>
              </Buttons>
            </Form>
          )}
        </Formik>
      </Main>
      <Main>
        <div className="payment-left-top-div">
          <img src={icons.youdio} alt="youdio" width="130px" height="90px" />
          <div>
            <H4>Monthly</H4>
            <H4>
              20$/
              <span style={{ fontSize: "12px" }}>month</span>
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
      </Main>
    </Container>
  );
};

export default Payment;
