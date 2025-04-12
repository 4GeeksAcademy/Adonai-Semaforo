import React, { useState } from "react";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null); // 'red', 'yellow', 'green'

  const getLightClass = (color) => {
    const isActive = activeLight === color;
    return `light ${color} ${isActive ? "glow" : ""}`;
  };

  return (
    <div className="traffic-light-container">
      <div className="pole"></div>
      <div className="traffic-light">
        <div
          className={getLightClass("red")}
          onClick={() => setActiveLight("red")}
        ></div>
        <div
          className={getLightClass("yellow")}
          onClick={() => setActiveLight("yellow")}
        ></div>
        <div
          className={getLightClass("green")}
          onClick={() => setActiveLight("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;

