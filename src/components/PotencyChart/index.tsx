import React from 'react';

import { SvgXml } from 'react-native-svg';

import HalfCircle from '../../images/svg/half_circle';
import Loading from '../../images/animations/light_blue_circle3.json';
import BigLoading from '../../images/animations/white_loading3.json';
import Bubble from '../../images/animations/bubble3.json';
// import Loading from '../../images/animations/circular_gradient.json';

import LottieView from 'lottie-react-native';

import { 
  Container, 
  Label, 
  Value, 
  Unit,
  InnerCircle,
  OuterCircle,
  SvgWrapper,
} from './styles';

const PotencyChart: React.FC = () => {
  return (
    <Container>
      {/* <SvgWrapper>
        <SvgXml xml={HalfCircle} />
      </SvgWrapper> */}


      <SvgWrapper> 
      </SvgWrapper>

      <OuterCircle>
        <LottieView source={BigLoading} autoPlay loop={true} speed={0.2}/> 
        <InnerCircle>
          
        <LottieView source={Bubble} autoPlay loop={true} speed={0.4}/>
          <LottieView source={Loading} autoPlay loop={true} speed={0.8}/>
          
          <Label>Hoje</Label>
          <Value>298,4</Value>
          <Unit>kWh</Unit>
          
        </InnerCircle>
      </OuterCircle>
    </Container>
  );
};

export default PotencyChart;
