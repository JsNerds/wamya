import React, { Fragment } from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
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
import Cards1Examples1 from "../../componentsBack/Cards1/Cards1Examples1";
export default function ApexCharts() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Customers"
        titleDescription="Wonderful animated charts built with ApexCharts components."
      />


      <ExampleWrapperSeamless sectionHeading="Cards 1">
        <Cards1Examples1 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
