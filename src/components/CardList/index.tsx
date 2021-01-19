import React from 'react';
import { Dimensions, Text, ScrollView, FlatList, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from '../Card';
import PlantCard from '../../components/PlantCard';

import { Container } from './styles';
const SLIDER_WIDTH = Dimensions.get('window').width;

type CardListProps = {
  data: Array<any>;
  isStatusCard?: boolean;
  onPressCard?: any;
};

const CardList: React.FC<CardListProps> = ({
  data,
  isStatusCard,
  onPressCard,
}) => {
  let carousel = null;

  const renderStatusCard = ({ item }: any) => {
    return (
      <Card
        headerIcon={item.icon}
        title={item.title}
        footer={item.footer}
        background={item.background}
        name={item.name}
        onPress={onPressCard}
      />
    );
  };

  const renderPlantCard = ({ item }: any) => {
    return (
      <PlantCard
        title={item.title}
        background={item.background}
        plants={item.plants}
        energy={{ value: item.energyValue, unit: item.energyUnit }}
        name={item.name}
        onPress={onPressCard}
      />
    );
  };

  const renderCard = (data: any) => {
    let render = isStatusCard ? renderStatusCard : renderPlantCard;
    return render(data);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(rowData, index) => String(index)}
      onEndReachedThreshold={0.7}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={renderCard}
      horizontal={true}
    />
  );
};

export default CardList;
