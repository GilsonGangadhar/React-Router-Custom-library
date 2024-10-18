import { useContext } from "react";
import { BrowserContext } from "./BrowerRouter";

/* eslint-disable react/prop-types */
const Route = ({ path = "", children }) => {
  const { currentUrl } = useContext(BrowserContext);

  console.log(currentUrl, "in router");

  if (currentUrl.pathname === path) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default Route;
