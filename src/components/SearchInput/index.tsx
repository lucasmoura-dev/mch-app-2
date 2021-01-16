import React from 'react';

import { Text } from 'react-native';

import { RoundInput } from './styles';

type SearchInputProps = {
  placeholder?: string,
  onChangeText: any,
  value: string,
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChangeText, value}) => {
  return (
    <RoundInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
    />
  );
};

export default SearchInput;
