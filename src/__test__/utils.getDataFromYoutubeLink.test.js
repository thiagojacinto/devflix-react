import {
  getYouTubeId,
  getYoutubeThumbnailURL,
} from "../utils/getDataFromYoutubeLink";

describe("Testing util: getDataFromYoutubeLink file, function: getYouTubeId", () => {
  test("Should retrieve successfully an ID from an URL", () => {
    const URL = "https://www.youtube.com/watch?v=6DCy5goAlsw";
    const expectedId = "6DCy5goAlsw";

    const result = getYouTubeId(URL);

    expect(result).toBe(expectedId);
  });

  test("Should retrieve successfully an ID from an Youtube official tiny URL", () => {
    const embedURL = "https://youtu.be/SGwHpzgqzgk";
    const expectedId = "SGwHpzgqzgk";

    const result = getYouTubeId(embedURL);

    expect(result).toBe(expectedId);
  });

  test("Should not change the input URL if it not matches youtubeURL pattern", () => {
    const URL = "http://github.com/thiagojacinto";
    const expected = URL;

    const result = getYouTubeId(URL);

    expect(result).toBe(expected);
  });
});

describe("Testing util: getDataFromYoutubeLink file, function: getYoutubeThumbnailURL", () => {
  test("Should get right thumbnail link from an Youtube URL", () => {
    const URL = "https://www.youtube.com/watch?v=6DCy5goAlsw";
    const expectedThumbnailURL = `https://img.youtube.com/vi/6DCy5goAlsw/hqdefault.jpg`;

    const result = getYoutubeThumbnailURL(URL);

    expect(result).toBe(expectedThumbnailURL);
  });

  test("Should throw Error when input URL are not YouTube default", () => {
    const URL = "http://github.com/thiagojacinto";

    expect(() => getYoutubeThumbnailURL(URL)).toThrowError();
  });
});
