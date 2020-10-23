import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HeaderContent, CardText, Container, Content } from './styles';

type CardProps = {
  // header?: JSX.Element,
  headerIcon?: string,
  title?: string | JSX.Element,
  footer?: string,
  background?: string,
  color?: string,
  alignment?: string,
};

const Card: React.FC<CardProps> = ({ children, footer, headerIcon, title, background, color, alignment }) => {

  const renderHeaderIcon = () => {
    if (typeof headerIcon === 'string') {
      return <MaterialCommunityIcons name={headerIcon} size={20} color='white'/>
    }
  }

  const renderFooter = () => {
    if (typeof footer === 'string') {
      return <CardText>{ footer }</CardText>
    }
  }

  const renderSimpleCard = () => {
    return (
      <>
        <HeaderContent>
          { headerIcon && renderHeaderIcon() }
        </HeaderContent>
        <CardText color={color} isBold={true} size={18} >{ title }</CardText>
        { renderFooter() }
      </>
    );
  }

  return (
    <Container>
      <Content background={background} alignment={alignment} >
        { children ? children : renderSimpleCard() }
      </Content>
    </Container>
  );
};

export default Card;
