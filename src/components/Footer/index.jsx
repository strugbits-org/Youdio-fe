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
import { useTranslation } from "react-i18next";

function Header() {
  const { postData, postLoading, postError } = usePostAPI();
  const formikRef = useRef();
  const { t } = useTranslation();
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
    formikRef.current.resetForm();
  }, [postError]);

  return (
    <Section backgroundColor="var(--textHeadingBlack)">
      <FooterContent>
        <UpperBox>
          <div className="logoBox">
            <NavLink to={"/"}>
              <img src={icons.footerLogo} alt="" width={""} height={""} />
            </NavLink>
            <P2>{t("footer.youdioDescription")}</P2>
          </div>
          <div className="quickLinks">
            <H4>{t("footer.menuHeading")}</H4>
            <ul>
              <li>
                <NavLink to={path.home}>{t("menu.home")}</NavLink>
              </li>
              <li>
                <NavLink to={path.liveClasses}>{t("menu.liveClasses")}</NavLink>
              </li>
              <li>
                <NavLink to={path.videos}>{t("menu.videos")}</NavLink>
              </li>
              <li>
                <NavLink to={path.instructor}>{t("menu.instructors")}</NavLink>
              </li>
            </ul>
          </div>
          <div className="quickLinks">
            <H4>{t("footer.menuHeading")}</H4>
            <ul>
              <li>
                <NavLink to={"https://youdio.strugbits.com/blogs/"}>
                  {t("menu.blog")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"https://youdio.strugbits.com/contact/"}>
                  {t("menu.contactUs")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="subscribeBox">
            <H4>{t("footer.form.heading")}</H4>
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
                    placeholder={t("common.emailFieldPlaceholder")}
                  />
                  <IconButton type="submit" disabled={postLoading}>
                    <span>{t("footer.form.buttonTitle")}</span>
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
            <P3 className="regular">{t("footer.copyRight")}</P3>
            <P3 className="medium">{t("footer.allRight")}</P3>
          </div>
        </BottomBox>
      </FooterContent>
    </Section>
  );
}

export default Header;
