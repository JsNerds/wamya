import React, {Fragment} from 'react';
import { Grid, Card, CardContent, Divider } from '@material-ui/core';
import {ExampleWrapperSimple} from "../../layout-componentsBack";
import ApexChartsArea from "../../componentsBack/ApexCharts/ApexChartsArea";
import CustomersCharts from "./CustomersCharts";



export default function CustomerStat(props) {
    const customers = props.customers;
    function totalPayments() {
        return props.customers.reduce(function(total, item) {
            total += item?.payments.length;

            return total;
        }, 0);
    }

    function totalDeliveries() {
        return props.customers.reduce(function(total, item) {
            total += item?.deliveries.length;

            return total;
        }, 0);
    }

    return (
        <Fragment>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card className="card-box mb-4">
                        <div className="card-header">
                            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                                Informations
                            </h4>
                        </div>
                        <CardContent className="p-3">
                            <div className="d-flex align-items-center justify-content-between p-3">
                                <div>
                                    <b>Payments</b>
                                    <div className="text-black-50">Number of customer's payments</div>
                                </div>
                                <div className="font-weight-bold text-danger font-size-xl">
                                    {totalPayments()}
                                </div>
                            </div>
                            <Divider />
                            <div className="d-flex align-items-center justify-content-between p-3">
                                <div>
                                    <b>User</b>
                                    <div className="text-black-50">Number of customers</div>
                                </div>
                                <div className="font-weight-bold text-success font-size-xl">
                                    {props.customers?.length}
                                </div>
                            </div>
                            <Divider />
                            <div className="d-flex align-items-center justify-content-between p-3">
                                <div>
                                    <b>Deliveries</b>
                                    <div className="text-black-50">
                                        Number of customer's deliveries
                                    </div>
                                </div>
                                <div className="font-weight-bold text-warning font-size-xl">
                                    {totalDeliveries()}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ExampleWrapperSimple sectionHeading="Stats">
                        <CustomersCharts customers={props.customers}/>
                    </ExampleWrapperSimple>
                </Grid>
            </Grid>

        </Fragment>
    );
}
