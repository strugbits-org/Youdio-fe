import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { staticContent } from "./constant";
import {
  Nav,
  Section,
  UL,
  SideMenu,
  MobileUL,
  ProfileImageCircle,
} from "./headerComponents";
import { useDispatch, useSelector } from "react-redux";
// import { setLang } from "src/features/language";
import { path } from "src/helpers";
import { contentTranslator } from "src/helpers/translator";
import { icons } from "src/helpers";
import { IconButton } from "src/components";
import userIcon from "src/assets/icons/user.png";

import { logout } from "src/features/userSlice";
import { useTranslation } from "react-i18next";

// import { init } from "src/store/baseStore";

function Header({ isLoggedin }) {
  const [content, setContent] = useState(staticContent);
  const [menu, setMenu] = useState(false);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user);
  const language = useSelector((state) => state.language.lang);

  useEffect(() => {
    // dispatch(init({ cbAction: setId }));
    contentTranslator({ staticContent, setContent, language });
  }, [language, isLoggedin]);

  // Language Listener
  const handleLanguage = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    setLang(lng);
    // dispatch(setLang(e.target.value));
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
            <NavLink to={path.liveClasses}>{content.liveClasses}</NavLink>
          </li>
          <li>
            <NavLink to={path.videos}>{content.videos}</NavLink>
          </li>
          <li>
            <NavLink to={path.instructor}>{content.instructor}</NavLink>
          </li>
          <li>
            <NavLink to="https://youdio.strugbits.com/membership/">
              {content.membership}
            </NavLink>
          </li>
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
                {langOptions.map(({ label, value }) => (
                  <option id="en" value={value}>
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
                <NavLink to={path.signIn}>{content.signIn}</NavLink>
              </li>
              <li>
                <NavLink to={path.register}>{content.register}</NavLink>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <span className="txtLogout" onClick={() => btnLogout()}>
                  {content.logout}
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
                {langOptions.map(({ label, value }) => (
                  <option id="en" value={value}>
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
                <NavLink to={path.signIn}>{content.signIn}</NavLink>
              </li>
              <li onClick={reset}>
                <NavLink to={path.register}>{content.register}</NavLink>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <span className="txtLogout" onClick={() => btnLogout()}>
                  {content.logout}
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
            <NavLink to={path.liveClasses}>{content.liveClasses}</NavLink>
          </li>
          <li onClick={reset}>
            <NavLink to={path.videos}>{content.videos}</NavLink>
          </li>
          <li onClick={reset}>
            <NavLink to={path.instructor}>{content.instructor}</NavLink>
          </li>
        </ul>
      </SideMenu>
    </Section>
  );
}

export default Header;
