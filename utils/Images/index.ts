const getImageUrl = (image: Image, index?: number) => {
  if (index !== undefined) {
    return `url(${image.path}${image.name}@${image.width}x${image.height}-${index}.${image.format})`;
  } else {
    return `url(${image.path}${image.name}@${image.width}x${image.height}.${image.format})`;
  }
};

export default getImageUrl;
