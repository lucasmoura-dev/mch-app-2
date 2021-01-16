import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

type StatusIcon = {
  isOnline: number | boolean,
}

const StatusIcon: React.FC<StatusIcon> = ({ isOnline }) => {
  return (
    <Container>
      <MaterialCommunityIcons
        name={isOnline ? 'wifi' : 'wifi-off'}
        color={isOnline ? '#00be8a' : '#e95467'}
        size={22}
      />
    </Container>
  );
};

export default StatusIcon;
