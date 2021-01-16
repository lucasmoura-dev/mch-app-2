import React from 'react';

import { Text } from 'react-native';

import { Button } from './styles';

type FloatButton = {
  onPress: () => any,
  icon: string
}

const FloatButton: React.FC<FloatButton> = ({ onPress, icon }) => {
  return (
    <Button
      icon={icon}
      onPress={onPress}
    />
  );
};

export default FloatButton;
