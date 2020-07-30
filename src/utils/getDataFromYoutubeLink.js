/* SOURCE: Imersão React - ALURA: https://github.com/imersao-alura/aluraflix/blob/master/src/components/Carousel/components/VideoCard/index.js */

/**
 * Gets ID from YouTube video default video URL.
 *
 * Example: YoutubeURL = "https://www.youtube.com/watch?v=6DCy5goAlsw"
 * -> Return: "6DCy5goAlsw"
 *
 * @param {string} youtubeURL
 */
export const getYouTubeId = (youtubeURL = "") => {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
};

/**
 * Retrieves the thumbnail of an YouTube video from its URL, full or embed.
 * @param {string} youtubeURL
 */
export const getYoutubeThumbnailURL = (youtubeURL = "", MAX_LENGTH = 20) => {
  const videoID = getYouTubeId(youtubeURL);

  if (videoID.length > MAX_LENGTH)
    throw new Error("YouTube video URL is wrong. Please, verify. ");

  return `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
};

export default {
  getYouTubeId,
  getYoutubeThumbnailURL,
};
