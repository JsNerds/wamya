import React, {Fragment, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Grid, Card, CardContent, Button, Divider, LinearProgress, List,ListItem} from '@material-ui/core';

import Chart from 'react-apexcharts';
import {useHistory} from "react-router-dom";
export default function EntrepriseStats(props) {

    const history = useHistory();

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


    const UpgradeSubscription = () => {
        history.push("/Pricing/"+props.company._id);
    }


    const chart31Options = {
        chart: {
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#f4772e'],
        stroke: {
            color: '#4191ff',
            curve: 'smooth',
            width: 3
        },
        xaxis: {
            crosshairs: {
                width: 1
            }
        },
        yaxis: {
            min: 0
        },
        legend: {
            show: false
        }
    };
    const chart31Data = [
        {
            name: 'Deliveries',
            data: [0,props.company.deliveries.length]
        }
    ];


    const options = {
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        xaxis: {
            categories: ['Payments', 'Deliveries', 'Packages']
        }
    };
    const series = [
        {
            data: [props.company?.payments?.length, props.company?.deliveries?.length, props.company?.deliveries?.length]
        }
    ];

    return (
        <Fragment>
            <Grid container spacing={4}>

                <Grid item xs={12} sm={7} md={5}>
                    <br/>
                    { (new Date().getMonth() !== new Date(props.company.SubscriptionExpirationDate).getMonth()) || (new Date().getFullYear() !== new Date(props.company.SubscriptionExpirationDate).getFullYear()) ? (
                    <Card className="card-box bg-midnight-bloom text-light mb-4">
                        <CardContent className="p-3">
                            <div className="d-flex align-items-start">
                                <div className="font-weight-bold">
                                    <small className="text-white-50 d-block mb-1 text-uppercase">
                                        Subscription Expiration Date :
                                    </small>
                                    <span>{props.company.SubscriptionExpirationDate.toString().substr(0,10)}</span>
                                    <br/>
                                    <button className="btn-primary" onClick={UpgradeSubscription}>Upgrade your subscription</button>
                                </div>

                                <div className="ml-auto">
                                    <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon
                                            icon={['far', 'id-card']}
                                            className="font-size-xl"
                                        />
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>)
                        :(
                            <Card className="card-box bg-danger text-light mb-4">
                                <CardContent className="p-3">
                                    <div className="d-flex align-items-start">
                                        <div className="font-weight-bold">
                                            <small className="text-light d-block mb-1 text-uppercase">
                                                You subscription will expire this month Please Upgrade it :
                                            </small>
                                            <span>{props.company.SubscriptionExpirationDate.toString().substr(0,10)}</span>
                                            <br/>
                                            <button className="btn-warning" onClick={UpgradeSubscription}>Upgrade your subscription</button>
                                        </div>

                                        <div className="ml-auto">
                                            <div className="bg-white text-center text-danger d-50 rounded-circle d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon
                                                    icon={['far', 'id-card']}
                                                    className="font-size-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </CardContent>
                            </Card>
                        ) }
                </Grid>


                <Grid item xs={12} sm={6} md={7}>
                            <Chart options={options} series={series} type="bar" />
                </Grid>



            </Grid>


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
                                            {finishedDeliv(props.company.deliveries)}
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
                                    <div className="ml-auto">{(finishedDeliv(props.company.deliveries) * props.company.deliveries.length) / 100} %</div>
                                </div>
                            </ListItem>
                            <ListItem className="py-2 d-block">
                                <div className="align-box-row mb-1">
                                    <div>
                                        <div className="font-weight-bold">Total Payments </div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="font-size-xl font-weight-bold text-info">
                                            {total(props.company.payments)} TND
                                        </div>
                                    </div>
                                </div>
                                <LinearProgress
                                    variant="determinate"
                                    color="primary"
                                    value={total(props.company.payments)}
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
                        <div className="card-body pb-1">
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={4}>
                                    <div className="text-center">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={['fas', 'money-check']}
                                                className="font-size-xxl text-success"
                                            />
                                        </div>
                                        <div className="mt-3 line-height-sm">
                                            <b className="font-size-lg">{props.company.payments.length} </b>
                                            <span className="text-black-50 d-block">Payments</span>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className="text-center">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={['fas', 'share']}
                                                className="font-size-xxl text-danger"
                                            />
                                        </div>
                                        <div className="mt-3 line-height-sm">
                                            <b className="font-size-lg">{props.company.deliveries.length}</b>
                                            <span className="text-black-50 d-block">Deliveries</span>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className="text-center">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={['fas', 'box']}
                                                className="font-size-xxl text-info"
                                            />
                                        </div>
                                        <div className="mt-3 line-height-sm">
                                            <b className="font-size-lg">{props.company.deliveries.length}</b>
                                            <span className="text-black-50 d-block">Packages</span>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="pt-4 pr-4 pl-4">
                                <Chart
                                    options={chart31Options}
                                    series={chart31Data}
                                    type="line"
                                    height={100}
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className="my-2 text-center">
                            <FontAwesomeIcon
                                icon={['fas', 'arrow-up']}
                                className="text-danger"
                            />
                            <span className="text-danger px-1">15.4%</span>
                            <span className="text-black-50">new sales today</span>
                        </div>
                        <div className="card-footer bg-light p-4 text-center">
                            <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </span>
                                <span className="btn-wrapper--label">View latest sales</span>
                            </Button>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    );
}
