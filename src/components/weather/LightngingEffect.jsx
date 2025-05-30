import React, { useEffect, useRef } from "react";
import "./LightningEffect.css";

const LightningEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const timerRef = useRef(null);
  const flashes = useRef([]);

  class Lightning {
    constructor() {
      this.opacity = 1;
    }

    draw(ctx, canvas) {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.opacity -= 0.1;
      return this.opacity > 0;
    }
  }

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < flashes.current.length; i++) {
      if (!flashes.current[i].draw(ctx, canvas)) {
        flashes.current.splice(i, 1);
        i--;
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  const randomRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const spawnLightning = () => {
      if (Math.random() > 0.7) {
        flashes.current.push(new Lightning());
      }
      timerRef.current = setTimeout(spawnLightning, randomRange(1000, 5000));
    };

    spawnLightning();
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="lightning-canvas"
    />
  );
};

export default LightningEffect;
