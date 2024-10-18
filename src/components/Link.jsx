import { useContext } from "react";
import { BrowserContext } from "./BrowerRouter";

/* eslint-disable react/prop-types */
const Link = ({ to, children }) => {
  const { setCurrentUrl } = useContext(BrowserContext);

  const handleNavigation = () => {
    window.history.pushState({}, "", to); //this will change the url in the web to our "to"
    setCurrentUrl(new URL(window.location.origin + to)); // will chnage the page to our desired "url"
  };

  return (
    <>
      <a onClick={handleNavigation}>{children}</a>
    </>
  );
};

export default Link;
