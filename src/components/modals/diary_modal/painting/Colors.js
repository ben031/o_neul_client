import React from "react";
import styled from "styled-components";
let arr_Colors = [
  "#e32119",
  "#ff3b30",
  "#f65314",
  "#ff9900",
  "#fbb034",
  "#fdbd10",
  "#ffcc00",
  "#ffdd00",
  "#d2ea32",
  "#8ee000",
  "#6cc644",
  "#2dbe60",
  "#00b22d",
  "#5ec6f2",
  "#00a4e4",
  "#4285f4",
  "#147efb",
  "#0064d2",
  "#5856d6",
  "#833ab4",
  "#8a7967",
  "#7f7f7f",
  "white",
  "#2c2c2c",
];

const Colors = ({ setLineColor }) => {
  return (
    <ColorWrapper>
      {arr_Colors.map((color) => (
        <Color color={color} onClick={() => setLineColor(color)}></Color>
      ))}
    </ColorWrapper>
  );
};

export default Colors;

const ColorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Color = styled.div`
  height: 3rem;
  width: 100%;
  background: ${(props) => props.color};
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
