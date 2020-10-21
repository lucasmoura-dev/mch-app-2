import styled from 'styled-components/native';
import colors from '../../styles/colors';

type ActiveProps = {
    isActive: boolean
}

export const Container = styled.View`
    flex-direction: row;
`;

export const ChipButton = styled.TouchableOpacity<ActiveProps>`
    background: ${ props => props.isActive ? colors.secondaryBackground : 'transparent' };
    margin-right: 15px;
    height: 40px;
    padding: 0 20px;
    justify-content: center;
    border-radius: 20px;
`;

export const ChipContent = styled.View<ActiveProps>`
    background: ${ props => props.isActive ? colors.secondaryBackground : 'transparent' };
    flex-grow: 0;
    margin-right: 15px;
    height: 40px;
    padding: 0 20px;
    justify-content: center;
    border-radius: 20px;
`;

export const ChipText = styled.Text<ActiveProps>`
    color: ${ props => props.isActive ? colors.black : colors.inactive };
    font-family: roboto_700;
    font-size: 16px;
`