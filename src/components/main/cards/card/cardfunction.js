export const splitDate = (date) => {
  const output =
    date.split("-").length === 1 ? date.split(".") : date.split("-");

  output.length === 2 && output.unshift("2021");

  return output;
};

export const findEmj = (category, id) => {
  return category.find((icon) => icon.id === id);
};

export const checkEmpha = (category, id) => {
  return category.some((ele) => ele.user.id === id);
};
