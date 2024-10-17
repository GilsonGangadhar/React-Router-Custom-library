import { createContext } from "react";
import Route from "./Route";

const RouteContext = createContext();

const BrowerRouter = () => {
  return (
    <>
      <RouteContext.Provider>
        <Route />
      </RouteContext.Provider>
    </>
  );
};

export default BrowerRouter;
