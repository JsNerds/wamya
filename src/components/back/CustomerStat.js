import React, {Fragment, useEffect, useState} from 'react';
import { Grid, Avatar, Card, CardContent, Divider } from '@material-ui/core';
import {useServerApi} from "../../hooks/useServerApi";





export default function CustomerStat(props) {

    return (
        <Fragment>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card className="card-box mb-4">
                        <div className="card-header">
                            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                                Statistics
                            </h4>
                        </div>
                        <CardContent className="p-3">
                            <div className="d-flex align-items-center justify-content-between p-3">
                                <div>
                                    <b>Reports</b>
                                    <div className="text-black-50">Monthly sales reports</div>
                                </div>
                                <div className="font-weight-bold text-danger font-size-xl">
                                    2363
                                </div>
                            </div>
                            <Divider />
                            <div className="d-flex align-items-center justify-content-between p-3">
                                <div>
                                    <b>User</b>
                                    <div className="text-black-50">Visitors last week</div>
                                </div>
                                <div className="font-weight-bold text-success font-size-xl">
                                    {props.customers?.length}
                                </div>
                            </div>
                            <Divider />
                            <div className="d-flex align-items-center justify-content-between p-3">
                                <div>
                                    <b>Sales</b>
                                    <div className="text-black-50">
                                        Total average weekly report
                                    </div>
                                </div>
                                <div className="font-weight-bold text-warning font-size-xl">
                                    483
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Fragment>
    );
}
