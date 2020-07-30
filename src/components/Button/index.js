import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  padding: 1em;
  border-radius: 5px;

  cursor: pointer;
  font-weight: bold;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.7;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.dark};
  }

  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.color};
`;

Button.defaultProps = {
  theme: {
    color: "var(--primary_color)",
    bg: "var(--primary_bg)",
    dark: "var(--dark)",
  },
};

export default Button;
