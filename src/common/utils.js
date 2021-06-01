export const resizedImage = (imageURL, size) => {
  const image = imageURL.match(/media\/screenshots/)
    ? imageURL.replace('media/sceenshots', `media/resize/${size}/-/screenshots`)
    : imageURL.replace('media/game/', `/media/resize${size}/-/games/`);

  return image;
};
