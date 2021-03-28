import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import CustomersTable from "../../components/back/CustomersTable";
export default function Customers() {
    return (
        <Fragment>
            <PageTitle
                titleHeading="Customers"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />


            <ExampleWrapperSeamless sectionHeading="Customers Table">
                <CustomersTable/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
