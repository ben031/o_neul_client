import React, { useState, useEffect, useRef } from "react";
import { zoomIn } from "react-icons-kit/icomoon";
import Colors from "./Colors";
const PaintingRe = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [canvasCur, setCanvasCur] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineColor, setLineColor] = useState("black");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { width, height } = canvas.getBoundingClientRect();
    // canvas.width = width;
    // canvas.height = height;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.background = "#555";
    // context.fillRect(0, 0, 100, 100);
    context.fillStyle = "white";
    context.fillRect(0, 0, 1000, 500);
    context.scale(1, 1);
    context.lineCap = "round";
    context.lineWidth = 2;
    setCanvasCur(canvas);
    setCtx(context);
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctx.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const { width, height } = canvasCur.getBoundingClientRect();
    ctx.strokeStyle = lineColor;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    if (offsetX >= width || offsetX <= 0 || offsetY >= height || offsetY <= 0) {
      ctx.closePath();
      setIsDrawing(false);
    }
  };

  return (
    <div>
      <Colors setLineColor={setLineColor} />
      <canvas
        ref={canvasRef}
        onMouseDown={(e) => startDrawing(e)}
        onMouseUp={endDrawing}
        onMouseMove={(e) => draw(e)}
      ></canvas>
    </div>
  );
};

export default PaintingRe;
