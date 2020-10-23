import React from 'react';
import { Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from '../Card';
import PlantCard from '../../components/PlantCard';

import { Container } from './styles';
const SLIDER_WIDTH = Dimensions.get('window').width;

type ItemProps = { item: Object, index: number };

type CardListProps = {
  data: Array<any>,
  isStatusCard?: boolean,
};

const CardList: React.FC<CardListProps> = ({ data, isStatusCard }) => {
  let carousel = null;

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

  const renderCard = (data) => {
    let render = isStatusCard ? renderStatusCard : renderPlantCard;
    return render(data);
  }

  return (
    <Carousel
        ref={(c) => { carousel = c; }}
        data={data}
        renderItem={renderCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={160}
        layout="default"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        activeSlideAlignment="start"
    />
  );
};

export default CardList;
