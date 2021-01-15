import React from 'react';
import { Text, Image } from 'react-native';

import { CardHeader, FirstInfo, Title, Energy, InfoValue } from './styles';
// import { CardHeader, FirstInfo, Title, Energy, InfoValue } from './styles';

import Card from '../Card';

import PlantsIcon from '../../images/svg/icon_plants';


type Weather = { type: string, temperature: number };
type Energy = { value: number, unit: string };

type CardProps = {
  title: string,
  plants: number,
  // weather?: Weather,
  energy: Energy,
  background?: string,
};



const PlantCard: React.FC<CardProps> = ({ plants, energy, title, ...props }) => {

  return (
    <Card background="#1F211D" alignment="center" {...props} >
      <CardHeader>
        <FirstInfo>
          <PlantsIcon color="#FFFFFF" width={20} />
          <InfoValue>{ plants }</InfoValue>
        </FirstInfo>

        {/* <WeatherInfo>
          <PlantsIcon color="#FFFFFF" width={18} />
          <WeatherTemperature>{ weather ? weather.temperature : '32' }</WeatherTemperature>
          <WeatherUnit>°C</WeatherUnit>
        </WeatherInfo> */}
      </CardHeader>

      <Title>{ title }</Title>

      <Energy>{ energy.value + ' ' + energy.unit }</Energy>
    </Card>
  );
};

export default PlantCard;
