import React, { useEffect, useRef, useState } from 'react';
import { Menu } from './Menu';
import './Paint.css'

export const Paint = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState('black');
  const [lineOpacity, setLineOpacity] = useState(0.1);

  // Initialization when the component
  // mounts for the first time
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  // Function for starting the drawing
  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  };

  // Function for ending the drawing
  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );

    ctxRef.current.stroke();
  };

  return (
    <section className="paint-container">
      <div className="paint-wrapper">
        <Menu
          className="paint-menu"
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity} />
        <div className="draw-area">
          <canvas
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            ref={canvasRef}
            width="1000px"
            height="500px" />
        </div>
      </div>
      <h2>Paint</h2>
    </section>
  );
}