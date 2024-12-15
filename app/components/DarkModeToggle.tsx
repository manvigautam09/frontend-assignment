import React, { Fragment, useState } from "react";
import DarkMode from "../assets/DarkMode";
import LightMode from "../assets/LightMode";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <Fragment>
      {isDarkMode ? (
        <LightMode onClick={toggleTheme} />
      ) : (
        <DarkMode onClick={toggleTheme} />
      )}
    </Fragment>
  );
};

export default DarkModeToggle;
