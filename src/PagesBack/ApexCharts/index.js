import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-componentsBack';

import ApexChartsLine from '../../componentsBack/ApexCharts/ApexChartsLine';
import ApexChartsArea from '../../componentsBack/ApexCharts/ApexChartsArea';
import ApexChartsColumn from '../../componentsBack/ApexCharts/ApexChartsColumn';
import ApexChartsBar from '../../componentsBack/ApexCharts/ApexChartsBar';
import ApexChartsMixed from '../../componentsBack/ApexCharts/ApexChartsMixed';
import ApexChartsHeatmap from '../../componentsBack/ApexCharts/ApexChartsHeatmap';
import ApexChartsRadialbar from '../../componentsBack/ApexCharts/ApexChartsRadialbar';
import ApexChartsRadar from '../../componentsBack/ApexCharts/ApexChartsRadar';
export default function ApexCharts() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Apex Charts"
        titleDescription="Wonderful animated charts built with ApexCharts components."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ExampleWrapperSimple sectionHeading="Area">
            <ApexChartsArea />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Column">
            <ApexChartsColumn />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Line">
            <ApexChartsLine />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Radar">
            <ApexChartsRadar />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExampleWrapperSimple sectionHeading="Bar">
            <ApexChartsBar />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Heatmap">
            <ApexChartsHeatmap />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Mixed">
            <ApexChartsMixed />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Radial bar">
            <ApexChartsRadialbar />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
