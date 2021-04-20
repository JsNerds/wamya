import React, { Fragment } from 'react';

import {Grid, Card, CardContent, Button, List, ListItem, LinearProgress} from '@material-ui/core';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function CustomersDetails(props) {

    function total(payments) {
        return payments.reduce(function (total, item){
            console.log("amount",payments[0])
            total +=  item?.Amount/100;

            return total
        },0)
    }


    return (
        <Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="mb-4">
                        <img alt="..." className="card-img-top" src={process.env.REACT_APP_API_URL_UPLOADS + "/" + props.customer.img} />
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
                                <strong>Address : </strong> <br/>
                                Street : {props.customer.Adress.Street} <br/>
                                City : {props.customer.Adress.City} <br/>
                                ZipCode : {props.customer.Adress.ZipCode} <br/>
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
                                            value={total(props.customer.payments)/10}
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
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
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
