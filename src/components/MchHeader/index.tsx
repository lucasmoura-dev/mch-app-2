import React, { useState } from 'react';

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
  generationToday?: number | string,
  generationTotal?: number | string,
  economy: number,
}

const MchHeader: React.FC<HeaderProps> = ({ message, username, generationToday, generationTotal, economy }) => {
  const [generationTotalUnit, setGenerationTotalUnit] = useState('kWh');
  const [generationTodayUnit, setGenerationTodayUnit] = useState('mWh');
  generationToday = generationToday || 0;
  generationTotal = generationTotal || 0;
  economy = economy || 0;

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
            <PotencyChart value={generationToday} unit={generationTodayUnit} />
          </ChartContent>

          <MiniCardsContent>
            <MiniCard>
              <TotalIcon>
                <ChartIcon color="#FFFFFF" width={20} height={20} />
              </TotalIcon>
              <MiniCardInfos>
                <InfoLabel>Total ({generationTotalUnit})</InfoLabel>
                <InfoValue>{ generationTotal }</InfoValue>
              </MiniCardInfos>
            </MiniCard>

            <MiniCard>
              <EconomyIcon>
                <PiggyBank color="#FFFFFF"/>
              </EconomyIcon>
              <MiniCardInfos>
                <InfoLabel>Economia</InfoLabel>
                <InfoValue>R$ { economy }</InfoValue>
              </MiniCardInfos>
            </MiniCard>
          </MiniCardsContent>



        </HeaderBody>
      </Background>
    </Container>
  );
};

export default MchHeader;
