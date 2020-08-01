import React from "react";
import styled from "styled-components";

import "../../styles/onHoverEffect.css";

const BaseFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;

  background-color: var(--dark);
  color: var(--secondary_color);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: var(--LARGE_FONT);
    padding: 1.3em 0;
  }
`;

export function Footer({ animation = true }) {
  return (
    <BaseFooter>
      <strong>
        Created by{" "}
        <a
          className={animation ? "hover__animation" : ""}
          href="https://github.com/thiagojacinto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thiago Jacinto
        </a>{" "}
        @ 2020
      </strong>
      <p>
        Inspired by{" "}
        <a
          className={animation ? "hover__animation" : ""}
          href="https://github.com/imersao-alura/aluraflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imersão React
        </a>{" "}
        da Alura.
      </p>
    </BaseFooter>
  );
}

export default Footer;
