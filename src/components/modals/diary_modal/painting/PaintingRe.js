import React, { useState, useEffect } from "react";
import Colors from "./Colors";
import PaintingOptions from "./PaintingOptions";

const getMouesPosition = (nativeEvent, canvas) => {
  let mouseX = (nativeEvent.offsetX * canvas.width) / canvas.clientWidth;
  let mouseY = (nativeEvent.offsetY * canvas.height) / canvas.clientHeight;

  return { x: mouseX, y: mouseY };
};

const changeState = (willChange, ...rest) => {
  willChange && willChange(true);
  for (let i = 0; i < rest.length; i++) {
    rest[i](false);
  }
};

const PaintingRe = ({
  canvasRef,
  selectedImage,
  isEditing,
  paintingChangeCheck,
}) => {
  const [ctx, setCtx] = useState();
  const [canvasCur, setCanvasCur] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [color, setColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 500;
    canvas.style.width = `100%`;
    // canvas.style.height = `100%`;
    context.lineCap = "round";
    context.lineWidth = lineWidth;

    // 이미 일기가 존재하면 이미지 로드 후 캔버스에 그리기
    if (selectedImage) {
      const img = new Image();
      img.src = selectedImage;
      img.crossOrigin = "*";

      img.onload = function () {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
    setCanvasCur(canvas);
    setCtx(context);
  }, []);

  useEffect(() => {
    if (ctx) ctx.lineWidth = lineWidth;
  }, [lineWidth]);

  // 그리기 시작
  const startDrawing = ({ nativeEvent }) => {
    if (isEditing) {
      paintingChangeCheck();
    }
    const x = getMouesPosition(nativeEvent, canvasCur).x;
    const y = getMouesPosition(nativeEvent, canvasCur).y;
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  // 그리기 멈춤
  const endDrawing = () => {
    ctx.closePath();
    setIsDrawing(false);
  };

  // 그리는 중
  const draw = ({ nativeEvent }) => {
    if (!isDrawing || (!isEditing && selectedImage)) return;

    const x = getMouesPosition(nativeEvent, canvasCur).x;
    const y = getMouesPosition(nativeEvent, canvasCur).y;
    const { offsetX, offsetY } = nativeEvent;
    const { width, height } = canvasCur.getBoundingClientRect();
    ctx.strokeStyle = color;
    ctx.lineTo(x, y);
    ctx.stroke();
    if (offsetX >= width || offsetX <= 0 || offsetY >= height || offsetY <= 0) {
      ctx.closePath();
      setIsDrawing(false);
    }
  };

  // 그리기 버튼
  const changeTodraw = () => {
    changeState(null, setIsErasing, setIsFilling);
    setColor("black");
    setLineWidth(2);
  };

  // 채우기
  const fill = () => {
    changeState(setIsFilling, setIsErasing);
  };

  // 지우기
  // line 색깔만 흰색으로 하면 되는 거 아닌가 ?
  const erase = () => {
    changeState(setIsErasing, setIsFilling);
    setColor("white");
    ctx.lineCap = "round";
    setLineWidth(15);
  };

  // 전체 색깔 채우기
  const fillColor = (color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1000, 500);
  };

  // 이미지 불러오기
  const loadImg = (e) => {
    e.preventDefault();

    if (isEditing) {
      paintingChangeCheck();
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const fileList = e.target.files[0];

    const reader = new FileReader();

    // 파일 읽기 완료의 콜백 함수
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, 1000, 500);
      };
      img.src = event.target.result;
    };

    // What the basically does is to ‘readAsDataURL’ the uploaded image.
    reader.readAsDataURL(fileList);
  };
  return (
    <section>
      {(isEditing || !selectedImage) && (
        <>
          <PaintingOptions
            erase={erase}
            eraseAll={fillColor}
            changeTodraw={changeTodraw}
            fill={fill}
            lineWidth={lineWidth}
            setLineWidth={setLineWidth}
            loadImg={loadImg}
          />
          <Colors setColor={setColor} isErasing={isErasing} />
        </>
      )}
      <canvas
        ref={canvasRef}
        onClick={() => isFilling && fillColor(color)}
        onMouseDown={(e) => startDrawing(e)}
        onMouseUp={endDrawing}
        onMouseMove={(e) => draw(e)}
      ></canvas>
    </section>
  );
};

export default PaintingRe;

/**
 * 버그
 *  - 수정 중일 때 텍스트 영역까지 넘쳐버리는 버그
 *  - 마우스 커서를 캔버스 바깥 영역으로 나가도 계속 드로잉이 지속되는 버그
 *    - canvas css height 100% 없애버리니 해결완료
 *
 * 더 해야하는 것
 *  - 파일 불러오기
 *    - 완료
 *  - 드로잉 변화 함수로 체크해서 재등록 여부 스테이트 관리하기
 *    - 완료
 */
