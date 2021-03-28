import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSeamless } from '../../layout-componentsBack';

import FormsControlsBasic from '../../componentsBack/FormsControls/FormsControlsBasic';
import FormsControlsInputGroups from '../../componentsBack/FormsControls/FormsControlsInputGroups';
export default function FormsControls() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Controls"
        titleDescription="Wide selection of forms controls, using a standardised code base, specifically for React."
      />
      <ExampleWrapperSeamless sectionHeading="Basic">
        <FormsControlsBasic />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Input groups">
        <FormsControlsInputGroups />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
