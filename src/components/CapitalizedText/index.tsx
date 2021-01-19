import React from 'react';

import { Text } from 'react-native';

const CapitalizedText: React.FC<any> = ({ numberOfLines, children, ...props }) => {
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


  return <Text {...props} numberOfLines={numberOfLines || undefined}>{text}</Text>;
};

export default CapitalizedText;
