import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
    background: ${colors.primary};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};

`;

export const HeaderContent = styled.View`
    flex: 0 0 260px;
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


export const Container = styled.View`
    padding: 14px;
    background: ${colors.white};
    flex: 1;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

export const CardsContent = styled.View`
    margin-top: 14px;
    flex-direction: row;
`;