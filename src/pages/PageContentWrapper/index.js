import styled from "styled-components";

export const PageContentWrapper = styled.main`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.color};

  padding-top: 3em;
  padding-right: 2.5em;
  padding-left: 2.5em;
  padding-bottom: var(--FOOTER_HEIGHT);
`;

export default PageContentWrapper;
