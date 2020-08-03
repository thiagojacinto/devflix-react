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
    box-shadow: 0px 0px 40px -10px rgba(40, 4, 69, 0.9);
  }
`;

export default CarouselItem;
