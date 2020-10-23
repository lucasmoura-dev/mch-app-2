import styled from 'styled-components/native';

export const CardHeader = styled.View`
    flex-direction: row;
    align-self: stretch;
    justify-content: space-between;
`;

export const InfoText = styled.Text`
    color: #FFFFFF;
    font-size: 14px;
`;

export const PlantsInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const PlantAmount = styled(InfoText)`
    margin-left: 5px;
`;

export const WeatherInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const WeatherTemperature = styled(InfoText)`
    margin-left: 5px;
`;

export const WeatherUnit = styled(InfoText)`
    font-size: 10px;
`;

export const City = styled(InfoText)`
    font-weight: bold;
    font-size: 18px;
`;

export const Energy = styled(InfoText)``;


