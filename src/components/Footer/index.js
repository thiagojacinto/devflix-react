import React from "react";
import styled from "styled-components";

const BaseFooter = styled.footer`
  background-color: var(--dark);
  color: var(--secondary_color);

  padding: 1em 1.2em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  strong {
    font-size: 1.2em;
    margin-bottom: 5%;
  }
`;

function Footer() {
  return (
    <BaseFooter>
      <strong>
        Created by <a href="https://github.com/thiagojacinto">Thiago Jacinto</a>{" "}
        @ 2020
      </strong>
      <p>
        Inspired by{" "}
        <a href="https://github.com/imersao-alura/aluraflix">Imersão React</a>{" "}
        da Alura.
      </p>
    </BaseFooter>
  );
}

export default Footer;
