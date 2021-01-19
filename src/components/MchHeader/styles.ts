import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.View`
    flex: 0 0 260px;
    padding-top: 10px;

`;

export const Background = styled.ImageBackground`
    flex: 1;
    opacity: 1;

    /* flex-direction: row; */
    padding-right: 15px;
    padding-left: 15px;

    flex-direction: column;
`;

export const HeaderMessageContent = styled.View`
    align-items: flex-end;
`;

export const HeaderMessage = styled.Text`
    color: ${colors.white};
    font-family: roboto_500;
    font-size: 22px;
`;

export const HeaderBody = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 10px;
`;

export const LogoContent = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  align-self: stretch;

  flex-grow: 1;

  /* background-color: yellow; */
`;

export const MCHLogoText = styled.Text`
  font-family: roboto_500;
  color: ${colors.black};
  font-size: 120px;
  font-weight: bold;
`;

export const ChartContent = styled.View`
    flex-direction: row;
    /* align-self: stretch; */

    justify-content: center;
    margin: 0 10px;


`;

export const MiniCardsContent = styled.View`
    flex-direction: row;
    /* align-items: space-between; */
    height: 42px;
    /* padding-bottom: 20px; */

    align-items: center;
    justify-content: space-between;
    align-self: stretch;
`;

export const MiniCard = styled.View`
    background-color: ${colors.white};
    height: 42px;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    width: 150px;
    border-radius: 5px;
`;

export const MiniCardInfos = styled.View`

`;

export const TotalIcon = styled.View`
    background-color: ${colors.blue};
    width: 36px;
    height: 36px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: 8px;
`;

export const EconomyIcon = styled.View`
    background-color: ${colors.green};
    width: 36px;
    height: 36px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: 8px;
`;

export const InfoLabel = styled.Text`
    color: ${colors.black};
`

export const InfoValue = styled.Text`
    color: ${colors.black};
    font-weight: bold;
    font-size: 16px;
`;

