// components/RainEffect.jsx
import React, { useEffect, useRef } from "react";
import "./RainEffect.css";

const RainEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const assets = useRef([]);
  const timerRef = useRef(null);

  const rainColor = "rgba(255, 255, 255, 0.4)";

  const randomRange = (min, max, round = true) => {
    const val = Math.random() * (max - min) + min;
    return round ? Math.floor(val) : val;
  };

  class RainDrop {
    constructor(canvas) {
      this.width = 2;
      this.height = randomRange(10, 20);
      this.x = randomRange(0, canvas.width);
      this.y = -this.height;
      this.yVelocity = randomRange(7, 10);
    }

    draw(ctx, canvas) {
      this.y += this.yVelocity;
      ctx.fillStyle = rainColor;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      return this.y <= canvas.height;
    }
  }

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < assets.current.length; i++) {
      if (!assets.current[i].draw(ctx, canvas)) {
        assets.current.splice(i, 1);
        i--;
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const spawnRain = () => {
      for (let i = 0; i < randomRange(1, 3); i++) {
        assets.current.push(new RainDrop(canvas));
      }
      timerRef.current = setTimeout(spawnRain, 60);
    };

    spawnRain();
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rain-canvas"
    />
  );
};

export default RainEffect;