import React, { useState } from "react";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null); // 'red', 'yellow', 'green'

  const getLightClass = (color) => {
    const base = `rounded-circle mb-3 ${colorClass(color)}`;
    return color === activeLight
      ? `${base} shadow-lg`
      : `${base} opacity-25`;
  };

  const colorClass = (color) => {
    switch (color) {
      case "red":
        return "bg-danger";
      case "yellow":
        return "bg-warning";
      case "green":
        return "bg-success";
      default:
        return "";
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="bg-dark rounded-4 p-4 d-flex flex-column align-items-center shadow" style={{ width: "100px", minHeight: "300px" }}>

        <div
          className={getLightClass("red")}
          onClick={() => setActiveLight("red")}
          style={{ width: "60px", height: "60px", cursor: "pointer" }}
        ></div>
        <div
          className={getLightClass("yellow")}
          onClick={() => setActiveLight("yellow")}
          style={{ width: "60px", height: "60px", cursor: "pointer" }}
        ></div>
        <div
          className={getLightClass("green")}
          onClick={() => setActiveLight("green")}
          style={{ width: "60px", height: "60px", cursor: "pointer" }}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;

