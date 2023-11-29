import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const d=await import('../../Utils/mockData')
import NavBar from "../../components/NavBar/NavBar";
import "../About/About.less";
export default function LanguagePage(props) {
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState();
  useEffect(() => {
    if (d) {
      setCurrentLanguage(
        d.LanguageItems.find((item) => item.route === location?.pathname)
      );
    }
  }, [location?.pathname, d]);
  console.log("currentLanguage", currentLanguage);
  return (
    <div className="container nav-padding">
      <NavBar />
      <div id="about-content-container">
        <h1 id="title">{currentLanguage?.title}</h1>
        <div id="divider" />
        <div>{currentLanguage?.description}</div>
        {currentLanguage?.html}
      </div>
    </div>
  );
}
