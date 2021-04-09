import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import CustomersTable from "../../components/back/CustomersTable";
import CustomerStat from "../../components/back/CustomerStat";
import {useServerApi} from "../../hooks/useServerApi";
export default function Customers() {
    const [customers] = useServerApi("customers");
    return (
        <Fragment>
            <PageTitle
                titleHeading="Customers"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Customers Table">
                <CustomersTable customers={customers}/>
                <CustomerStat customers={customers}/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
