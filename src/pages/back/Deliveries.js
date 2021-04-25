import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import DeliveriesTable from "../../components/back/DeliveriesTable";
export default function Deliveries() {
    return (
        <Fragment>
            <PageTitle
                titleHeading="Packages"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Packages Table">
                <DeliveriesTable/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
