import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import NotificationsAlertsBasic from '../../componentsBack/Notifications/NotificationsAlertsBasic';
export default function Notifications() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Notifications"
        titleDescription="Show beautiful, animated growl like notifications or alerts on your pages screens."
      />

      <ExampleWrapperSimple sectionHeading="Basic alerts">
        <NotificationsAlertsBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
