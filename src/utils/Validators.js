export const ratingValidator = (value) => {
  return value >= 1 && value <= 5;
};

export const priceValidator = (value) => {
  return value > 0;
};

export const quantityValidator = (value) => {
  return value > 0;
};

export const nameValidator = (value) => {
  return value.length > 0;
};

export const descriptionValidator = (value) => {
  return value.length > 0;
};
