import React from 'react';
import { Text } from 'react-native';

import { 
  Container, 
  Background, 
  HeaderMessage
} from './styles';

import NatureBackground from '../../images/path4349.png';
import PotencyChart from '../PotencyChart';

type HeaderProps = {
  message: string,
  username: string,
}

const MchHeader: React.FC<HeaderProps> = ({ message, username }) => {
  return (
    <Container>
      <Background 
        source={NatureBackground}
        imageStyle={{ opacity: 0.1, resizeMode: 'stretch' }}
      >
        <HeaderMessage>
            { message }, { username }
        </HeaderMessage>
        <PotencyChart />
      </Background> 
    </Container>
  );
};

export default MchHeader;
