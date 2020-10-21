import React, { useState } from 'react';

import { 
  Wrapper, 
  Container
} from './styles';

import { SvgXml } from 'react-native-svg';

import MchHeader from '../../components/MchHeader';
import MchBlock from '../../components/MchBlock';
import ChipList from '../../components/ChipList';


const Home: React.FC = () => {
  


  const buttons = [
    { id: 'status', title: 'Status' },
    { id: 'cities', title: 'Cidades' },
    { id: 'brands', title: 'Marcas' },
  ];
  

  const onChangeIndex = (selected: string) => {
    console.log(`Trocou para ${selected}`)
  } 

  return (
    
    <Wrapper>
        <MchHeader message="Boa tarde" username="Jéssica"/>
        
        <Container>
          <MchBlock title="Estatísticas">
            <ChipList data={buttons} selectCallback={onChangeIndex} />
            {/* { <ButtonGroup
              onPress={onChangeIndex}
              buttons={buttons}
              textStyle={{ color: '#9791A2', fontWeight: 'bold' }}

              buttonStyle={{ borderRadius: 20, backgroundColor: 'transparent' }}

              innerBorderStyle={{ width: 0 }}

              containerStyle={{ margin: 0, backgroundColor: 'orange' }}
              
              
              selectedButtonStyle={{ backgroundColor: '#E7E7F0'}}
              selectedTextStyle={{ color: 'black' }}
              
              selectedIndex={index}
               /> } */}
          </MchBlock>

          
        </Container>
    </Wrapper>
  );
};

export default Home;
