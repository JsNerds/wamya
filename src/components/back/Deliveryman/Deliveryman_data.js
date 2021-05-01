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
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router";

export default function Deliveryman_data(props) {
  const history = useHistory();

  const Updatemille = (id) => {
    history.push("/Updatemille/" + id);
  };
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <img alt="..." className="card-img-top" src={props.dm.pdp} />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                {props.dm.Fullname}
              </h5>
              <p className="card-text">
                <strong>Username : </strong> {props.dm.Username}{" "}
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
                <strong>Address : </strong> {props.dm.Address}
              </p>
              <p className="card-text">
                <strong>Gender : </strong> {props.dm.Gender}
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
                  <img
                    alt="..."
                    className="card-img-top"
                    src={
                      process.env.REACT_APP_API_URL_UPLOADS + "/" + props.dm.img
                    }
                  />
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
                      value={props.mile?.map((ds, index) => ds.delivs)}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Number of Deliveries
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50"></small>
                      {props.mile?.map((ds, index) => ds.delivs)}
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
                      value={props.mile?.map((ds, index) => ds.profit)}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Profit
                    </small>
                    <b className="font-size-lg text-info">
                      {props.mile?.map((ds, index) => ds.profit)}
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
                      {props.mile?.map((ds, index) => ds.delivs)}
                    </b>

                    <ReactStars
                      count={5}
                      edit={false}
                      isHalf={true}
                      value={parseInt(
                        props.mile?.map((ds, index) => ds.rating)
                      )}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light text-center">
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  Updatemille(props.mile?.map((ds, index) => ds._id))
                }
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["far", "question-circle"]} />
                </span>
                <span className="btn-wrapper--label">Update</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
