import React from "react";

import { AppContextProvider } from "./ContextApi";
type propTypes = {
    children: React.ReactNode
  }
const GlobalContext = ({ children }: propTypes) => {
  return (
    <>
      <AppContextProvider>{children}</AppContextProvider>
    </>
  );
};

export default GlobalContext;