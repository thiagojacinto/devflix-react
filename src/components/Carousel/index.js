import React from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import { VideoCard } from "./VideoCard";

import { getYouTubeId } from "../../utils/getDataFromYoutubeLink";

const CarouselWrapper = styled.ul`
  list-style: none;

  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

export const Carousel = ({ items = [], categoryColor = "" }) => {
  // console.log(`> Lista de items: ${items}`);

  return (
    <CarouselWrapper>
      {items.map((item) => {
        const videoID = getYouTubeId(item.url);

        // console.log({ item });
        // console.log({ videoID });
        // console.log(`Item da lista de items: `, { item });
        return (
          <CarouselItem key={videoID}>
            <VideoCard
              videoTitle={item.titulo}
              videoURL={item.url}
              categoryColor={categoryColor}
            />
            {/* <img src={thumb} alt={`${item.titulo}`} /> */}
            <p>{item.titulo}</p>
          </CarouselItem>
        );
      })}
    </CarouselWrapper>
  );
};

export default Carousel;
