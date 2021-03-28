import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import TabsBasic from '../../componentsBack/Tabs/TabsBasic';
export default function TabsExamples() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tabs"
        titleDescription="Tabs are used to split content between multiple sections. Wide variety available."
      />

      <ExampleWrapperSimple sectionHeading="Basic tabs">
        <TabsBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
