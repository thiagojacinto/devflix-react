import React from "react";
import styled from "styled-components";

import { getYoutubeThumbnailURL } from "../../../utils/getDataFromYoutubeLink";

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export function VideoCard({ videoTitle = "", videoURL = "", categoryColor }) {
  // const videoID = getYouTubeId(videoURL);
  const image = getYoutubeThumbnailURL(videoURL);
  return (
    <VideoCardContainer
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || "red" }}
      title={videoTitle}
      url={image}
    >
      {/* <img src={image} alt={`${videoID} video thumbnail`} /> */}
    </VideoCardContainer>
  );
}

export default { VideoCard, VideoCardContainer };
