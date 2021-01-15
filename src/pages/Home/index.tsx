import React, { useState } from 'react';

import { FlatList, View, Text, Dimensions } from 'react-native';

import { VictoryChart, VictoryBar, VictoryAxis, VictoryZoomContainer, VictoryScatter, VictoryArea, VictoryLine, VictoryTheme, VictoryVoronoiContainer } from 'victory-native';

import { 
  Wrapper, 
  Container,
  CardsContent
} from './styles';

import MchHeader from '../../components/MchHeader';
import MchBlock from '../../components/MchBlock';
import ChipList from '../../components/ChipList';

import CardList from '../../components/CardList';

const Home: React.FC = () => {
  const [selected, setSelected] = useState('status');

  const buttons = [
    { id: 'status', title: 'Status' },
    { id: 'cities', title: 'Cidades' },
    { id: 'brands', title: 'Marcas' },
  ];

  const onChangeIndex = (selected: string) => {
    setSelected(selected);
  }
  
  type cardCollectionProps = { cities: object[], status: object[], brands: object[] };
  const cardsData : cardCollectionProps = { cities: [], status: [], brands: [] };

  cardsData['cities'] = [
    { title: 'Ituiutaba', background: '#080230', plants: 132, energyValue: 853, energyUnit: 'kWh' },
    { title: 'Santa Vitória', background: '#080230', plants: 19, energyValue: 349, energyUnit: 'kWh' },
    { title: 'Gurinhatã', background: '#080230', plants: 13, energyValue: 224, energyUnit: 'kWh' },
    { title: 'Capinópolis', background: '#080230', plants: 10, energyValue: 89, energyUnit: 'kWh' },
    { title: 'Gurinhatã', background: '#080230', plants: 7, en0ergyValue: 78, energyUnit: 'kWh' },
  ];

  cardsData['status']  = [
    { footer: 'Online', icon: 'wifi', background: '#00BE8A', title: 178  },
    { footer: 'Offline', icon: 'wifi-off', background: '#E95567', title: 3  },
  ];

  cardsData['brands'] = [
    { title: 'Growatt', background: '#000000', plants: 147, energyValue: 30, energyUnit: 'mWh' },
    { title: 'Fronius', background: '#000000', plants: 19, energyValue: 20, energyUnit: 'mWh' },
    { title: 'SMA', background: '#000000', plants: 15, energyValue: 6, energyUnit: 'mWh' },
  ];




  const width = Dimensions.get('window').width
  const height = 220;

  const fill = '#305EDE'
  
  const data = [
    { month: 1, value: 20 },
    { month: 2, value: 45 },
    { month: 3, value: 28 },
    { month: 4, value: 80 },
  ];

  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

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
    
    <Wrapper>
        <MchHeader message="Olá" username="Jéssica"/>
        
        <Container>
          <MchBlock title="Inversores e Plantas" total={181} >
            <ChipList data={buttons} selectCallback={onChangeIndex} />
            
            <CardsContent>
              <CardList data={cardsData[selected]} isStatusCard={selected === 'status'} />
            </CardsContent>
          </MchBlock>

          <MchBlock title="Estatísticas">
          {/* <BarChart
            width={width - 35}
            height={180}
            data={data}
            chartConfig={chartConfig}
            style={graphStyle}
          /> */}
          <VictoryChart
            height={210} 
            domainPadding={{ x: 10, y: 10}} 
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
                grid: { stroke: "#EAF0F4" },
                axis: { stroke: 'none' }
              }}
            />
            <VictoryAxis
              style={{
                ticks: { stroke: '#EAF0F4' },
                axis: { stroke: 'none' }
              }}
              tickValues={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
              tickFormat={['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']}
            />
            {/* <VictoryArea
              style={{
                data: { 
                  fill: 'rgba(48, 94, 222, 0.2)',
                  // stroke: '#305EDE', strokeWidth: 2
                }
              }}
              data={scatterData}
              interpolation="monotoneX"
            /> */}
            {/* <VictoryLine
              data={scatterData}
              interpolation="monotoneX"
              style={{
                data: { stroke: 'rgba(48, 94, 222, 0.2)' }
              }}
            /> */}
            <VictoryBar
              data={scatterData}
              x="x"
              y="y"
              barRatio={0.5}
              cornerRadius={{ top: 5, bottom: 5 }}
              style={
                {
                  data: { fill: '#305EDE'}
                }
              }
            ></VictoryBar>
            {/* <VictoryScatter
              data={scatterData}
              style={{
                data: { fill: '#FFFF', strokeWidth: 2, stroke: 'rgba(48, 94, 222, 0.7)' }
              }}
            /> */}
          </VictoryChart>


          {/* <VictoryChart 
            height={210} 
            domainPadding={20} 
            width={392}
            >
            <VictoryAxis 
               tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
               tickFormat={months}
            />
            <VictoryAxis
              dependentAxis
            />
            <VictoryBar
              data={data}
              x="month"
              y="value"
              barRatio={0.5}
              cornerRadius={5}
              style={
                {
                  data: { fill: '#305EDE'}
                }
              }
            >
              
            </VictoryBar>
          </VictoryChart> */}
          
          </MchBlock>
        </Container>
    </Wrapper>
  );
};

export default Home;
