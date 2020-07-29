import React from "react";
import styled, { ThemeProvider } from "styled-components";

import LogoImage from "../../assets/Logo.png";
import Button from "../Button";

export const Bar = styled.header`
  width: 100vw;
  height: 20%;
  padding: 1em 0;

  display: flex;
  align-content: space-between;
  justify-content: space-around;

  transition: 0.3s;

  .logo {
    height: 100%;
    width: auto;
  }

  @media screen and (max-width: 600px) {
    & .logo {
      height: var(--LOGO_HEIGHT);
    }
  }

  @media screen and (max-height: 768px) {
    height: var(--LOGO_HEIGHT);
  }
`;

const theme = {
  color: "var(--primary_color)",
};

export const Topbar = () => {
  return (
    <Bar className="container">
      <img className="logo" src={LogoImage} alt="Devflix Logo" />

      <ThemeProvider theme={theme}>
        <Button>Add movie</Button>
      </ThemeProvider>
    </Bar>
  );
};

export default Topbar;
