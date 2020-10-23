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
import CityCard from '../../components/CityCard';



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
  
  const renderItem = ({item, index}) => {
    return (
        <Card title={item.title} background="#1F211D" color="#FFFFFF" />
    );
  };

  const itemsStatus = [
    { title: 'Online' },
    { title: 'Offline' },
  ];

  const itemsCities = [
    { title: 'Ituiutaba' },
    { title: 'Santa Vitória' },
    { title: 'Gurinhatã' },
  ];

  const itemsBrands = [
    { title: 'Growatt' },
    { title: 'Refusol' },
    { title: 'Fronius' },
    { title: 'Sunny' },
    { title: 'Xiaomi' },
  ];


  let carousel = null;

  const renderCarousel = () => {
    let data = [];
    if (selected === 'status') {
      data = itemsStatus;
    } else if (selected === 'cities') {
      data = itemsCities;
    } else {
      data = itemsBrands;
    }

    return (
      <Carousel
        ref={(c) => { carousel = c; }}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={160}
        layout="default"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        activeSlideAlignment="start"
      />
    )
  }


  return (
    
    <Wrapper>
        <MchHeader message="Boa tarde" username="Jéssica"/>
        
        <Container>
          <MchBlock title="Inversores e Plantas">
            <ChipList data={buttons} selectCallback={onChangeIndex} />
            
            <CardsContent>
              {/* <Card 
                headerIcon="wifi"
                title="178"
                footer="Online"
              /> */}
              <Card 
                headerIcon="wifi-off"
                title="178"
                footer="Offline"
                background="#E95567"
              />
              <CityCard 
                city="Ituiutaba"
                plants={87}
                energy={{ value: 453, unit: 'kWh' }}
                weather={{ type: 'sun', temperature: 36 }}
              />

              <CityCard 
                city="Santa Vitória"
                plants={87}
                energy={{ value: 453, unit: 'kWh' }}
                weather={{ type: 'sun', temperature: 36 }}
              />
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
