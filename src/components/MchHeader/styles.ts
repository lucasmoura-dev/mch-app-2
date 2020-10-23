import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.View`
    flex: 0 0 260px;
    padding-top: 10px;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    opacity: 1;
`;

export const HeaderMessage = styled.Text`
    color: ${colors.white};
    font-family: roboto_500;
    font-size: 22px;
    align-self: flex-end;
    padding-right: 15px;
`;