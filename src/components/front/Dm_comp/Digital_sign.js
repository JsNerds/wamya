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
import stock from "../../../assets/images/stock-photos/stock-3.jpg";
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
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <h1>Signature Pad Example</h1>
          <Popup
            modal
            trigger={
              <Button color="primary" variant="contained">
                Open Signature Pad
              </Button>
            }
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

                <Button
                  color="secondary"
                  variant="contained"
                  type="submit"
                  onClick={save}
                >
                  Save
                </Button>
                <Button color="secondary" variant="contained" onClick={clear}>
                  Clear
                </Button>
                <Button color="secondary" variant="contained" onClick={close}>
                  Close
                </Button>
              </>
            )}
          </Popup>
          <div class="header-spacer header-spacer-small mb-3"></div>
          <div class="header-spacer header-spacer-small mb-3"></div>

          {sig?.length !== 0 && <h1>there is not old signature</h1>}

          <Fragment>
            <Grid container spacing={4}>
              {sig &&
                sig.map((dm, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <Card className="mb-4">
                      <img alt="..." className="card-img-top" src={dm.img} />
                      <CardContent className="p-3">
                        <h5 className="card-title font-weight-bold font-size-lg">
                          {dm.createdAt.substring(0, 10)}
                        </h5>

                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => setit(dm.img)}
                        >
                          preview
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Fragment>

          {imageURL ? (
            <Grid item xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <img alt="..." className="card-img-top" src={imageURL} />
                <CardContent className="p-3">
                  <h5 className="card-title font-weight-bold font-size-lg">
                    Just now
                  </h5>
                </CardContent>
              </Card>
            </Grid>
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
