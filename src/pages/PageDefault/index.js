import React from "react";

import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import PageContentWrapper from "../PageContentWrapper";

export function PageDefault({ children }) {
  return (
    <>
      <Topbar />
      <PageContentWrapper>{children}</PageContentWrapper>
      <Footer />
    </>
  );
}

export default PageDefault;
