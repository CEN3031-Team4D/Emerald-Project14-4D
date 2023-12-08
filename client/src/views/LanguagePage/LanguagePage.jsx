// Importing necessary hooks from React and useLocation from react-router-dom for routing context.
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Dynamic import for the mock data utility, which contains language items.
const d=await import('../../Utils/mockData')
// Importing the NavBar component to be used on this page.
import NavBar from "../../components/NavBar/NavBar";
import "../About/About.less";
export default function LanguagePage(props) { // The LanguagePage component is responsible for rendering details about a specific language.
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState();
  // useEffect hook to perform side effects. In this case, it's used to update the currentLanguage state
  // whenever the location changes (i.e., when navigating to a different language page).

  useEffect(() => {
    if (d) {
      setCurrentLanguage(d.LanguageItems.find((item) => item.route === location?.pathname));

    }
  }, [location?.pathname, d]);
  console.log("currentLanguage", currentLanguage);
  // The JSX returned by the LanguagePage component, which uses the NavBar component and displays
  // the title and description of the current language, as well as any associated HTML.
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
