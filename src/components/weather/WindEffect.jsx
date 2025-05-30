// components/WindEffect.jsx
import React, { useEffect, useRef } from "react";
import "./WindEffect.css";

const WindEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const assets = useRef([]);
  const timerRef = useRef(null);
  const leafImageRef = useRef(new Image());

  const randomRange = (min, max, round = true) => {
    const val = Math.random() * (max - min) + min;
    return round ? Math.floor(val) : val;
  };

  class BlowingLeaf {
    constructor(canvas) {
      this.width = 30;
      this.height = 30;
      this.x = randomRange(-100, -50);
      this.y = randomRange(0, canvas.height);
      this.xVelocity = randomRange(1, 3);
      this.yVelocity = randomRange(-0.5, 0.5);
      this.rotation = Math.random() * 2 * Math.PI;
      this.rotationSpeed = randomRange(-0.05, 0.05, false);
      this.img = leafImageRef.current;
    }

    draw(ctx, canvas) {
      this.x += this.xVelocity;
      this.y += this.yVelocity;
      this.rotation += this.rotationSpeed;

      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
      ctx.restore();

      return this.x < canvas.width;
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
    leafImageRef.current.src = "https://s3.amazonaws.com/gerwins/weather/weather_leaf.png";
    leafImageRef.current.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const spawnLeaves = () => {
        for (let i = 0; i < randomRange(1, 4); i++) {
          assets.current.push(new BlowingLeaf(canvas));
        }
        timerRef.current = setTimeout(spawnLeaves, randomRange(300, 1500));
      };

      spawnLeaves();
      animate();
    };

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="wind-canvas"
    />
  );
};

export default WindEffect;
