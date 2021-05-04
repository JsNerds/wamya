import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Grid,
    IconButton,
    LinearProgress,
    Card,
    CardContent,
    Button,
    List,
    ListItem,
    Tooltip,
    Divider
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import Chart from 'react-apexcharts';

export default function CompanyDetails(props) {

    function total(payments) {
        return payments.reduce(function (total, item){
            console.log("amount",payments[0])
            total +=  item?.Amount/100;

            return total
        },0)
    }

    const chart2Options = {
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
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '70%'
            }
        },
        stroke: {
            show: true,
            color: '#f4772e',
            curve: 'smooth',
            width: 2
        },
        fill: {
            color: '#f4772e',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.3,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 100]
            }
        },
        colors: ['#f4772e'],
        legend: {
            show: false
        },
        labels: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        xaxis: {
            crosshairs: {
                width: 1
            }
        },
        yaxis: {
            min: 0
        }
    };
    const chart2Data = [
        {
            name: 'Sales',
            data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
        }
    ];
    return (
        <Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={7}>
                    <h5>{props.company.Denomination}'s Deliveries : </h5>
                    <hr/>
                    {
                        props.company.deliveries.map((delivery,index) => (
                    <Card className="card-box mb-4" key={index}>
                        <div className="card-header">
                            <div className="font-size-lg d-block text-truncate">
                                <span className="text-black-50 pr-2">{index+1}</span> From  {delivery.sourceAddress.City} , {delivery.sourceAddress.State}
                            </div>
                            <div className="ml-auto d-flex align-items-center align-content-center">
                                <Tooltip arrow title="View all participants">
                                    <IconButton color="primary" className="ml-3">
                                        <AddCircleTwoToneIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <CardContent className="p-3">
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} lg={4} md={6}>
                                            <div className="text-center">
                                                <br/> To <br/>
                                                {delivery.destinationAddress.map((destinations,index)=>(
                                                    <>
                                                        <span>{destinations.City} , {destinations.State}</span>
                                                        <br/>
                                                    </>
                                                ))
                                                }
                                            </div>
                                        </Grid>
                                    </Grid>

                            <Grid container spacing={4}>
                                <Grid item xs={12} lg={4} md={6}>
                                    <div className="text-center">
                                        <span className="text-black-50 d-block">Number Of Packages</span>
                                        <b className="font-size-xxl">{delivery.package.length}</b>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                                ))
                                }
                </Grid>



                <Grid item xs={12} lg={5}>
                    <Card className="card-box mb-4">
                        <div className="px-4 px-xl-5 pb-1">
                            <div className="card-header d-block">
                <span className="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">
                  Analytics
                </span>
                            </div>
                            <CardContent className="p-0">
                                <div className="grid-menu grid-menu-2col">
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} sm={6}>
                                            <div className="text-center">
                                                <FontAwesomeIcon
                                                    icon={['fas', 'money-check']}
                                                    className="font-size-xxl text-warning my-3"
                                                />
                                                <span className="text-black-50 d-block">Payments</span>
                                                <b className="font-size-xxl">{total(props.company.payments)} TND</b>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <div className="text-center">
                                                <FontAwesomeIcon
                                                    icon={['fas', 'money-bill']}
                                                    className="font-size-xxl text-success my-3"
                                                />
                                                <span className="text-black-50 d-block">Revenue</span>
                                                <b className="font-size-xxl">9,693 TND</b>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </CardContent>
                            <div className="card-header border-0 d-block">
                <span className="text-uppercase pt-4 pb-2 text-black d-block text-center font-weight-bold font-size-lg">
                  Latest Payments
                </span>
                            </div>

                            {props.company.payments.slice(0,3).sort((a, b) => a.CreationDate < b.CreationDate ? 1 : -1).map((payment,index)=>(
                                <div key={index}>
                                    <div className="align-box-row">
                                        <div className="flex-grow-1">
                                            <LinearProgress value={43} color="secondary" />
                                        </div>
                                        <div className="line-height-sm text-center ml-4">
                                            <b className="font-size-lg text-success">
                                                {payment.Amount/100}
                                                <small className="text-black-50 pr-1">TND</small>
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }


                            <div className="card-header border-0 d-block">
                <span className="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">
                  Charts
                </span>
                            </div>
                            <Chart
                                options={chart2Options}
                                series={chart2Data}
                                type="area"
                                height={150}
                            />
                            <div className="card-footer d-block text-center">
                                <Tooltip arrow title="Refresh">
                                    <Button variant="contained" color="secondary">
                                        <FontAwesomeIcon icon={['fas', 'cog']} spin />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    );
}
