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
import Card from '../../components/Card';

import Carousel from 'react-native-snap-carousel';
import PlantCard from '../../components/PlantCard';

import CardList from '../../components/CardList';

const Home: React.FC = () => {
  const [selected, setSelected] = useState('');

  const buttons = [
    { id: 'status', title: 'Status' },
    { id: 'cities', title: 'Cidades' },
    { id: 'brands', title: 'Marcas' },
  ];
  

  const onChangeIndex = (selected: string) => {
    setSelected(selected);
  }
  
  const renderStatusCard = ({ item }) => {

    return (
      <Card 
        headerIcon="wifi"
        title={item.title}
        footer={item.footer}
        background={item.background}
      />
    );
  };

  const renderPlantCard = ({ item }) => {

    return (
      <PlantCard 
        title={item.title}
        background={item.background}
        plants={item.plants}
        energy={{ value: item.energyValue, unit: item.energyUnit }}
      />
    );
  };
  

  const dataStatus = [
    { footer: 'Online', icon: 'wifi', background: '#00BE8A', title: 178  },
    { footer: 'Offline', icon: 'wifi-off', background: '#E95567', title: 3  },
  ];

  const dataCity = [
    { title: 'Ituiutaba', background: '#080230', plants: 132, energyValue: 853, energyUnit: 'kWh' },
    { title: 'Santa Vitória', background: '#080230', plants: 19, energyValue: 349, energyUnit: 'kWh' },
    { title: 'Gurinhatã', background: '#080230', plants: 13, energyValue: 224, energyUnit: 'kWh' },
    { title: 'Capinópolis', background: '#080230', plants: 10, energyValue: 89, energyUnit: 'kWh' },
    { title: 'Gurinhatã', background: '#080230', plants: 7, en0ergyValue: 78, energyUnit: 'kWh' },
  ];

  const dataBrands = [
    { title: 'Growatt', background: '#000000', plants: 147, energyValue: 30, energyUnit: 'mWh' },
    { title: 'Fronius', background: '#000000', plants: 19, energyValue: 20, energyUnit: 'mWh' },
    { title: 'SMA', background: '#000000', plants: 15, energyValue: 6, energyUnit: 'mWh' },
  ];


  let carousel = null;

  const renderCarousel = () => {
    let data: object[] = dataStatus;
    let render = renderStatusCard;

    if (selected === 'cities') {
      data = dataCity;
      render = renderPlantCard;
    } else if (selected === 'brands') {
      data = dataBrands;
      render = renderPlantCard;
    }

    return (
      <CardList data={data} renderCard={render} />
    )
  }


  return (
    
    <Wrapper>
        <MchHeader message="Boa tarde" username="Jéssica"/>
        
        <Container>
          <MchBlock title="Inversores e Plantas" total={181} >
            <ChipList data={buttons} selectCallback={onChangeIndex} />
            
            <CardsContent>
              { renderCarousel() }
              {/* <Card 
                headerIcon="wifi"
                title="178"
                footer="Online"
              /> */}
              {/* <Card 
                headerIcon="wifi-off"
                title="178"
                footer="Offline"
                background="#E95567" 
              /> */}
              {/* <PlantCard 
                title="Growatt"
                plants={142}
                energy={{ value: 28, unit: 'mWh' }}
              />
              <PlantCard 
                title="Ituiutaba"
                background="#080230"
                plants={87}
                energy={{ value: 453, unit: 'kWh' }}
              />

              <PlantCard 
                title="Santa Vitória"
                plants={87}
                energy={{ value: 453, unit: 'kWh' }}
              /> */}
              { /*renderCarousel()*/ }
            </CardsContent>
          </MchBlock>

          <MchBlock title="Estatísticas">

          </MchBlock>
        </Container>
    </Wrapper>
  );
};

export default Home;
