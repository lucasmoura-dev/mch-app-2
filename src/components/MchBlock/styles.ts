import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    padding: 10px 0 20px;
`;

export const BlockHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const BlockContent = styled.View`
    /* background: yellow; */
    margin-top: 10px;
    padding-left: 0px;
`;

export const HeaderSecondaryInfo = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const HeaderSecondaryInfoText = styled.Text`
    color: #9791A2;
`;
