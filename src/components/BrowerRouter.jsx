/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const BrowserContext = createContext();
const routerstate = {};

const BrowerRouter = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState(new URL(window.location.href));

  // console.log(currentUrl);

  useEffect(() => {
    const popStatehandler = (e) => {
      console.log(e);

      setCurrentUrl(new URL(window.location.href));
    };

    window.addEventListener("popstate", popStatehandler);
  }, []);

  return (
    <>
      <BrowserContext.Provider
        value={{ routerstate, currentUrl, setCurrentUrl }}
      >
        {children}
      </BrowserContext.Provider>
    </>
  );
};

export default BrowerRouter;
export { BrowserContext };
