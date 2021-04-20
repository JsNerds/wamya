import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Grid,
    LinearProgress,
    Card,
    Button,
    List,
    ListItem
} from '@material-ui/core';

export default function CustomerStats(props) {

    function total(payments) {
        return payments.reduce(function (total, item){
            console.log("amount",payments[0])
            total +=  item?.Amount/100;

            return total
        },0)
    }

    function finishedDeliv(deliveries) {
        return deliveries.reduce(function (nb, item){
            if(item.state === 0){
                nb+=1;
            }

            return nb
        },0)
    }

    return (
        <Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                    <Card className="card-box mb-4">
                        <div className="card-header">
                            <div className="card-header--title">
                                <b>Detailed informations</b>
                                <div className="d-block text-capitalize mt-1 font-size-sm">

                                </div>
                            </div>
                        </div>
                        <List>
                            <ListItem className="py-2 d-block">
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
                                    <div className="ml-auto">{(finishedDeliv(props.customer.deliveries) * props.customer.deliveries.length) / 100} %</div>
                                </div>
                            </ListItem>
                            <ListItem className="py-2 d-block">
                                <div className="align-box-row mb-1">
                                    <div>
                                        <div className="font-weight-bold">Total Payments </div>
                                    </div>
                                    <div className="ml-auto">
                                        {  total(props.customer.payments) === 0 ? (
                                            <div className="font-size-xl font-weight-bold text-success">
                                                {total(props.customer.payments)} TND
                                            </div>
                                            ):
                                            <div className="font-size-xl font-weight-bold text-danger">
                                            <small> - </small>
                                        {total(props.customer.payments)} TND
                                            </div>
                                            }

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
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </span>
                                <span className="btn-wrapper--label">View details</span>
                            </Button>
                        </div>
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
                                            <small className="text-black-50 pr-1"></small>
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
