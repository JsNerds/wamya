import React, { Fragment } from "react";

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

export default function Deliveryman_data(props) {
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
              </p>
              <p className="card-text">
                <strong>Email : </strong> {props.dm.Email}
              </p>
              <p className="card-text">
                <strong>Phone Number : </strong> {props.dm.Phone}
              </p>
              <p className="card-text">
                <strong>Address : </strong> <br />
                Address : {props.dm.Adress} <br />
              </p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Customer Analytics</b>
              </div>
              <div className="card-header--actions">
                <div className="badge badge-warning">Pending</div>
              </div>
            </div>
            <List>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value="55"
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Number of Payments
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50"></small>
                      55
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
                      value={55 / 10}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals Amounts
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">TND</small>
                      test
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={29}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50 pr-1">$</small>
                      8,493
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={38}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">$</small>
                      2,594
                    </b>
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light text-center">
              <Button variant="contained" color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["far", "question-circle"]} />
                </span>
                <span className="btn-wrapper--label">Generate reports</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
