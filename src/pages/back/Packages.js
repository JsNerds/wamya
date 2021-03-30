import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import CustomersTable from "../../components/back/CustomersTable";
export default function Packages() {
    return (
        <Fragment>
            <PageTitle
                titleHeading="Packages"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Customers Table">
                <CustomersTable/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
