import React from "react";

import { Footer } from "./Footer";
export const Layout = (props) => {
  return (
    <React.Fragment>
      {props.children}
      <Footer />
    </React.Fragment>
  );
};
