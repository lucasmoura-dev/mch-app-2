import styled from 'styled-components/native';

type ActiveProps = {
    isActive: boolean
}

export const Container = styled.View`
    flex-direction: row;
`;

export const ChipButton = styled.TouchableOpacity<ActiveProps>`
    background: ${ props => props.isActive ? '#E7E7F0' : 'transparent' };
    margin-right: 5px;
    height: 40px;
    padding: 0 20px;
    justify-content: center;
    border-radius: 20px;
`;

export const ChipContent = styled.View<ActiveProps>`
    background: ${ props => props.isActive ? '#E7E7F0' : 'transparent' };
    flex-grow: 0;
    margin-right: 15px;
    height: 40px;
    padding: 0 20px;
    justify-content: center;
    border-radius: 20px;
`;

export const ChipText = styled.Text<ActiveProps>`
    color: ${ props => props.isActive ? '#000014' : '#9791A2' };
    font-family: roboto_700;
    font-size: 16px;
`
