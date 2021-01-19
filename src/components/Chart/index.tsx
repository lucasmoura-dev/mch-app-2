import React from 'react';

import { Text, Dimensions } from 'react-native';

import colors from '../../styles/colors';

import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryScatter,
  VictoryArea,
  VictoryLine,
  VictoryTheme,
  VictoryVoronoiContainer,
} from 'victory-native';

import { Container } from './styles';

const Chart: React.FC = () => {
  const width = Dimensions.get('window').width;
  const height = 220;

  const fill = '#305EDE';

  const data = [
    { month: 1, value: 20 },
    { month: 2, value: 45 },
    { month: 3, value: 28 },
    { month: 4, value: 80 },
  ];

  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  const scatterData = [
    { x: '01', y: 2 },
    { x: '02', y: 4 },
    { x: '03', y: 7 },
    { x: '04', y: 7 },
    { x: '05', y: 4 },
    { x: '06', y: 7 },
    { x: '07', y: 8 },
    { x: '08', y: 12 },
    { x: '09', y: 12 },
    { x: '10', y: 13 },
    { x: '11', y: 0 },
    { x: '12', y: 0 },
  ];

  return (
    <VictoryChart
      height={200}
      domainPadding={{ x: 10, y: 0 }}
      theme={VictoryTheme.grayscale}
    >
      <VictoryVoronoiContainer
        labels={({ datum }) => `Oi`}
        voronoiDimension="x"
      />
      <VictoryAxis
        label=""
        dependentAxis
        style={{
          ticks: { stroke: '#EAF0F4' },
          grid: { stroke: '#EAF0F4' },
          axis: { stroke: 'none' },
        }}
      />
      <VictoryAxis
        style={{
          ticks: { stroke: '#EAF0F4' },
          axis: { stroke: 'none' },
        }}
        tickValues={[
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
        ]}
        tickFormat={[
          'J',
          'F',
          'M',
          'A',
          'M',
          'J',
          'J',
          'A',
          'S',
          'O',
          'N',
          'D',
        ]}
      />
      <VictoryBar
        data={scatterData}
        x="x"
        y="y"
        barRatio={0.5}
        cornerRadius={{ top: 5, bottom: 5 }}
        style={{
          data: { fill: colors.primary },
        }}
      ></VictoryBar>
    </VictoryChart>
  );
};

export default Chart;
