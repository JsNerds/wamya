import React, { Component, useState } from "react";
import { queryServerApi } from "../../../utils/queryServerApi";

import WheelComponent from "react-wheel-of-prizes";
import { Button } from "@material-ui/core";
import "react-wheel-of-prizes/dist/index.css";
import { useHistory } from "react-router";

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
  const [sig, setsig] = useState(false);
  const onFinished = (winner) => {
    console.log(winner);
    setsig(winner);
  };
  const history = useHistory();
  const claim = async (prize) => {
    const [res2, err2] = await queryServerApi(
      "deliveryman/prize/" + localStorage.getItem("id") + "/" + prize,
      null,
      "GET",
      false
    );
    history.go(0);
  };
  return (
    <div className="App">
      <h1>you've earned a Spinning Prize Wheel</h1>
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

      <Button
        color="secondary"
        variant="contained"
        type="submit"
        onClick={() => claim(sig)}
      >
        Claim
      </Button>
    </div>
  );
};
export default Wheels;
