import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    /* flex: 1; */
    /* flex-direction: row; */
    /* align-items: center; */
    /* justify-content: flex-start; */
`;

export const SvgWrapper = styled.View`
    position: absolute;
`;

export const OuterCircle = styled.View`
    height: 130px;
    width: 130px;
    /* background: #E6E4EE; */
    border-radius: 65px;
    justify-content: center;
    align-items: center;

    /* margin-left: 10px; */
    /* margin-top: 0px; */
`;

export const InnerCircle = styled.View`
    background: #FFF;
    height: 110px;
    width: 110px;
    flex: 0 0 auto;
    border-radius:  55px;
    align-items: center;
    justify-content: center;
`

export const InnerText = styled.Text`
    font-family: roboto_400;
    color: ${colors.primary};
`;

export const Label = styled(InnerText)`
    font-size: 16px;
`

export const Value = styled(InnerText)`
    margin-top: 5px;
    font-family: roboto_700;
    font-size: 22px;
`

export const Unit = styled(InnerText)`
    margin-top: 5px;
`

