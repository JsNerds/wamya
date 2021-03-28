import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import UtilitiesHelpersPrimaryColors from '../../componentsBack/UtilitiesHelpers/UtilitiesHelpersPrimaryColors';
import UtilitiesHelpersNeutralColors from '../../componentsBack/UtilitiesHelpers/UtilitiesHelpersNeutralColors';
import UtilitiesHelpersBrandColors from '../../componentsBack/UtilitiesHelpers/UtilitiesHelpersBrandColors';
export default function UtilitiesHelpers() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Utilities &amp; Helpers"
        titleDescription="These are helpers that speed up the dev time for various components and effects."
      />

      <ExampleWrapperSimple sectionHeading="Brand colors">
        <UtilitiesHelpersBrandColors />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Neutral colors">
        <UtilitiesHelpersNeutralColors />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Primary colors">
        <UtilitiesHelpersPrimaryColors />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
