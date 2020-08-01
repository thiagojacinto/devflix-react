import styled from "styled-components";

export const CarouselItem = styled.li`
  flex: none;
  width: 350px;
  height: 300px;

  scroll-snap-align: start;

  & p {
    overflow-wrap: normal;
    font-size: var(--NORMAL_FONT);
  }

  & a {
    flex: none;
    object-fit: cover;
  }
`;

export default CarouselItem;
