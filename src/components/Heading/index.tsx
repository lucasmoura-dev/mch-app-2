import React from 'react';

import { HeadingText, BoldText } from './styles';

type HeadingProps = {
  title: string,
}

const Title: React.FC<HeadingProps> = ({ title }) => {
  const splittedTitle = title.split(' ');
  let [primaryTitle, ...remainder] = splittedTitle;
  const secondaryTitle = remainder.join(' ');
  
  return (
    <HeadingText>
      <BoldText>{ splittedTitle[0] }</BoldText> {secondaryTitle}
    </HeadingText>
  );
};

export default Title;
