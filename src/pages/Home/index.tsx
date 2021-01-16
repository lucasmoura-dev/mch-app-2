import React, { useContext, useState } from 'react';

import { Text, View } from 'react-native';

import { DrawerScreenProps } from '@react-navigation/drawer';

type RootStackParamList = {
  Home: undefined,
  Plants: { searchParams: { brand?: string, city?: string, online?: number | boolean } | undefined } | undefined,
};

type ScreenProps = DrawerScreenProps<RootStackParamList, 'Home'>;

import {  CardsContent, Wrapper, Container } from './styles';

import MchHeader from '../../components/MchHeader';
import MchBlock from '../../components/MchBlock';
import ChipList from '../../components/ChipList';
import CardList from '../../components/CardList';


const Home: React.FC<ScreenProps> = ({ route, navigation }) => {
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
    { name: 'ituiutaba', title: 'Ituiutaba', background: '#080230', plants: 132, energyValue: 853, energyUnit: 'kWh' },
    { name: 'santa vitória', title: 'Santa Vitória', background: '#080230', plants: 19, energyValue: 349, energyUnit: 'kWh' },
    { name: 'gurinhatã', title: 'Gurinhatã', background: '#080230', plants: 13, energyValue: 224, energyUnit: 'kWh' },
    { name: 'capinópolis', title: 'Capinópolis', background: '#080230', plants: 10, energyValue: 89, energyUnit: 'kWh' },
    { name: 'gurinhatã', title: 'Gurinhatã', background: '#080230', plants: 7, en0ergyValue: 78, energyUnit: 'kWh' },
  ];

  cardsData['status']  = [
    { name: '1', footer: 'Online', icon: 'wifi', background: '#00BE8A', title: 178  },
    { name: '0', footer: 'Offline', icon: 'wifi-off', background: '#E95567', title: 3  },
  ];

  cardsData['brands'] = [
    { name: 'growatt', title: 'Growatt', background: '#000000', plants: 147, energyValue: 30, energyUnit: 'mWh' },
    { name: 'fronius', title: 'Fronius', background: '#000000', plants: 19, energyValue: 20, energyUnit: 'mWh' },
    { name: 'sma', title: 'SMA', background: '#000000', plants: 15, energyValue: 6, energyUnit: 'mWh' },
  ];

  interface SearchParams {
    brand?: string,
    city?: string,
    online?: number | boolean
  }

  const goToPlants = (searchParams: SearchParams) => {
    navigation.navigate('Plants', { searchParams });
  }

  const onPressCard = (type, name) => {
    console.log(type, name);
  }

  return (
    <Wrapper>
      <MchHeader message="Olá" username="Jéssica"/>
      <Container>
        <MchBlock title="Inversores e Plantas" total={181} onPressTotal={() => goToPlants({})} >
            <ChipList data={buttons} selectCallback={onChangeIndex} />

            <CardsContent>
              <CardList data={cardsData[selected]} isStatusCard={selected === 'status'} onPressCard={(name) => onPressCard(selected, name)} />
            </CardsContent>
          </MchBlock>
      </Container>
    </Wrapper >
  );
};

export default Home;
