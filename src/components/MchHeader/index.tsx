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
  MiniCardsContent,
  LogoContent,
  MCHLogoText,
} from './styles';

import NatureBackground from '../../images/path4349.png';
import PotencyChart from '../PotencyChart';

import ChartIcon from '../../images/svg/icon_chart';
import PiggyBank from '../../images/svg/icon_piggy_bank';

type HeaderProps = {
  message: string;
  username: string;
  generationToday?: { value: number | string; unit: string };
  generationTotal?: { value: number | string; unit: string };
  economy: number;
};

const MchHeader: React.FC<HeaderProps> = ({
  message,
  username,
  generationToday,
  generationTotal,
  economy,
}) => {
  // const [generationTotalUnit, setGenerationTotalUnit] = useState('kWh');
  // const [generationTodayUnit, setGenerationTodayUnit] = useState('mWh');
  generationToday = generationToday || { value: 0, unit: 'mWh' };
  generationTotal = generationTotal || { value: 0, unit: 'mWh' };
  economy = economy || 0;

  return (
    <Container>
      <Background
        source={NatureBackground}
        imageStyle={{ opacity: 0.1, resizeMode: 'stretch' }}
      >
        <HeaderMessageContent>
          {/* <HeaderMessage>
                { message }, { username }
          </HeaderMessage> */}
        </HeaderMessageContent>
        <HeaderBody>
          <LogoContent>
            <MCHLogoText>M</MCHLogoText>
            <ChartContent>
              <PotencyChart
                value={generationToday.value}
                unit={generationToday.unit}
              />
            </ChartContent>
            <MCHLogoText>H</MCHLogoText>
          </LogoContent>

          <MiniCardsContent>
            <MiniCard>
              <TotalIcon>
                <ChartIcon color="#FFFFFF" width={20} height={20} />
              </TotalIcon>
              <MiniCardInfos>
                <InfoLabel>Total ({generationTotal.unit})</InfoLabel>
                <InfoValue>{generationTotal.value}</InfoValue>
              </MiniCardInfos>
            </MiniCard>

            <MiniCard>
              <EconomyIcon>
                <PiggyBank color="#FFFFFF" />
              </EconomyIcon>
              <MiniCardInfos>
                <InfoLabel>Economia</InfoLabel>
                <InfoValue>R$ 666,1 M</InfoValue>
              </MiniCardInfos>
            </MiniCard>
          </MiniCardsContent>
        </HeaderBody>
      </Background>
    </Container>
  );
};

export default MchHeader;
