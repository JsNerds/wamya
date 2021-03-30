import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import EntreprisesTable from "../../components/back/EntreprisesTable";
export default function Entreprises() {
    return (
        <Fragment>
            <PageTitle
                titleHeading="Entreprises"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Entreprises Table">
                <EntreprisesTable/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
