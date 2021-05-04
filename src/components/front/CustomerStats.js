import React, {Fragment, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Grid,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem,
  CardContent,
} from "@material-ui/core";
import { queryServerApi } from "../../utils/queryServerApi";
import { useHistory } from "react-router-dom";

export default function CustomerStats(props) {
  const history = useHistory();

  function total(payments) {
    return payments.reduce(function(total, item) {
      console.log("amount", payments[0]);
      total += item?.Amount / 100;

      return total;
    }, 0);
  }

  function finishedDeliv(deliveries) {
    return deliveries.reduce(function(nb, item) {
      if (item.state === 3) {
        nb += 1;
      }

      return nb;
    }, 0);
  }

  function notConfirmedDeliv(deliveries) {
    return deliveries.reduce(function(nb, item) {
      if (item.state === 1) {
        return item;
      }

      return null;
    }, 0);
  }

  function ConfirmedDeliv(deliveries) {
    return deliveries.reduce(function(nb, item) {
      if (item.state === 2) {
        return item;
      }

      return null;
    }, 0);
  }

  const confirmDelivery = async (id) => {
    const [res, err] = await queryServerApi(
      "delivery/confirmDeliveryCustomer/" + id,
      null,
      "PUT",
      false
    );
    history.go(0);
  };

  useEffect(async  ()=>{
    if(props.customer.deliveries.length === 3){
      const [user, err] = await queryServerApi("customers/reduction/"+props.customer._id, null, "PUT", false);
    }
    else if (props.customer.deliveries.length >= 4){
      const [user, err] = await queryServerApi("customers/reductionDes/"+props.customer._id, null, "PUT", false);
    }
  })

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={10} sm={6} md={4} lg={6}>
          <Card className="mb-4">
            <img
              alt="..."
              className="card-img-top"
              src={
                process.env.REACT_APP_API_URL_UPLOADS + "/" + props.customer.img
              }
            />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                {props.customer.FirstName} {props.customer.LastName}
              </h5>
              <p className="card-text">
                <strong>Username : </strong> {props.customer.UserName}
              </p>
              <p className="card-text">
                <strong>Email : </strong> {props.customer.Email}
              </p>
              <p className="card-text">
                <strong>Phone Number : </strong> {props.customer.PhoneNumber}
              </p>
              <p className="card-text">
                <strong>Address : </strong> <br />
                Street : {props.customer.Adress.Street} <br />
                City : {props.customer.Adress.City} <br />
                ZipCode : {props.customer.Adress.ZipCode} <br />
              </p>
            </CardContent>
          </Card>
        </Grid>

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
                {notConfirmedDeliv(props.customer.deliveries) != null &&
                props.customer.deliveries.length != 0 ? (
                  <Card className="card-box bg-midnight-bloom text-light mb-4">
                    <CardContent className="p-3">
                      <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                          <small className="text-white-50 d-block mb-1 text-uppercase">
                            Notification :
                          </small>
                          <span>
                            You need to confirm that the driver get your package
                          </span>
                          <br />
                          <button
                            className="btn-primary"
                            onClick={() =>
                              confirmDelivery(
                                notConfirmedDeliv(props.customer.deliveries)._id
                              )
                            }
                          >
                            Confirm Delivery
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
                ) : props.customer.deliveries.length === 0 ? (
                  <Card className="card-box bg-plum-plate text-light mb-4">
                    <CardContent className="p-3">
                      <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                          <small className="text-white-50 d-block mb-1 text-uppercase">
                            Notification
                          </small>
                          <span className="font-size-xxl mt-1">
                            you don't have any delivery yet
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
                ) : ConfirmedDeliv(props.customer.deliveries) != null && (
                  <Card className="card-box bg-plum-plate text-light mb-4">
                    <CardContent className="p-3">
                      <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                          <small className="text-white-50 d-block mb-1 text-uppercase">
                            Notification
                          </small>
                          <span className="font-size-xxl mt-1">
                            All deliveries are confirmed
                          </span>
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
                )
                }


                { props.customer.deliveries.length >= 3 ? (
                    <Card className="card-box bg-premium-dark border-0 text-light mb-4">
                      <CardContent className="p-3">
                        <div className="d-flex align-items-start">
                          <div className="font-weight-bold">
                            <small className="text-white-50 d-block mb-1 text-uppercase">
                              Notification
                            </small>
                            <span className="font-size-xxl mt-1">Congrats!<br/>
                            you achieve to pass more than 3 deliveries , you have a 40% of reduction for your next delivery</span>
                          </div>
                          <div className="ml-auto">
                            <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                              <FontAwesomeIcon
                                  icon={['fas', 'boxes']}
                                  className="font-size-xl"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <FontAwesomeIcon
                              icon={['fas', 'arrow-up']}
                              className="text-success mr-1"
                          />
                          <span className="text-success pr-1">{props.customer.deliveries.length}</span>
                          <span className="text-white-50">increase this month</span>
                        </div>
                      </CardContent>
                    </Card>
                ) : (
                    <Card className="card-box bg-premium-dark border-0 text-light mb-4">
                      <CardContent className="p-3">
                        <div className="d-flex align-items-start">
                          <div className="font-weight-bold">
                            <small className="text-white-50 d-block mb-1 text-uppercase">
                              Notification
                            </small>
                            <span className="font-size-xxl mt-1">You have to pass antoher {3 - (props.customer.deliveries.length)} deliveries to get a 40% for the 4th one</span>
                          </div>
                          <div className="ml-auto">
                            <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                              <FontAwesomeIcon
                                  icon={['fas', 'boxes']}
                                  className="font-size-xl"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <FontAwesomeIcon
                              icon={['fas', 'arrow-up']}
                              className="text-success mr-1"
                          />
                          <span className="text-success pr-1">{props.customer.deliveries.length}</span>
                          <span className="text-white-50">increase this month</span>
                        </div>
                      </CardContent>
                    </Card>
                )
                }

                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Finished deliveries</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-success">
                      {finishedDeliv(props.customer.deliveries)}
                    </div>
                  </div>
                </div>
                <LinearProgress
                  className="progress-animated-alt"
                  color="primary"
                  value={34}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">
                    {(finishedDeliv(props.customer.deliveries) *
                      props.customer.deliveries.length) /
                      100}{" "}
                    %
                  </div>
                </div>
              </ListItem>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Total Payments </div>
                  </div>
                  <div className="ml-auto">
                    {total(props.customer.payments) === 0 ? (
                      <div className="font-size-xl font-weight-bold text-success">
                        {total(props.customer.payments)} TND
                      </div>
                    ) : (
                      <div className="font-size-xl font-weight-bold text-danger">
                        <small> - </small>
                        {total(props.customer.payments)} TND
                      </div>
                    )}
                  </div>
                </div>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={total(props.customer.payments)}
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




        <Grid item xs={12} lg={12}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Customer Analytics</b>
              </div>
            </div>
            <List>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={props.customer.payments.length}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Number of Payments
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50"></small>
                      {props.customer.payments.length}
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
                      value={total(props.customer.payments) / 10}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals Amounts
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">TND</small>
                      {total(props.customer.payments)}
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
                      value={props.customer.deliveries.length}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Number of Deliveries
                    </small>
                    <b className="font-size-lg text-danger">
                      {props.customer.deliveries.length}
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
