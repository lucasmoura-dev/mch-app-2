import React from 'react';
import { Text } from 'react-native';

import { 
  Container, 
  Background, 
  HeaderMessage,
  ChartContent,
  InfoContent,
  InfoLabel,
  InfoValue,
  MiniCard,
  MiniCardInfos,
  TotalIcon,
  EconomyIcon
} from './styles';

import NatureBackground from '../../images/path4349.png';
import PotencyChart from '../PotencyChart';

import ChartIcon from '../../images/svg/icon_chart';
import PiggyBank from '../../images/svg/icon_piggy_bank';

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
        <ChartContent>
          <PotencyChart />
        </ChartContent>
        <InfoContent>
          <HeaderMessage>
              { message }, { username }
          </HeaderMessage>
          <MiniCard>
            <TotalIcon>
              <ChartIcon color="#FFFFFF" width={20} height={20} />
            </TotalIcon>
            <MiniCardInfos>
              <InfoLabel>Total (kWh)</InfoLabel>
              <InfoValue>9208</InfoValue>
            </MiniCardInfos>
          </MiniCard>

          <MiniCard>
            <EconomyIcon>
              <PiggyBank color="#FFFFFF"/>
            </EconomyIcon>
            <MiniCardInfos>
              <InfoLabel>Economia</InfoLabel>
              <InfoValue>R$ 8979,59</InfoValue>
            </MiniCardInfos>
          </MiniCard>
          
          
        </InfoContent>
      </Background> 
    </Container>
  );
};

export default MchHeader;
