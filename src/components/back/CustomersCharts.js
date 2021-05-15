import React, {Fragment, useEffect} from 'react';

import Chart from 'react-apexcharts';

export default function CustomersCharts(props) {

    const options = {
        xaxis: {
            categories: ['debut', 'Now']
        }
    };



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

    let series = [
        {
            name: 'Payments',
            data: [0,totalPayments()]
        },
        {
            name: 'Deliveries',
            data: [0,totalDeliveries()]
        }

    ];

    return (
        <Fragment>
            <Chart options={options} series={series} type="area" />
        </Fragment>
    );
}
