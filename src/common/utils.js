export const resizedImage = (imageURL, size) => {
  let image;
  if (imageURL) {
    image = imageURL.match(/media\/screenshots/)
      ? imageURL.replace(
          'media/screenshots',
          `media/resize/${size}/-/screenshots`
        )
      : imageURL.replace('/media/games', `/media/resize/${size}/-/games`);
  } else {
    image = imageURL;
  }

  return image;
};
