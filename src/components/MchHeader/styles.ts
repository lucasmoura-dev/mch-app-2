import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.View`
    flex: 0 0 260px;
    padding-top: 10px;

`;

export const Background = styled.ImageBackground`
    flex: 1;
    opacity: 1;

    flex-direction: row;
    padding-right: 15px;
    padding-left: 15px;
`;

export const ChartContent = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const InfoContent = styled.View`
    
`;

export const MiniCard = styled.View`
    background-color: #FFFFFF;
    height: 42px;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    width: 160px;
    border-radius: 5px;

    margin-bottom: 20px;
`;

export const MiniCardInfos = styled.View`
    
`;

export const TotalIcon = styled.View`
    background-color: #0A96CC;
    width: 36px;
    height: 36px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: 8px;
`;

export const EconomyIcon = styled.View`
    background-color: #00BE8A;
    width: 36px;
    height: 36px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: 8px;
`;

export const InfoLabel = styled.Text`
    color: ${colors.primary};
`

export const InfoValue = styled.Text`
    color: ${colors.primary};
    font-weight: bold;
    font-size: 16px;
`;

export const HeaderMessage = styled.Text`
    color: ${colors.white};
    font-family: roboto_500;
    font-size: 22px;
    align-self: flex-end;
    /* padding-right: 15px; */

    margin-bottom: 40px;
`;