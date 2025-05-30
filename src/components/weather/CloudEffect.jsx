// components/CloudEffect.jsx
import React, { useEffect, useRef } from "react";
import CloudImage from "@/assets/cloud.png"; // 구름 이미지 경로
import "./CloudEffect.css";

const CloudEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const assets = useRef([]);
  const cloudImage = useRef(new Image());

  const randomRange = (min, max, round = true) => {
    const val = Math.random() * (max - min) + min;
    return round ? Math.floor(val) : val;
  };

  class Cloud {
    constructor(canvas) {
      this.img = cloudImage.current;
      this.width = 1792;
      this.height = 276;
      this.x = randomRange(-this.width, canvas.width);
      this.y = 0;
      this.xVelocity = randomRange(10, 30) / 60;
    }

    draw(ctx, canvas) {
      this.x += this.xVelocity;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

      // 다시 왼쪽으로 보내기
      if (this.x > canvas.width) {
        this.x = -this.width;
      }
      return true;
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

    cloudImage.current.src = CloudImage; // 구름 이미지 경로 설정
    cloudImage.current.onload = () => {
      // 구름 3개 초기 배치
      assets.current.push(new Cloud(canvas));
      assets.current.push(new Cloud(canvas));
      assets.current.push(new Cloud(canvas));
      animate();
    };

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cloud-canvas"
    />
  );
};

export default CloudEffect;