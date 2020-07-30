import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/Logo.png";
import Button from "../Button";

export const Bar = styled.header`
  width: 100vw;
  height: 10%;
  padding: 1em 0;

  display: flex;
  align-items: center;
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
    & .logo {
      height: var(--LOGO_HEIGHT);
    }
  }
`;

const defaultTheme = {
  color: "var(--primary_color)",
  bg: "var(--primary_bg)",
};

export const Topbar = ({ theme }) => {
  return (
    <Bar className="container">
      <Link to="/">
        <img className="logo" src={LogoImage} alt="Devflix Logo" />
      </Link>

      <ThemeProvider theme={theme ? theme : defaultTheme}>
        <Link to="/addmovie">
          <Button>Add movie</Button>
        </Link>
      </ThemeProvider>
    </Bar>
  );
};

export default Topbar;
