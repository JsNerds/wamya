import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import EntreprisesTable from "../../components/back/EntreprisesTable";
import {useServerApi} from "../../hooks/useServerApi";
export default function Entreprises() {
    const [companies] = useServerApi("entreprises");

    return (
        <Fragment>
            <PageTitle
                titleHeading="Comapnies"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Comapnies Table">
                <EntreprisesTable companies={companies}/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
