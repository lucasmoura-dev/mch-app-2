import React, { useState } from 'react';

import { Container, ChipButton, ChipText, ChipContent } from './styles';

type ChipProps = {
  id: string,
  title: string,
  isActive?: boolean,
  handleSelect?: Function,
}

type DataProps = { id: string, title: string };

type ChipListProps = {
  data: DataProps[],
  selectCallback?: Function,
}



const Chip: React.FC<ChipProps> = ({ id, title, isActive, handleSelect }) => {
  
  const onPressChip = (id: string) => {
    if (handleSelect) {
      handleSelect(id)
    }
  };
  
  return (
      <ChipButton 
        onPress={ () => onPressChip(id) } 
        activeOpacity={0.8}
        isActive={isActive}
      >
        <ChipText isActive={isActive}>{ title }</ChipText>
      </ChipButton>
      // <ChipContent isActive={isActive}>
      //   <ChipText isActive={isActive}>{ text }</ChipText>
      // </ChipContent>
  );
};

const ChipList: React.FC<ChipListProps> = ({ data, selectCallback }) => {
  const [selected, setSelected] = useState(data[0].id || '');

  const handleSelect = (id: string) => {
    if (selected === id) 
      return;

    setSelected(id);
    
    if (selectCallback) {
      selectCallback(id);
    }
  };

  return (
    <Container>
      {
        data.map(el => {
          return <Chip 
            key={el.id} 
            id={el.id} 
            title={el.title} 
            handleSelect={handleSelect} 
            isActive={selected === el.id}
          />
        })
      }
      {/* <Chip id="status" title="Status" isActive={true}/>
      <Chip id="cities" title="Cidades"/>
      <Chip id="brands" title="Marcas"/> */}
    </Container>
  );
}

export default ChipList;
