import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import MapsGoogleMaps from '../../componentsBack/Maps/MapsGoogleMaps';
import MapsLeafletMaps from '../../componentsBack/Maps/MapsLeafletMaps';
export default function Maps() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Maps"
        titleDescription="Implement in your applications Google or vector maps."
      />
      <ExampleWrapperSimple sectionHeading="Google maps">
        <MapsGoogleMaps />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Leaflet maps">
        <MapsLeafletMaps />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
