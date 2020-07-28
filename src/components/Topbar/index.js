import React from "react";
import styled from "styled-components";

import LogoImage from "../../assets/Logo.png";

export const Bar = styled.div`
  width: 100%;
  height: 20%;
  padding: 1em 0;

  display: flex;
  align-content: space-between;
  justify-content: space-around;

  transition: 0.3s;

  & .logo {
    width: auto;
    height: 80%;
  }
`;

export const Topbar = () => {
  return (
    <Bar className="container">
      <img className="logo" src={LogoImage} alt="Devflix logo" />
    </Bar>
  );
};

export default Topbar;
