import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { FieldInput, H4, P2, P3 } from "src/components";
import {
  FooterContent,
  UpperBox,
  BottomBox,
  HorizontalLine,
} from "./footerComponents";
import { icons, path } from "src/helpers";
import { Section, IconButton } from "src/components";
import { Form, Formik } from "formik";
import usePostAPI from "src/features/hooks/usePostAPI";
import { subscriberValidateForm } from "src/helpers/forms/validateForms";

function Header() {
  const { postData, postLoading, postError } = usePostAPI();
  const formikRef = useRef();
  const handleSubmit = (data, action) => {
    postData(
      "newsletter/subscribe",
      { email: data.email },
      undefined,
      undefined,
      undefined,
      () => action.resetForm()
    );
  };

  useEffect(() => {
    formikRef.current.resetForm()
  }, [postError]);

  return (
    <Section backgroundColor="var(--textHeadingBlack)">
      <FooterContent>
        <UpperBox>
          <div className="logoBox">
            <NavLink to={"/"}>
              <img src={icons.footerLogo} alt="" width={""} height={""} />
            </NavLink>
            <P2>
              Imagining professional yoga lessons without the hassle of
              travelling has now become easier.
            </P2>
          </div>
          <div className="quickLinks">
            <H4>Quick Links</H4>
            <ul>
              <li>
                <NavLink to={path.home}>Home</NavLink>
              </li>
              <li>
                <NavLink to={path.liveClasses}>Live Classes</NavLink>
              </li>
              <li>
                <NavLink to={path.videos}>Videos</NavLink>
              </li>
              <li>
                <NavLink to={path.instructor}>Instructors</NavLink>
              </li>
            </ul>
          </div>
          <div className="quickLinks">
            <H4>Quick Links</H4>
            <ul>
              <li>
                <NavLink to={"https://youdio.strugbits.com/blogs/"}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"https://youdio.strugbits.com/contact/"}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="subscribeBox">
            <H4>Subscribe to our newsletter</H4>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={subscriberValidateForm}
              onSubmit={handleSubmit}
              innerRef={formikRef}
            >
              {(formik) => (
                <Form autoComplete="off">
                  <FieldInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  <IconButton type="submit" disabled={postLoading}>
                    <span>Subscribe</span>
                    <img src={icons.rightArrowShort} alt="" />
                  </IconButton>
                </Form>
              )}
            </Formik>
          </div>
        </UpperBox>
        <BottomBox>
          <HorizontalLine />
          <div className="copyright">
            <P3 className="regular">Copyright © 2023</P3>
            <P3 className="medium">Youdio, All Right Reserved</P3>
          </div>
        </BottomBox>
      </FooterContent>
    </Section>
  );
}

export default Header;
