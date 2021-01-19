import styled from 'styled-components/native';
import colors from '../../styles/colors';

type StyleProps = { background?: string, alignment?: string };
type TextProps = { color?: string, isBold?: boolean, size?: number };

export const Container = styled.View`
    width: 160px;
    padding-right: 15px;
    background: ${colors.white};
`;

export const HeaderContent = styled.View`
    align-self: center;
`;

export const Content = styled.TouchableOpacity<StyleProps>`
    /* background: ${p => p.background || '#00BE8A'}; */
    border-color: ${p => p.background || colors.green };
    border-width: 2px;
    height: 90px;
    border-radius: 12px;
    padding: 8px;
    align-items: ${p => p.alignment || 'flex-start' };
    justify-content: space-between;
`;

export const CardText = styled.Text<TextProps>`
    align-self: center;
    color:  ${colors.black};
    /* color: ${props => props.color ? props.color : '#FFFFFF' }; */
    font-weight: ${props => props.isBold ? 'bold' : 'normal' };
    font-size: ${props => props.size ? (props.size + 'px') : '14px' };;
`;
