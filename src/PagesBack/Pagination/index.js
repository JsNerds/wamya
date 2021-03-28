import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import PaginationBasic from '../../componentsBack/Pagination/PaginationBasic';
export default function Pagination() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Pagination"
        titleDescription="Basic and dynamic pagination for use in your next awesome application."
      />
      <ExampleWrapperSimple sectionHeading="Basic">
        <PaginationBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
