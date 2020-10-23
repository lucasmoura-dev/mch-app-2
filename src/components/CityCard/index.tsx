import React from 'react';
import { Text, Image } from 'react-native';

import { CardHeader, WeatherInfo, WeatherUnit, InfoText, PlantsInfo, City, Energy, PlantAmount, WeatherTemperature } from './styles';

import Card from '../Card';

import PlantsIcon from '../../images/svg/icon_plants';


type Weather = { type: string, temperature: number };
type Energy = { value: number, unit: string };

type CardProps = {
  city: string,
  plants: number,
  weather?: Weather,
  energy: Energy,
};



const CityCard: React.FC<CardProps> = ({ city, plants, weather, energy }) => {

  return (
    <Card background="#1F211D" alignment="center">
      <CardHeader>
        <PlantsInfo>
          <PlantsIcon color="#FFFFFF" width={20} />
          <PlantAmount>{ plants }</PlantAmount>
        </PlantsInfo>
        
        {/* <WeatherInfo>
          <PlantsIcon color="#FFFFFF" width={18} />
          <WeatherTemperature>{ weather ? weather.temperature : '32' }</WeatherTemperature>
          <WeatherUnit>°C</WeatherUnit>
        </WeatherInfo> */}
      </CardHeader>
      
      <City>{ city }</City>
      
      <Energy>{ energy.value + ' ' + energy.unit }</Energy>
    </Card>
  );
};

export default CityCard;
