export const makeHexCode = () => {
  const hex16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let hexcode = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    hexcode += hex16[randomNumber];
  }
  return hexcode + "22";
};
