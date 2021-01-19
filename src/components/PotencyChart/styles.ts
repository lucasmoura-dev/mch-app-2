import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    /* flex: 1; */
    /* flex-direction: row; */
    /* align-items: center; */
    /* justify-content: flex-start; */
`;


export const ChartContent = styled.View`
  background-color: blue;

`;

export const LetterC = styled.ImageBackground`
    flex: 1;
    opacity: 1;
    /* padding-left: 15px; */
    width: 100px;

    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

export const OuterCircle = styled.View`
    height: 115px;
    width: 80px;
    justify-content: center;
    align-items: center;

`;

export const InnerCircle = styled.View`
    width: 85px;
    height: 85px;
    /* width: 50px; */
    /* flex: 0 0 auto; */
    border-radius: 45px;
    align-items: center;
    justify-content: center;

    /* background-color: orange; */

    /* padding: 2px; */
    margin-left: 13px;
`;

export const TextContent = styled.View`
  /* flex: 1; */
  /* height: 75px; */
  /* height: 60px; */
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`;

export const InnerText = styled.Text`
    font-family: roboto_400;
    color: ${colors.primary};
`;

export const Label = styled(InnerText)`
    font-size: 16px;
    color: ${colors.inactive};
`

export const Value = styled(InnerText)`
    margin-top: 5px;
    font-family: roboto_700;
    font-size: 16px;
`

export const Unit = styled(InnerText)`
    margin-top: 5px;
    color: ${colors.inactive};
`

