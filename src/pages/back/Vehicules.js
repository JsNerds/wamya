import React, { Fragment } from 'react';

import { ExampleWrapperSeamless, PageTitle } from '../../layout-componentsBack';
import VehiculesTable from '../../components/back/VehiculesTable';
export default function Vehicules() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Vehicules"
        titleDescription="Monitor company and drivers vehicules"
      />

      <ExampleWrapperSeamless sectionHeading="VehiculesTable">
        <VehiculesTable />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
