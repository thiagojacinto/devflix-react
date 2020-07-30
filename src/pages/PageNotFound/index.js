import React from "react";
import { useLocation } from "react-router-dom";
import PageDefault from "../PageDefault";
import NotFoundMessage from "./notFoundMessage";

export function PageNotFound() {
  let location = useLocation();

  return (
    <>
      <PageDefault>
        <NotFoundMessage message={location.pathname} />
      </PageDefault>
    </>
  );
}

export default PageNotFound;
