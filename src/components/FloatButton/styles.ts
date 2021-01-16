import styled from 'styled-components/native';

import { FAB } from 'react-native-paper';

import colors from  '../../styles/colors';

export const Button = styled(FAB)`
    position: absolute;
    margin: 16px;
    right: 0px;
    bottom: 0px;
    background-color: ${colors.primary};
    z-index: 2;
`;
