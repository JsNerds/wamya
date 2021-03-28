import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import NavigationMenusVerticalBasic from '../../componentsBack/NavigationMenus/NavigationMenusVerticalBasic';
export default function NavigationMenus() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Navigation menus"
        titleDescription="Navigation menus are one of the basic building blocks for any web or mobile app."
      />

      <ExampleWrapperSimple sectionHeading="Vertical menus">
        <NavigationMenusVerticalBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
