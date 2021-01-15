import React from 'react';

import { 
  Container, 
  Background, 
  HeaderMessage,
  ChartContent,
  InfoLabel,
  InfoValue,
  MiniCard,
  MiniCardInfos,
  TotalIcon,
  EconomyIcon,
  HeaderMessageContent,
  HeaderBody,
  MiniCardsContent
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
        <HeaderMessageContent>
          <HeaderMessage>
                { message }, { username }
          </HeaderMessage>
        </HeaderMessageContent>
        <HeaderBody>
          <ChartContent>
            <PotencyChart />
          </ChartContent>

          <MiniCardsContent>
            <MiniCard>
              <TotalIcon>
                <ChartIcon color="#FFFFFF" width={20} height={20} />
              </TotalIcon>
              <MiniCardInfos>
                <InfoLabel>Total (kWh)</InfoLabel>
                <InfoValue>75608</InfoValue>
              </MiniCardInfos>
            </MiniCard>

            <MiniCard>
              <EconomyIcon>
                <PiggyBank color="#FFFFFF"/>
              </EconomyIcon>
              <MiniCardInfos>
                <InfoLabel>Economia</InfoLabel>
                <InfoValue>R$ 68.047,20</InfoValue>
              </MiniCardInfos>
            </MiniCard>
          </MiniCardsContent>

          
          
        </HeaderBody>
      </Background> 
    </Container>
  );
};

export default MchHeader;
