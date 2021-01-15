import React from 'react';
import { View, Text } from 'react-native';

import {
  Container, BlockHeader, BlockContent, HeaderSecondaryInfo, HeaderSecondaryInfoText,
} from './styles';

import Heading from '../../components/Heading';

type MchBlockProps = {
  title: string,
  total?: number
}

import { MaterialCommunityIcons } from '@expo/vector-icons';

const MchBlock: React.FC<MchBlockProps> = ({ title, children, total }) => {

  return (
    <Container>
      <BlockHeader>
        <Heading title={title} />
        { total &&
          <HeaderSecondaryInfo>
            <HeaderSecondaryInfoText>Total: { total }</HeaderSecondaryInfoText>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#9791A2" />
          </HeaderSecondaryInfo>
        }
      </BlockHeader>
      <BlockContent>
        { children }
      </BlockContent>
    </Container>
  );
};

export default MchBlock;
