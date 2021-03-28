import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import PopoversBasic from '../../componentsBack/Popovers/PopoversBasic';
export default function Popovers() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Popovers"
        titleDescription="Add small overlay content, like those found in iOS, to any element for housing secondary information."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <PopoversBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
