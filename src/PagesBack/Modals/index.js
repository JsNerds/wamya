import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import ModalsBasic from '../../componentsBack/Modals/ModalsBasic';
export default function Modals() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Modal dialogs"
        titleDescription="Wide selection of modal dialogs styles and animations available."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <ModalsBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
