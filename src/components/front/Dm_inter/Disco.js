import React, { Fragment, useState, useEffect } from "react";

import {
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  LinearProgress,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router";
import { queryServerApi } from "../../../utils/queryServerApi";

const CustomerInterfaceBody = (props) => {
  const history = useHistory();
  const a = 2;
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
    history.go(0);
  };
  useEffect(() => {
    console.log(props.dm);
  }, [props.dm]);

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={10} sm={6} md={4} lg={6}>
          <Card className="mb-4">
            <img
              alt="..."
              className="card-img-top"
              src={process.env.REACT_APP_API_URL_UPLOADS + "/" + props.dm.img}
            />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                {props.dm.FullName} {props.dm.FullName}
              </h5>
              <p className="card-text">
                <strong>Username : </strong> {props.dm.Username}
              </p>
              <p className="card-text">
                <strong>Email : </strong> {props.dm.Email}
              </p>
              <p className="card-text">
                <strong>Phone Number : </strong> {props.dm.Phone}
              </p>
              <p className="card-text">
                <strong>Address : </strong> <br />
                {props.dm.address} <br />
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default CustomerInterfaceBody;
