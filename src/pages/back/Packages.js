import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import PackagesTable from "../../components/back/PackagesTable";
export default function Packages() {
    return (
        <Fragment>
            <PageTitle
                titleHeading="Packages"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Packages Table">
                <PackagesTable/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
