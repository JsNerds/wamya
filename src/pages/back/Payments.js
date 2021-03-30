import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import PaymentsTable from "../../components/back/PaymentsTable";
export default function Payments() {
    return (
        <Fragment>
            <PageTitle
                titleHeading="Payments"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Customers Table">
                <PaymentsTable/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
