import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const HeadingText = styled.Text`
    color: ${colors.black};
    font-family: roboto_400;
    font-size: 20px;
`;

export const BoldText = styled(HeadingText)`
    font-weight: bold;
`

