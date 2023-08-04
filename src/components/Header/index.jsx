import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Nav,
  Section,
  UL,
  SideMenu,
  MobileUL,
  ProfileImageCircle,
} from "./headerComponents";
import { useDispatch, useSelector } from "react-redux";
import { path } from "src/helpers";
import { icons } from "src/helpers";
import { IconButton } from "src/components";
import userIcon from "src/assets/icons/user.png";

import { logout } from "src/features/userSlice";
import { useTranslation } from "react-i18next";
import { setLang } from "src/features/language";

function Header() {
  const [menu, setMenu] = useState(false);
  const [langOptions] = useState([
    {
      label: "English",
      value: "en",
    },
    {
      label: "Japanese",
      value: "ja",
    },
  ]);
  const { lang } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user);
  const { t, i18n } = useTranslation();

  // Language Listener
  const handleLanguage = (e) => {
    dispatch(setLang(e.target.value));
    i18n.changeLanguage(e.target.value);
    window.localStorage.setItem("i18nextLng", e.target.value);
    setMenu(false);
  };

  const reset = () => {
    setMenu(false);
  };

  const btnLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const handleDashboard = () => {
    if (auth?.user.role === "admin") return path.admin;
    if (auth?.user.role === "user") return path.membership;
  };

  return (
    <Section>
      <Nav>
        <UL align="left">
          <li>
            <NavLink to={path.liveClasses}>{t("menu.liveClasses")}</NavLink>
          </li>
          <li>
            <NavLink to={path.videos}>{t("menu.videos")}</NavLink>
          </li>
          <li>
            <NavLink to={path.instructor}>{t("menu.instructors")}</NavLink>
          </li>
          {!auth?.token && !auth?.user && (
            <li>
              <NavLink to="https://youdio.strugbits.com/membership/">
                {t("menu.membership")}
              </NavLink>
            </li>
          )}
        </UL>

        <div className="logo" onClick={menu ? reset : undefined}>
          <NavLink to={path.home}>
            <img src={icons.youdio} alt="youdio" width="" height="" />
          </NavLink>
        </div>

        <IconButton className="hamburger" onClick={() => setMenu(!menu)}>
          <img src={icons.menu} alt="" width={""} height={""} />
        </IconButton>

        <UL align="right">
          {langOptions?.length && (
            <li className="langChange">
              <select onChange={handleLanguage} value={lang}>
                {langOptions.map(({ label, value }, ind) => (
                  <option key={`value-${ind}`} id="en" value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <img
                src={icons.worldMap}
                alt="world_map"
                width="15"
                height="auto"
              />
            </li>
          )}

          {!auth.token ? (
            <React.Fragment>
              <li>
                <NavLink to={path.signIn}>{t("menu.signIn")}</NavLink>
              </li>
              <li>
                <NavLink to={path.register}>{t("menu.register")}</NavLink>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <span className="txtLogout" onClick={() => btnLogout()}>
                  {t("menu.logout")}
                </span>
              </li>
              <li>
                <NavLink to={handleDashboard()}>
                  <ProfileImageCircle
                    src={auth?.user?.userImage ? auth.user.userImage : userIcon}
                    alt="profile"
                    width="30px"
                    height="30px"
                  />
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </UL>
      </Nav>

      <SideMenu className={menu ? "mobileMenu open" : "mobileMenu"}>
        <MobileUL>
          {langOptions?.length && (
            <li className="langChange">
              <select onChange={handleLanguage} value={lang}>
                {langOptions.map(({ label, value }, ind) => (
                  <option key={`value-${ind}`} id="en" value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <img
                src={icons.worldMap}
                alt="world_map"
                width="15"
                height="auto"
              />
            </li>
          )}
          {!auth.token ? (
            <React.Fragment>
              <li onClick={reset}>
                <NavLink to={path.signIn}>{t("menu.signIn")}</NavLink>
              </li>
              <li onClick={reset}>
                <NavLink to={path.register}>{t("menu.register")}</NavLink>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <span className="txtLogout" onClick={() => btnLogout()}>
                  {t("menu.logout")}
                </span>
              </li>
              <li onClick={reset}>
                <NavLink to={handleDashboard()}>
                  <ProfileImageCircle
                    src={auth?.user?.userImage ? auth.user.userImage : userIcon}
                    alt="profile"
                    width="30px"
                    height="30px"
                  />
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </MobileUL>

        <ul className="links">
          <li onClick={reset}>
            <NavLink to={path.liveClasses}>{t("menu.liveClasses")}</NavLink>
          </li>
          <li onClick={reset}>
            <NavLink to={path.videos}>{t("menu.videos")}</NavLink>
          </li>
          <li onClick={reset}>
            <NavLink to={path.instructor}>{t("menu.instructors")}</NavLink>
          </li>
          {!auth?.token && !auth?.user && (
            <li onClick={reset}>
              <NavLink to="https://youdio.strugbits.com/membership/">
                {t("menu.membership")}
              </NavLink>
            </li>
          )}
        </ul>
      </SideMenu>
    </Section>
  );
}

export default Header;
