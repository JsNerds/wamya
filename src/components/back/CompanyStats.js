import React, {Fragment} from 'react';
import { Grid, Card, CardContent, Divider } from '@material-ui/core';
import Chart from 'react-apexcharts';



export default function CompanyStats(props) {
    function totalPayments() {
        return props.company?.reduce(function(total, item) {
            total += item?.payments.length;

            return total;
        }, 0);
    }

    function totalDeliveries() {
        return props.company?.reduce(function(total, item) {
            total += item?.deliveries.length;

            return total;
        }, 0);
    }

    const options = {
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    };
    const seriesMixedChart = [
        {
            name: 'Subscriptions',
            data: [0,props.company?.length]
        },
        {
            name: 'Payments',
            data: [0,totalPayments()]
        },
        {
            name: 'Packages',
            data: [0, totalDeliveries()]
        }
    ];

    return (
        <Fragment>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                <Fragment>
                    <Chart options={options} series={seriesMixedChart} type="area" />
                </Fragment>
                </Grid>
            </Grid>

        </Fragment>
    );
}
