import React, { Component } from "react";

import WheelComponent from "react-wheel-of-prizes";
import "react-wheel-of-prizes/dist/index.css";
import "./styles.css";
const Wheels = () => {
  const segments = [
    "better luck next time",
    "won 50% profit on next delivery",
    "won 10 liters of gasoline",
    "better luck next time",
    "won 75% profit on next delivery",
    "won 20 liters of gasoline",
    "better luck next time",
    "won 30 liters of gasoline",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <h1>Spinning Prize Wheel React</h1>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={200}
        upDuration={220}
        downDuration={610}
      />
    </div>
  );
};
export default Wheels;
