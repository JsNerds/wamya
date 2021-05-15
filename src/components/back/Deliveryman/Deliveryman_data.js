import React, { Fragment, useState } from "react";

import {
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  LinearProgress,
} from "@material-ui/core";
import { queryServerApi } from "../../../utils/queryServerApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router";

export default function Deliveryman_data(props) {
  const history = useHistory();
  console.log("dm + " + props.dm);
  console.log("mile +" + props.mile);
  const firstExample = {
    size: 30,
    value: props.mile["rating"],
    edit: false,
  };
  console.log(firstExample);

  const makewheel = async (id) => {
    const [res2, err2] = await queryServerApi(
      "deliveryman/makewheel/" + id,
      null,
      "GET",
      false
    );
    history.go(0);
  };

  const Updatemille = (id) => {
    history.push("/Updatemille/" + id);
  };
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <img
              alt="..."
              className="card-img-top"
              src={process.env.REACT_APP_API_URL_UPLOADS + "/" + props.dm.img}
            />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                {props.dm.Fullname}
              </h5>
              <p className="card-text">
                <strong>Username : </strong> {props.dm.Username}
                {console.log(props.mile)}
                {console.log(props.dm)}
              </p>
              <p className="card-text">
                <strong>Email : </strong> {props.dm.Email}
              </p>
              <p className="card-text">
                <strong>Phone Number : </strong> {props.dm.Phone}
              </p>
              <p className="card-text">
                <strong>Address : </strong> {props.dm.address}
              </p>
              <p className="card-text">
                <strong>Gender : </strong> {props.dm.Gender}
              </p>
              <p className="card-text">
                <strong>Date of birth : </strong>
                {props.dm.Date_birth.substring(0, 10)}
              </p>
              <p className="card-text">
                <strong>Joined the : </strong>
                {props.dm.createdAt.substring(0, 10)} at
                {props.dm.createdAt.substring(11, 16)}
              </p>
              <p className="card-text">
                <strong>Last update : </strong>
                {props.dm.updatedAt.substring(0, 10)} at
                {props.dm.updatedAt.substring(11, 16)}
              </p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Grid item xs={16} lg={12}>
            <Card className="card-box mb-4">
              <div className="card-header">
                <div className="card-header--title">
                  <b>Licence</b>
                </div>
              </div>
              <List>
                <ListItem className="d-block">
                  <img alt="..." className="card-img-top" src={props.dm.pdp} />
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Milestones</b>
              </div>
              <div className="card-header--actions">
                <div className="badge badge-warning">
                  Resently {props.mile["stage"]}{" "}
                </div>
              </div>
            </div>
            <List>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={props.mile["delivs"]}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Number of Deliveries
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50"></small>
                      {props.mile["delivs"]}
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={props.mile["profit"]}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Profit
                    </small>
                    <b className="font-size-lg text-info">
                      {props.mile["profit"]}
                      <small className="text-black-50 pr-1">TND</small>
                    </b>
                  </div>
                </div>
              </ListItem>

              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">Rating</small>
                      {props.mile.rating}
                    </b>
                    <ReactStars {...firstExample} />
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light text-center">
              {props.mile.badges === "0" && (
                <Button
                  size="small"
                  variant="contained"
                  className="mr-3"
                  color="primary"
                  onClick={() => makewheel(props.mile["_id"])}
                >
                  Release Wheel of prices
                </Button>
              )}
              <Button
                size="small"
                variant="contained"
                className="mr-3"
                color="secondary"
                onClick={() => Updatemille(props.mile["_id"])}
              >
                Update
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
