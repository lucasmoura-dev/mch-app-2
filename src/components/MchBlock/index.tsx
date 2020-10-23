import React from 'react';
import { Text } from 'react-native';

import { 
  Container, BlockHeader, BlockContent, 
} from './styles';

import Heading from '../../components/Heading';

type MchBlockProps = {
  title: string,
}

const MchBlock: React.FC<MchBlockProps> = ({ title, children }) => {

  return (
    <Container>
      <BlockHeader>
        <Heading title={title} />
        <Text>Total</Text>
      </BlockHeader>
      <BlockContent>
        { children }
      </BlockContent>
    </Container>
  );
};

export default MchBlock;
