import React from "react";

import { Footer } from "./Footer";
export const Layout = (props) => {
  return (
    <React.Fragment>
      <Footer />
      {props.children}
    </React.Fragment>
  );
};
