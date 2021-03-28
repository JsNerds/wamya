import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSeamless } from '../../layout-componentsBack';

import ScrollableBasic from '../../componentsBack/Scrollable/ScrollableBasic';
export default function Scrollable() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Scrollable"
        titleDescription="Add scrolling areas to any elements with custom scrollbars or default browser ones."
      />

      <ExampleWrapperSeamless sectionHeading="Custom scrollbars & Sizing">
        <ScrollableBasic />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
