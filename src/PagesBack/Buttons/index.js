import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import ButtonsBasic from '../../componentsBack/Buttons/ButtonsBasic';
import ButtonsGroups from '../../componentsBack/Buttons/ButtonsGroups';
import ButtonsGroupsSizing from '../../componentsBack/Buttons/ButtonsGroupsSizing';
import ButtonsColors from '../../componentsBack/Buttons/ButtonsColors';
import ButtonsLinks from '../../componentsBack/Buttons/ButtonsLinks';
import ButtonsOutline from '../../componentsBack/Buttons/ButtonsOutline';
import ButtonsSizing from '../../componentsBack/Buttons/ButtonsSizing';
export default function Buttons() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Buttons"
        titleDescription="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <ButtonsBasic />
            <div className="divider my-2" />
            <ButtonsSizing />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Button groups">
            <div className="text-center">
              <ButtonsGroups />
              <div className="divider my-2" />
              <ButtonsGroupsSizing />
            </div>
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12}>
          <ExampleWrapperSimple sectionHeading="Colors">
            <ButtonsColors />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>

      <ExampleWrapperSimple sectionHeading="Links">
        <ButtonsLinks />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Outline">
        <ButtonsOutline />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
