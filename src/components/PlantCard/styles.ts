import styled from 'styled-components/native';

export const CardHeader = styled.View`
    flex-direction: row;
    align-self: stretch;
    justify-content: center;
`;

export const InfoText = styled.Text`
    color: #FFFFFF;
    font-size: 14px;
`;

export const FirstInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const InfoValue = styled(InfoText)`
    margin-left: 5px;
`;

// export const WeatherInfo = styled.View`
//     flex-direction: row;
//     align-items: center;
// `;

// export const WeatherTemperature = styled(InfoText)`
//     margin-left: 5px;
// `;

// export const WeatherUnit = styled(InfoText)`
//     font-size: 10px;
// `;

export const Title = styled(InfoText)`
    font-weight: bold;
    font-size: 16px;
`;

export const Energy = styled(InfoText)``;

