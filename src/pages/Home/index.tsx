import React, { useContext, useState, useEffect } from 'react';

import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';

import { DateTime, Settings } from 'luxon';

import { Text, View } from 'react-native';

import { DrawerScreenProps } from '@react-navigation/drawer';

import api from '../../services/api';
import locale from '../../services/locale';

type RootStackParamList = {
  Home: undefined;
  Plants:
    | {
        searchParams:
          | { brand?: string; city?: string; online?: number | boolean }
          | undefined;
      }
    | undefined;
};

type ScreenProps = DrawerScreenProps<RootStackParamList, 'Home'>;

import { CardsContent, Wrapper, Container } from './styles';

import MchHeader from '../../components/MchHeader';
import MchBlock from '../../components/MchBlock';
import ChipList from '../../components/ChipList';
import CardList from '../../components/CardList';

const Home: React.FC<ScreenProps> = ({ route, navigation }) => {
  Settings.defaultLocale = 'pt';
  const [selected, setSelected] = useState('status');
  const [cardsData, setCardsData] = useState({
    cities: [],
    status: [],
    brands: [],
  });
  const [headerData, setHeaderData] = useState({
    username: 'Jéssica',
    generationToday: 0,
    generationTotal: 0,
    economy: 0,
  });

  const buttons = [
    { id: 'status', title: 'Status' },
    { id: 'cities', title: 'Cidades' },
    { id: 'brands', title: 'Marcas' },
  ];

  const onChangeIndex = (selected: string) => {
    setSelected(selected);
  };

  type cardCollectionProps = {
    cities: object[];
    status: object[];
    brands: object[];
  };
  //const cardsData: cardCollectionProps = { cities: [], status: [], brands: [] };

  useFocusEffect(
    React.useCallback(() => {
      loadDashboardData();
    }, []),
  );

  async function loadDashboardData() {
    let response: any = {};

    try {
      // console.log(searchParams);
      response = await api.get('dashboard');
    } catch (error) {
      console.log(error);
      return;
    }

    let {
      online,
      offline,
      generation_today: generationToday,
      generation_total: generationTotal,
      economy,
      plants_total,
      cities,
      inverter_brands: inverterBrands,
    } = response.data;

    generationToday = locale.formatToUnit(generationToday, '', true);
    generationTotal = locale.formatToUnit(generationTotal, '', true);
    economy = locale.formatToReal(economy);
    /*locale.formatToUnit(plant.generation_today, 'Wh'), // Hoje
    locale.formatToUnit(plant.power_current, 'W'), // Potência atual
    locale.formatToUnit(plant.generation_total, 'Wh'), // Total
    locale.formatToUnit(plant.power_total, 'W'), // Capacidade*/


    setHeaderData({ ...headerData, generationToday, generationTotal, economy });

    const cardOnline = {
      name: '1',
      footer: 'Online',
      icon: 'wifi',
      background: '#00BE8A',
      title: online,
    };

    const cardOffline = {
      name: '0',
      footer: 'Offline',
      icon: 'wifi-off',
      background: '#E95567',
      title: offline,
    };

    const cardsCities = cities.map(({ name, count: plants, generation_today: energyValue, generation_total}) => {
      const energyFullValue = locale.formatToUnit(energyValue, 'Wh', false, true);

      return {
        name,
        title: name,
        background: '#080230',
        plants,
        energyValue: energyFullValue[0],
        energyUnit: energyFullValue[1],
      };
    });

    const cardsInverters = inverterBrands.map(({ name, count: plants, generation_today: energyValue, generation_total}) => {
      const energyFullValue = locale.formatToUnit(energyValue, 'Wh', false, true);
      return {
        name,
        title: name,
        background: '#000000',
        plants,
        energyValue: energyFullValue[0],
        energyUnit: energyFullValue[1],
      };
    });


    setCardsData({ status: [cardOnline, cardOffline], cities: cardsCities, brands: cardsInverters });

    console.log(online, offline, generationToday);
  }

  interface SearchParams {
    brand?: string;
    city?: string;
    online?: number | boolean;
  }

  const goToPlants = (searchParams: SearchParams) => {
    navigation.navigate('Plants', { searchParams });
  };

  const onPressCard = (cardType, name) => {
    console.log(cardType, name);
    if (cardType === 'status') {
      goToPlants({ online: name });
    } else if (cardType === 'cities') {
    } else {
    }
  };

  return (
    <Wrapper>
      <MchHeader
        message="Olá"
        username={headerData.username}
        generationToday={headerData.generationToday}
        generationTotal={headerData.generationTotal}
        economy={headerData.economy}
      />
      <Container>
        <MchBlock
          title="Inversores e Plantas"
          total={181}
          onPressTotal={() => goToPlants({})}
        >
          <ChipList data={buttons} selectCallback={onChangeIndex} />

          <CardsContent>
            <CardList
              data={cardsData[selected]}
              isStatusCard={selected === 'status'}
              onPressCard={name => onPressCard(selected, name)}
            />
          </CardsContent>
        </MchBlock>
      </Container>
    </Wrapper>
  );
};

export default Home;
