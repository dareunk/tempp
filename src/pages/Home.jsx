import React, { useState } from "react";
import TabBar from "../components/TabBar";
import SunnyEffect from "../components/weather/SunnyEffect";
import CloudEffect from "../components/weather/CloudEffect";
import RainEffect from "../components/weather/RainEffect";
import BlurEffect from "../components/weather/BlurEffect";
import LightningEffect from "../components/weather/LightngingEffect";
import './Home.css';

export default function Home() {
  const [weatherState] = useState(3); // 0 ~ 4

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div className="weather-container">
        
    
        {/* 0 화창  1 화창 구름 2. 흐림 구름 3. 흐림 구름 비 , 4. 흐림 구름 비 번개*/}

        {/* 🌥 구름 */}
        {[1, 2, 3, 4].includes(weatherState) && <CloudEffect />}

        {/* ⚡ 번개 */}
        {weatherState === 4 && <LightningEffect />}

        {/* 🌧 비 */}
        {[3, 4].includes(weatherState) && <RainEffect />}
        {/* ☀️ 맑음 */}

        {(weatherState === 0 || weatherState === 1) && (
          <SunnyEffect />
        )}
        {(weatherState === 2 || weatherState === 3 || weatherState === 4) && (
          <BlurEffect />
        )}
      </div>

      <TabBar />
    </div>
  );
}
