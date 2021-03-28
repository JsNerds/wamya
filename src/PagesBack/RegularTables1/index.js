import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import RegularTables1Example1 from '../../componentsBack/RegularTables1/RegularTables1Example1';
export default function RegularTables1() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tables examples 1"
        titleDescription="Tables are the backbone of almost all web applications."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <RegularTables1Example1 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
