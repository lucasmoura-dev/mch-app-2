import React from 'react';

import { Text } from 'react-native';

const CapitalizedText: React.FC<any> = ({ children, ...props }) => {
  const capitalizeTheFirstLetterOfEachWord = (words) => {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      if (separateWord[i] !== 'de') {
        separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
      }

    }
    return separateWord.join(' ');
  };

  let text = capitalizeTheFirstLetterOfEachWord(children);


  return <Text {...props}>{text}</Text>;
};

export default CapitalizedText;
