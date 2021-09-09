import React from "react";
import uniqueId from "lodash/uniqueId";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faFillDrip,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faImage as farImage,
  faStickyNote as farStickyNote,
} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const optionBtn = [faPaintBrush, faFillDrip, faEraser, farImage, farStickyNote];

const PaintingOptions = ({
  erase,
  eraseAll,
  changeTodraw,
  fill,
  lineWidth,
  setLineWidth,
  loadImg,
}) => {
  const fileRef = React.useRef(null);

  const selectButtonFunc = (iconName) => {
    switch (iconName) {
      case "paint-brush":
        changeTodraw();
        break;
      case "fill-drip":
        fill();
        break;
      case "eraser":
        erase();
        break;
      case "sticky-note":
        eraseAll("white");
      default:
        break;
    }
  };

  const handleFileButtonClick = (e) => {
    //파일업로드 버튼
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };

  return (
    <StyledPaintingButtonWrapper>
      {optionBtn.map((btn) =>
        btn.iconName === "image" ? (
          <>
            <StyledPaintingButton
              key={uniqueId()}
              onClick={(e) => handleFileButtonClick(e)}
            >
              <FontAwesomeIcon icon={btn} size={10} />
            </StyledPaintingButton>
            <StyledFileInput
              ref={fileRef}
              type="file"
              accept="image/*"
              id="input_file"
              onChange={(e) => loadImg(e)}
            />
          </>
        ) : (
          <StyledPaintingButton
            key={uniqueId()}
            onClick={() => selectButtonFunc(btn.iconName)}
          >
            <FontAwesomeIcon icon={btn} size={10} />
          </StyledPaintingButton>
        )
      )}
      <input
        type="range"
        min="1"
        max="20"
        value={lineWidth}
        step="0.1"
        onChange={(e) => setLineWidth(e.target.value)}
      />
    </StyledPaintingButtonWrapper>
  );
};

export default PaintingOptions;

const StyledPaintingButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d4c7b1;
  border: 1px solid rgb(27, 27, 27, 0.2);
  color: rgb(27, 27, 27);
`;

const StyledPaintingButton = styled.button`
  width: 100%;
  height: 3.5rem;
  border: 1px solid rgb(27, 27, 27, 0.3);

  &:hover {
    background-color: #cbaf80;
  }

  & svg {
    font-size: 2rem;
  }
`;

const StyledFileInput = styled.input`
  display: none;
`;

const StyledFileLabel = styled.label`
  width: 100%;
`;
