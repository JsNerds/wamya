import React, { useCallback, Fragment, useState, useRef } from "react";
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
import ReactCompareImage from "react-compare-image";
import "./App.css";
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
  List,
  ListItem,
} from "@material-ui/core";
import { number } from "yup";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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

export default function Digital_sign() {
  const custom_file_upload_url = `http://localhost:3000/deliveryman/addsign`;
  const handleSubmitFile = (values) => {};

  const [imageURL, setImageURL] = useState(null);
  const [imageURL1, setImageURL1] = useState(null);

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
      },
    });
    axios.get("http://localhost:3000/deliveryman/getsig").then((resp) => {
      console.log(resp.data);
      //  image0 = resp.data[length].img;

      Object.size = function(obj) {
        var size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
      };

      console.log(
        resp.data[Object.keys(resp.data)[Object.keys(resp.data).length - 1]].img
      );
      image0 =
        resp.data[Object.keys(resp.data)[Object.keys(resp.data).length - 1]]
          .img;

      setImageURL1(
        resp.data[Object.keys(resp.data)[Object.keys(resp.data).length - 1]].img
      );
    });

    function hexToRGB(hexStr) {
      var col = {};
      col.r = parseInt(hexStr.substr(1, 2), 16);
      col.g = parseInt(hexStr.substr(3, 2), 16);
      col.b = parseInt(hexStr.substr(5, 2), 16);
      return col;
    }
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
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
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
          <br />
          <br />
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
          {imageURL ? (
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

          {imageURL ? (
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
