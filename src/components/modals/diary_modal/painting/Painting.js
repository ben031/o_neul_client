import React, { useRef, useEffect, useState } from "react";
import "./Painting.css";
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

const Painting = ({
  canvasRef,
  selectedImage,
  isEditing,
  paintingChangeCheck,
}) => {
  const [filling, setFilling] = useState(false);
  const [painting, setPainting] = useState(false);
  const [eraser, setEraser] = useState(false);
  const [erasing, setErasing] = useState(false);
  const [lineWeight, setLineWeight] = useState(2.5);
  const [buttonClicked, setButtonClicked] = useState("paint_btn");

  const buttonClickHandler = (e) => {
    setButtonClicked(e.target.id);
  };

  const ctx = useRef();
  const fileRef = useRef();

  const BASE_COLOR = "2c2c2c";
  const CANVAS_WIDTH = 1000;
  const CANVAS_HEIGHT = 500;

  const [paintModified, setPaintModified] = useState(false);

  const modifiedStatus = () => {
    setPaintModified(!paintModified);
  };

  useEffect(() => {
    if (selectedImage !== "") {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = selectedImage;
      img.crossOrigin = "*";

      img.onload = function () {
        ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      };
    }
  }, [isEditing === false]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas !== null) {
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      ctx.current = canvas.getContext("2d");
      ctx.current.strokeStyle = BASE_COLOR;

      ctx.current.fillStyle = "white"; //????????? ?????? ???????????? ???????????? ??????. PNG??? ????????? ????????? JPEG??? ????????? ?????? ????????? ?????????.
      ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //????????? ?????? ???????????? ???????????? ??????.
    }
  }, [isEditing === false]);

  function handleInsertImage(e) {
    e.preventDefault();
    if (isEditing) {
      paintingChangeCheck();
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  //??????????????? ?????? ??????
  //????????? ?????? ????????? ?????? ??????

  const [previewURL, setPreviewURL] = useState(null);
  const [whichOne, setWhichOne] = useState("canvas");
  const whichOneFunc = (e) => {
    //useState??? ????????? ?????? innerText ?????? ??????
    console.log(e.target.innerText);
    if (whichOne === "canvas") {
      setWhichOne("picture");
    } else {
      setWhichOne("canvas");
    }
  };

  //??????
  const startPainting = () => {
    if (isEditing) {
      paintingChangeCheck();
    }
    if (eraser === true) {
      setPainting(false);
      setErasing(true);
      setFilling(false);
    } else {
      setPainting(true);
      setErasing(false);
    }
  };

  const stopPainting = () => {
    setPainting(false);
    setErasing(false);
  };

  const handlePaintClick = (e) => {
    ctx.current.lineWidth = lineWeight;
    setFilling(false);
    setEraser(false);
    setErasing(false);
  };

  const handleClearClick = () => {
    ctx.current.fillStyle = "white"; // ?????? ???????????? ?????????.
    ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //????????? ?????? ????????? ???????????? ????????????.
    ctx.current.fillStyle = ctx.current.strokeStyle; //?????? ?????? ???????????? ?????? ???????????????.
  };

  function handleFillClick() {
    setFilling(true);
    setPainting(false);
    setEraser(false);
    setErasing(false);
  }

  const onMouseMove = ({ nativeEvent }) => {
    const getMouesPosition = (nativeEvent) => {
      var mouseX = (nativeEvent.offsetX * canvas.width) / canvas.clientWidth;
      var mouseY = (nativeEvent.offsetY * canvas.height) / canvas.clientHeight;
      return { x: mouseX, y: mouseY };
    };
    const canvas = canvasRef.current;

    if (ctx.current && !painting && !erasing) {
      ctx.current.beginPath();
    } else if (painting) {
      ctx.current.globalCompositeOperation = "source-over";
      ctx.current.lineTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.lineCap = "round";
      ctx.current.stroke();
    } else if (erasing) {
      ctx.current.globalCompositeOperation = "source-over";
      const colorExtra = ctx.current.strokeStyle; //?????? ?????? ????????? ?????? ?????????
      ctx.current.strokeStyle = "white"; // ???????????? ?????? ????????? ????????? ???????????? ?????? ????????? ??? ????????????
      ctx.current.fillStyle = "white"; // ?????? ???????????? ????????? ???????????? ???????????????

      ctx.current.lineWidth = 15;
      ctx.current.beginPath();
      ctx.current.arc(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y,
        10,
        0,
        4 * Math.PI
      );
      ctx.current.fill();
      ctx.current.moveTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.lineTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.stroke();

      ctx.current.strokeStyle = colorExtra; //????????? ?????? ?????? ?????? ??? ?????????
      ctx.current.fillStyle = colorExtra;
    }
  };

  const handleEraserClick = () => {
    setEraser(true);
  };

  const handleColorClick = (e) => {
    console.log("?????? ????????????");
    const color = e.target.style.backgroundColor;
    ctx.current.strokeStyle = color;
    ctx.current.fillStyle = color;
  };

  const handleRangeChange = (e) => {
    setLineWeight(e.target.value);
    console.log("??? ??????:::", lineWeight);
    ctx.current.lineWidth = lineWeight;
  };

  const handleCanvasClick = () => {
    if (filling) {
      // ctx.current.fillStyle = "black";
      ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //????????? ?????? ??????
    }
  };

  const disableRightClick = (e) => {
    e.preventDefault(); //????????? ?????? ??????
  };

  const handleFileButtonClick = (e) => {
    //??????????????? ??????
    e.preventDefault();
    fileRef.current.click(); // file ???????????? ????????? ?????? ?????????
  };

  if (selectedImage !== undefined && isEditing === false) {
    return (
      <div id="canvas_wrapper">
        <section id="controls">
          <span className="control_btns"></span>
        </section>

        <section style={{ position: "relative" }}>
          <canvas
            id="canvas"
            ref={canvasRef}
            width={`${CANVAS_WIDTH}`}
            height={`${CANVAS_HEIGHT}`}
            onContextMenu={disableRightClick}
          ></canvas>
        </section>
      </div>
    );
  } else if (selectedImage !== undefined && isEditing === true) {
    return (
      <div id="canvas_wrapper">
        <section id="controls">
          <span className="control_btns">
            <button id="clearBtn" onClick={handleClearClick}>
              <FontAwesomeIcon
                icon={farStickyNote}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: "#7b716e",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="paint_btn"
              onClick={(e) => {
                handlePaintClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "paint_btn" ? "#7b716e" : "#f2ede3", //?????? ??????????????? id??? ???????????? ?????????????
              }}
            >
              <FontAwesomeIcon
                icon={faPaintBrush}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "paint_btn" ? "#d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="fill_btn"
              onClick={(e) => {
                handleFillClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "fill_btn" ? "#7b716e" : "#f2ede3",
              }}
            >
              <FontAwesomeIcon
                icon={faFillDrip}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "fill_btn" ? "#d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="eraser_btn"
              onClick={(e) => {
                handleEraserClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "eraser_btn" ? "#7b716e" : "#f2ede3",
              }}
            >
              <FontAwesomeIcon
                icon={faEraser}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "eraser_btn" ? "d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>

            <button id="input_btn" onClick={handleFileButtonClick}>
              <FontAwesomeIcon
                icon={farImage}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: "#7b716e",
                  pointerEvents: "none",
                }}
              />
            </button>
            <input
              ref={fileRef}
              type="file"
              id="input_file"
              name="file"
              accept="image/*"
              hidden={true}
              onChange={handleInsertImage}
            />

            <span id="range_span">
              <input
                id="lineWeightRange"
                type="range"
                min="0.1"
                max="15"
                defaultValue={"3"}
                step="0.1"
                onChange={handleRangeChange}
              />
            </span>
          </span>
        </section>
        <section id="colors">
          {arr_Colors.map((color) => (
            <span
              className="color"
              key={uniqueId()}
              style={{ backgroundColor: `${color}` }}
              onClick={handleColorClick}
            ></span>
          ))}
        </section>

        <section style={{ position: "relative" }}>
          <canvas
            id="canvas"
            ref={canvasRef}
            width={`${CANVAS_WIDTH}`}
            height={`${CANVAS_HEIGHT}`}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
            onClick={handleCanvasClick}
            onContextMenu={disableRightClick}
          ></canvas>
        </section>
      </div>
    );
  } else {
    return (
      <div id="canvas_wrapper">
        <section id="controls">
          <span className="control_btns">
            <button id="clearBtn" onClick={handleClearClick}>
              <FontAwesomeIcon
                icon={farStickyNote}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: "#7b716e",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="paint_btn"
              onClick={(e) => {
                handlePaintClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "paint_btn" ? "#7b716e" : "#f2ede3", //?????? ??????????????? id??? ???????????? ?????????????
              }}
            >
              <FontAwesomeIcon
                icon={faPaintBrush}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "paint_btn" ? "#d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="fill_btn"
              onClick={(e) => {
                handleFillClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "fill_btn" ? "#7b716e" : "#f2ede3",
              }}
            >
              <FontAwesomeIcon
                icon={faFillDrip}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "fill_btn" ? "#d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="eraser_btn"
              onClick={(e) => {
                handleEraserClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "eraser_btn" ? "#7b716e" : "#f2ede3",
              }}
            >
              <FontAwesomeIcon
                icon={faEraser}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "eraser_btn" ? "d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>

            <button id="input_btn" onClick={handleFileButtonClick}>
              <FontAwesomeIcon
                icon={farImage}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: "#7b716e",
                  pointerEvents: "none",
                }}
              />
            </button>
            <input
              ref={fileRef}
              type="file"
              id="input_file"
              name="file"
              accept="image/*"
              hidden={true}
              onChange={handleInsertImage}
            />

            <span id="range_span">
              <input
                id="lineWeightRange"
                type="range"
                min="0.1"
                max="15"
                defaultValue={"3"}
                step="0.1"
                onChange={handleRangeChange}
              />
            </span>
          </span>
        </section>
        <section id="colors">
          {arr_Colors.map((color) => (
            <span
              className="color"
              key={uniqueId()}
              style={{ backgroundColor: `${color}` }}
              onClick={handleColorClick}
            ></span>
          ))}
        </section>

        <section style={{ position: "relative" }}>
          <canvas
            id="canvas"
            ref={canvasRef}
            width={`${CANVAS_WIDTH}`}
            height={`${CANVAS_HEIGHT}`}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
            onClick={handleCanvasClick}
            onContextMenu={disableRightClick}
          ></canvas>
        </section>
      </div>
    );
  }
};

export default React.memo(Painting);

// S3??? ?????? ?????? , ????????? ????????? + date.now()
// ?????? ??? URL?????? ????????? ????????? ?????? ??????????????? ?????? ??????.
