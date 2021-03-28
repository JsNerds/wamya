import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSeamless } from '../../layout-componentsBack';

import RegularTables4Example7 from '../../componentsBack/RegularTables4/RegularTables4Example7';
export default function RegularTables4() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tables examples 4"
        titleDescription="Tables are the backbone of almost all web applications."
      />

      <ExampleWrapperSeamless sectionHeading="">
        <RegularTables4Example7 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
