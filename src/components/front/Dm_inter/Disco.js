import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import {
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  LinearProgress,
} from "@material-ui/core";
import "./style.css";

import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router";
import { queryServerApi } from "../../../utils/queryServerApi";
import { useServerApi } from "../../../hooks/useServerApi";
import axios from "axios";
import Degital_sign from "../Dm_comp/Digital_sign";

const CustomerInterfaceBody = (props) => {
  const [a, seta] = React.useState(props.dm.Status);

  const [delivs, setdelivs] = React.useState(props.delivs);

  const history = useHistory();

  const [dlc, setdlc] = useState([]);
  const [dlk, setdlk] = useState([]);
  const [dll, setdll] = useState([]);

  const getthemall = async () => {
    try {
      const userPosts = await axios.get(
        "https://wamya-backend.herokuapp.com/delivery/delivsongo/" +
          localStorage.getItem("id")
      );
      if (userPosts.data.length !== 0) {
        setdlc(userPosts.data[0]);
      } // set State
      else setdlc(0);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getstate2 = async () => {
    try {
      const userPosts = await axios.get(
        "https://wamya-backend.herokuapp.com/delivery/delivstatesecond/" +
          localStorage.getItem("id")
      );
      if (userPosts.data.length !== 0) {
        setdlk(userPosts.data[0]);
      } else setdlk(0);
      // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  const getstate3 = async () => {
    try {
      const userPosts = await axios.get(
        "https://wamya-backend.herokuapp.com/delivery/delivstatethird/" +
          localStorage.getItem("id")
      );
      if (userPosts.data.length !== 0) {
        setdll(userPosts.data[0]);
      } else setdll(0);
      // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getthemall();
    getstate2();
    getstate3();
    const interval = setInterval(() => {
      getthemall();
      getstate2();
      getstate3();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const Accpetd = async (id) => {
    const [res, err] = await queryServerApi(
      "delivery/acceptdelivery/" + id,
      null,
      "PUT",
      false
    );
    const [res1, err1] = await queryServerApi(
      "deliveryman/accept/" + props.dm._id,
      null,
      "PUT",
      false
    );
  };

  const confirmdrop = async (id) => {
    const [res, err] = await queryServerApi(
      "delivery/confirmdrop/" + id,
      null,
      "PUT",
      false
    );
    const [res1, err1] = await queryServerApi(
      "deliveryman/fourthstate/" + props.dm._id,
      null,
      "PUT",
      false
    );
  };

  function online() {
    seta(3);
    Dispo(props.dm._id);
  }
  function offline() {
    seta(2);
    nonDispo(props.dm._id);
  }
  const Updatemille = (id) => {
    history.go(0);
  };
  const Dispo = async (id) => {
    const [res, err] = await queryServerApi(
      "deliveryman/dispo/" + id,
      null,
      "PUT",
      false
    );
  };
  const nonDispo = async (id) => {
    const [res, err] = await queryServerApi(
      "deliveryman/nondispo/" + id,
      null,
      "PUT",
      false
    );
  };
  useEffect(() => {}, [props.dm]);

  return (
    <Fragment>
      <Grid container spacing={4}>
        {props.dm.Status === 3 && props.delivs?.length !== 0 && (
          <Grid item xs={12} md={6} lg={6}>
            <Card className="card-box mb-4">
              <div className="card-header">
                <div className="card-header--title">
                  <b>Detailed informations</b>
                  <div className="d-block text-capitalize mt-1 font-size-sm"></div>
                </div>
              </div>
              <List>
                <ListItem className="py-2 d-block">
                  {props.delivs.map((dlv, index) => (
                    <Card
                      key={index}
                      className="card-box mb-4 bg-premium-dark border-0 text-light"
                    >
                      <CardContent className="p-3">
                        <div className="align-box-row align-items-start">
                          <div className="font-weight-bold">
                            <small className="text-white-50 d-block mb-1 text-uppercase">
                              distance : {dlv.distance} km
                              {""} duration {dlv.duration} minute
                            </small>
                            <span className="font-size-xxl mt-1">From</span>
                            <small className="text-white-50 d-block mb-1 text-uppercase">
                              {dlv.sourceAddress.City} {dlv.sourceAddress.State}
                            </small>

                            <span className="font-size-xxl mt-1">To</span>
                            <small className="text-white-50 d-block mb-1 text-uppercase">
                              {dlv.destinationAddress[0].City}{" "}
                              {dlv.destinationAddress[0].State}
                            </small>
                          </div>
                          <div className="ml-auto">
                            <a
                              className="clicable"
                              onClick={() => Accpetd(dlv._id)}
                            >
                              <div className="ml-auto">
                                <div className="bg-white text-center text-success font-size-xl d-50 d-flex align-items-center justify-content-center rounded-circle">
                                  <AddCircleTwoToneIcon />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="mt-3">
                          <FontAwesomeIcon
                            icon={["fas", "dollar"]}
                            className="text-success"
                          />

                          <span className="text-success px-1">
                            {(dlv.distance * 0.7) / 1000}{" "}
                          </span>
                          <span className="text-white-50">Dinar</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </ListItem>
              </List>
            </Card>
          </Grid>
        )}

        {props.dm.Status === 3 && props.delivs?.length === 0 && (
          <Grid item xs={12} md={6} lg={6}>
            <Card className="card-box mb-4">
              <div className="card-header">
                <div className="card-header--title">
                  <b>Detailed informations</b>
                  <div className="d-block text-capitalize mt-1 font-size-sm"></div>
                </div>
              </div>
              <List>
                <ListItem className="py-2 d-block">
                  <Card className="card-box bg-love-kiss text-light mb-4">
                    <CardContent className="p-3">
                      <div className="align-box-row align-items-start">
                        <div className="font-weight-bold">
                          <small className="text-white-50 d-block mb-1 text-uppercase">
                            You have no deliveries yet{" "}
                          </small>
                          <span className="font-size-xxl mt-1">
                            waiting for some deliveries
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ListItem>
              </List>
            </Card>
          </Grid>
        )}

        {props.dm.Status === 2 && (
          <Card className="card-box bg-love-kiss text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Notification :
                  </small>
                  <span>You need to be online to accepet new Deliveries</span>
                  <br />
                  <button className="btn-primary" onClick={() => online()}>
                    Get online
                  </button>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={["fa", "power-off"]}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {props.dm.Status === 1 && (
          <Card className="card-box bg-love-kiss text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Notification :
                  </small>
                  <span>Your account is not activated or approved yet</span>
                  <br />
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={["fa", "power-off"]}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {props.dm.Status === 4 && dlc.state === 1 && (
          <Grid item xs={15} lg={6}>
            <Card className="card-box mb-4">
              <div className="card-header">
                <div className="card-header--title">
                  <b>Detailed informations</b>
                  <div className="d-block text-capitalize mt-1 font-size-sm"></div>
                </div>
              </div>
              <List>
                <ListItem className="py-2 d-block">
                  <Card className="card-box bg-midnight-bloom text-light mb-4">
                    <CardContent className="p-3">
                      <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                          <span>
                            waiting for the customer to confirm the package
                            transfer
                          </span>
                          <br />
                          <LinearProgress
                            className="progress-animated-alt"
                            color="primary"
                            value={34}
                          />
                        </div>

                        <div className="ml-auto">
                          <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon
                              icon={["fa", "box"]}
                              className="font-size-xl"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ListItem>
              </List>
            </Card>
          </Grid>
        )}
        {props.dm.Status === 4 && dlk.state === 2 && (
          <Grid item xs={15} lg={6}>
            <Card className="card-box mb-4">
              <div className="card-header">
                <div className="card-header--title">
                  <b>Detailed informations</b>
                  <div className="d-block text-capitalize mt-1 font-size-sm"></div>
                </div>
              </div>
              <List>
                <ListItem className="py-2 d-block">
                  <Card className="card-box bg-midnight-bloom text-light mb-4">
                    <CardContent className="p-3">
                      <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                          <span>
                            The customer confirmed the package transfer now your
                            turn you to confirm the transfer confirm it
                          </span>
                          <br />
                          <LinearProgress
                            className="progress-animated-alt"
                            color="primary"
                            value={34}
                          />
                          <button
                            className="btn-primary"
                            onClick={() => confirmdrop(dlk._id)}
                          >
                            Confirm transfer
                          </button>
                        </div>

                        <div className="ml-auto">
                          <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon
                              icon={["fa", "box"]}
                              className="font-size-xl"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ListItem>
              </List>
            </Card>
          </Grid>
        )}
        {props.dm.Status <= 4 &&
          props.dm.Status !== 2 &&
          props.dm.Status !== 1 && (
            <Grid item xs={15} lg={6}>
              <Card className="card-box mb-4">
                <div className="card-header">
                  <div className="card-header--title">
                    <b>Detailed informations</b>
                    <div className="d-block text-capitalize mt-1 font-size-sm"></div>
                  </div>
                </div>
                <List>
                  <ListItem className="py-2 d-block">
                    <Card className="card-box bg-plum-plate text-light mb-4">
                      <CardContent className="p-3">
                        <div className="d-flex align-items-start">
                          <div className="font-weight-bold">
                            <small className="text-white-50 d-block mb-1 text-uppercase">
                              Notification
                            </small>
                            <span className="font-size-xxl mt-1">
                              You are online
                            </span>
                            <button
                              className="btn-primary"
                              onClick={() => offline()}
                            >
                              Get offline
                            </button>
                          </div>
                          <div className="ml-auto">
                            <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                              <FontAwesomeIcon
                                icon={["fa", "check-circle"]}
                                className="font-size-xl"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="align-box-row mb-1">
                      <div>
                        <div className="font-weight-bold">
                          Finished deliveries
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="font-size-xl font-weight-bold text-success"></div>
                      </div>
                    </div>
                    <LinearProgress
                      className="progress-animated-alt"
                      color="primary"
                      value={34}
                    />
                  </ListItem>
                </List>
                <div className="card-footer bg-light p-4 text-center">
                  <Button color="primary" variant="contained">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["far", "question-circle"]} />
                    </span>
                    <span className="btn-wrapper--label">View details</span>
                  </Button>
                </div>
              </Card>
            </Grid>
          )}

        {props.dm.Status === 5 && dll.state === 3 && (
          <Degital_sign
            idc={dll.customer}
            idel={dll._id}
            mile={props.mile}
            profit={((dll.distance * 0.7) / 1000) * 0.5}
          />
        )}
      </Grid>
    </Fragment>
  );
};
export default CustomerInterfaceBody;
