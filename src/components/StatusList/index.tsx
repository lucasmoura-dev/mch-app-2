import React from 'react';
import { Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from '../Card';

import { Container } from './styles';
const SLIDER_WIDTH = Dimensions.get('window').width;

const StatusList: React.FC = ({ data }) => {
  let carousel = null;

  const renderItem = ({item, index}) => {
    return (
      <Card title={item.title} background="#1F211D" color="#FFFFFF" />
    );
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
  );
};

export default StatusList;
