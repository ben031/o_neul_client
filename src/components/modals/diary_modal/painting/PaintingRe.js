import React, { useEffect, useRef } from "react";

const PaintingRe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default PaintingRe;
