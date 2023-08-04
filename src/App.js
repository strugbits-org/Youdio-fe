import { useSelector } from "react-redux";
import "./App.css";
import Router from "./config/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { lang } = useSelector((state) => state.language);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n && i18n.changeLanguage(lang);
    // console.log(lang);
  }, [lang, i18n]);
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
