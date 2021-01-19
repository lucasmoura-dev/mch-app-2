import React from 'react';

import HalfCircle from '../../images/svg/half_circle';
// import Loading from '../../images/animations/light_blue_circle3.json';
import Loading from '../../images/animations/red_small_circle.json';
// import BigLoading from '../../images/animations/white_loading3.json';
import BigLoading from '../../images/animations/red_big_circle.json';
import Bubble from '../../images/animations/bubble3.json';
// import Loading from '../../images/animations/circular_gradient.json';

import { Image } from 'react-native';
import CFromMCH from '../../images/mch_c.png';
import LottieView from 'lottie-react-native';

import {
  Container,
  Label,
  Value,
  Unit,
  InnerCircle,
  OuterCircle,
  LetterC,
  ChartContent,
  TextContent,
} from './styles';

type PotencyChartProps = {
  value?: number | string;
  unit?: string;
};

const PotencyChart: React.FC<PotencyChartProps> = ({ value, unit }) => {
  value = value || '0';
  unit = unit || 'mWh';

  return (
    <Container>
      <OuterCircle>
        <LetterC source={CFromMCH} resizeMode="stretch">
          <InnerCircle>
            <LottieView source={Loading} autoPlay loop={true} speed={0.8} />
            <TextContent>
              <Label>Hoje</Label>
              <Value>{value}</Value>
              <Unit>{unit}</Unit>
            </TextContent>

          </InnerCircle>
        </LetterC>
        {/*<LottieView source={BigLoading} autoPlay loop={true} speed={0.2} progress={0.45} /> */}
        {/* <InnerCircle>
          <LottieView source={Bubble} autoPlay loop={true} speed={0.4} />
          <LottieView source={Loading} autoPlay loop={true} speed={0.8} />

          <Label>Hoje</Label>
          <Value>{value}</Value>
          <Unit>{unit}</Unit>
        </InnerCircle> */}
      </OuterCircle>
    </Container>
  );
};

export default PotencyChart;
