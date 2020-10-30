import React, { useState } from 'react';

import { FlatList, View, Text, Dimensions } from 'react-native';


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

          </MchBlock>
        </Container>
    </Wrapper>
  );
};

export default Home;
