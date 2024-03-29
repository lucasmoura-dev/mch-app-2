import styled from 'styled-components/native';

import colors from '../../styles/colors';

interface RowContentProps {
  isAlternativeColor: boolean
  isSelected?: boolean
}

export const Container = styled.View`

`;

export const Header = styled.ScrollView`

`;

export const HeaderContent = styled.View`
    flex-direction: row;
    height: 40px;
    padding: 0 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.black};
`;

export const ColumnContainer = styled.TouchableOpacity`
    height: 30px;
`;

type HeaderColumnProps = {
  width?: number
}

export const HeaderColumn = styled.View<HeaderColumnProps>`
    /* margin-right: 15px;
    padding: 5px 15px; */
    flex-direction: row;
    padding: 5px 0;
    justify-content: center;
    align-items: center;
`;

export const HeaderText = styled.Text`
    /* text-align: center; */
    font-weight: bold;
    /* color: #0D134E; */
    color: ${colors.black}
    margin-right: 5px;
    font-family: roboto_400;
    font-size: 16px;
`;

export const TableContent = styled.View`
    flex-direction: column;
`;

export const RowContent = styled.View<RowContentProps>`
    flex-direction: row;
    height: 50px;
    background-color: ${p => p.isAlternativeColor ? '#fbfbfc' : colors.white};
    padding: 0 10px;
    border-top-color: #f2f3f5;
    border-top-width: 1px;
    border-radius: 6px;
`;

export const TableText = styled.Text`
  font-family: roboto_400;
  font-size: 16px;
`;

type ColumnProps = {
  key?: number | string,
  width?: number,
}

export const Column = styled.View<ColumnProps>`
    /* margin-right: 15px;
    padding: 5px 15px; */

    font-weight: 100;
    justify-content: center;
    align-items: center;


`;
