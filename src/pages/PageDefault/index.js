import React from "react";

import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";

export function PageDefault({ children }) {
  return (
    <>
      <Topbar />
      <>{children}</>
      <Footer />
    </>
  );
}

export default PageDefault;
