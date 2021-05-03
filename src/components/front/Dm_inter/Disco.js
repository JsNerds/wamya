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

import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router";
import { queryServerApi } from "../../../utils/queryServerApi";

const CustomerInterfaceBody = (props) => {
  const [a, seta] = React.useState(props.dm.Status);

  const history = useHistory();

  console.log("aaaaaaaaaaa" + a);
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
  useEffect(() => {
    console.log(props.dm);
  }, [props.dm]);

  return (
    <Fragment>
      <Grid container spacing={4}>
        {a === 3 && (
          <Grid item xs={12} md={6} lg={6}>
            <Card className="card-box mb-4 bg-premium-dark border-0 text-light">
              <CardContent className="p-3">
                <div className="align-box-row align-items-start">
                  <div className="font-weight-bold">
                    <small className="text-white-50 d-block mb-1 text-uppercase">
                      New Accounts
                    </small>
                    <span className="font-size-xxl mt-1">586,356</span>
                  </div>
                  <a className="ml-auto" href="#">
                    <div className="ml-auto">
                      <div className="bg-white text-center text-success font-size-xl d-50 d-flex align-items-center justify-content-center rounded-circle">
                        <AddCircleTwoToneIcon />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mt-3">
                  <FontAwesomeIcon
                    icon={["fas", "arrow-up"]}
                    className="text-success"
                  />

                  <span className="text-success px-1">15.4%</span>
                  <span className="text-white-50">increase this month</span>
                </div>
              </CardContent>
            </Card>
          </Grid>
        )}
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
                {a === 2 && (
                  <Card className="card-box bg-love-kiss text-light mb-4">
                    <CardContent className="p-3">
                      <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                          <small className="text-white-50 d-block mb-1 text-uppercase">
                            Notification :
                          </small>
                          <span>
                            You need to be online to accepet new Deliveries
                          </span>
                          <br />
                          <button
                            className="btn-primary"
                            onClick={() => online()}
                          >
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

                {a === 1 && (
                  <Card className="card-box bg-plum-plate text-light mb-4">
                    <CardContent className="p-3">
                      <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                          <small className="text-white-50 d-block mb-1 text-uppercase">
                            Notification
                          </small>
                          <span className="font-size-xxl mt-1">
                            you don't have any delivery yet{" "}
                          </span>
                        </div>
                        <div className="ml-auto">
                          <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon
                              icon={["far", ""]}
                              className="font-size-xl"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {a === 3 && (
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
                )}

                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Finished deliveries</div>
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
      </Grid>
    </Fragment>
  );
};
export default CustomerInterfaceBody;
