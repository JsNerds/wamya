import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import PaymentsTable from "../../components/back/PaymentsTable";
import {useServerApi} from "../../hooks/useServerApi";
export default function Payments() {
    const [payments] = useServerApi("payments");

    return (
        <Fragment>
            <PageTitle
                titleHeading="Payments"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Payments and Operations Table">
                <PaymentsTable payments={payments}/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
