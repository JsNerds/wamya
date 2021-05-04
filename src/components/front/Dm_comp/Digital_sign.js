import React, {
  useCallback,
  Fragment,
  useState,
  useRef,
  useEffect,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import styles from "./test.css";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import Modal from "react-bootstrap/Modal";
import ImageSlider from "react-image-comparison-slider";
import { recolorSVGString, recolorPNGImage } from "recolor-img";
import "./sigCanvas.css";
import axios from "axios";
import Wheel from "./Wheel";
import Wheels from "./Wheels";

import ReactCompareImage from "react-compare-image";
import "./App.css";
import "./styles.css";
import ig from "./logoBlue.png";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import {
  Grid,
  LinearProgress,
  Card,
  Button,
  CardContent,
  List,
  ListItem,
  Container,
} from "@material-ui/core";
import { number } from "yup";

const CustomHandle = ({
  onlyHandleDraggable = true,
  img1,
  img2,
  style,
  ...props
}) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <ReactCompareSlider
        {...props}
        onlyHandleDraggable={onlyHandleDraggable}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background: "white",
              border: 0,
              color: "#333",
            }}
          />
        }
        itemOne={<ReactCompareSliderImage src={img2} style={{}} alt="one" />}
        itemTwo={<ReactCompareSliderImage src={img1} alt="two" />}
        onPositionChange={handlePositionChange}
        style={{ display: "flex", width: "100%", height: "50vh", ...style }}
      />
    </div>
  );
};

export default function Digital_sign(props) {
  const custom_file_upload_url = `http://localhost:3000/deliveryman/addsign`;
  const handleSubmitFile = (values) => {};

  const [imageURL, setImageURL] = useState(null);
  const [imageURL1, setImageURL1] = useState(null);
  const [sig, setsig] = useState([]);
  const getsign = async () => {
    try {
      const userPosts = await axios.get(
        "http://localhost:3000/deliveryman/checksign/" + props.idc
      );

      setsig(userPosts.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getsign();

    const interval = setInterval(() => {
      getsign();
    }, 2000000);

    return () => clearInterval(interval);
  }, []);
  var image0 = "";
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Canvas = (props) => <canvas {...props} />;
  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();
  const setit = (data) => setImageURL1(data);

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    axios({
      method: "post",
      url: custom_file_upload_url,
      data: {
        img: sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"),
        client: props.idc,
      },
    });
  };
  return (
    <Fragment>
      <Card className="card-box mb-4 p-3 text-center">
        <div className="my-3">
          <h6 className="font-weight-bold font-size-lg mb-1 text-black">
            Digtal signiture authentification{" "}
          </h6>
          <p className="text-black-50 mb-0">
            The costomer myst sign before the dropby.
          </p>
          <button onClick={console.log("ahwaaaaaaaa" + props.idc)}>show</button>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <h1>Signature Pad Example</h1>
          <Popup
            modal
            trigger={<button>Open Signature Pad</button>}
            closeOnDocumentClick={false}
          >
            {(close) => (
              <>
                <SignaturePad
                  ref={sigCanvas}
                  canvasProps={{
                    className: "signatureCanvas",
                  }}
                />
                {/* Button to trigger save canvas image */}

                <button type="submit" onClick={save}>
                  Save
                </button>
                <button onClick={clear}>Clear</button>
                <button onClick={close}>Close</button>
              </>
            )}
          </Popup>
          <div class="header-spacer header-spacer-small mb-3"></div>
          <div class="header-spacer header-spacer-small mb-3"></div>
          <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="container">
              <div className="row">
                {sig &&
                  sig.map((dm, index) => (
                    <img
                      key={index}
                      src={dm.img}
                      onClick={() => setit(dm.img)}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        border: "1px solid black",
                        height: "150px",
                        width: "150px",
                      }}
                      alt="img"
                    ></img>
                  ))}
              </div>
            </div>
          </div>

          {imageURL ? (
            <img
              src={imageURL}
              alt="my signature"
              style={{
                display: "block",
                margin: "0 auto",
                border: "1px solid black",
                width: "150px",
              }}
            />
          ) : null}
          {imageURL1 ? (
            <div style={{ width: 700, height: 450 }}>
              <br></br>
              <ImageSlider
                image1={imageURL}
                image2={imageURL1}
                sliderWidth={3}
                sliderColor="red"
                handleColor="red"
                handleBackgroundColor="white"
              />
            </div>
          ) : null}
          {imageURL1 ? (
            <div style={{ width: 350, height: 350 }}>
              <br></br>
              <ReactCompareSlider
                itemTwo={
                  <ReactCompareSliderImage src={imageURL1} alt="Image one" />
                }
                itemOne={
                  <ReactCompareSliderImage
                    style={{
                      position: "absolute",
                      backgroundColor: "#E74C3C",
                      zIndex: "100",
                      opacity: "0.8",
                    }}
                    src={imageURL}
                    alt="Image two"
                  />
                }
              />
            </div>
          ) : null}
        </div>
        <br></br>
        <br></br>
        <br></br>
      </Card>
    </Fragment>
  );
}
