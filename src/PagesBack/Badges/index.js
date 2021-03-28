import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import BadgesBasic from '../../componentsBack/Badges/BadgesBasic';
import BadgesPills from '../../componentsBack/Badges/BadgesPills';
import BadgesButtons from '../../componentsBack/Badges/BadgesButtons';
export default function Badges() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Badges"
        titleDescription="Badges and labels are used to offer extra small pieces of info for your content."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <BadgesBasic />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Pills">
            <BadgesPills />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Buttons with label badges">
            <BadgesButtons />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
