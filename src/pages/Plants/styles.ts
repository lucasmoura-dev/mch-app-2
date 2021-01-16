import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    padding: 15px;
`;

export const TabHeader = styled.View`

`

export const FiltersContainer = styled.View`
    flex: 1;
`;

export const FilterHeaderContent = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ModalHeader = styled.Text`
    font-size: 26px;
    color: #0D134E;
    font-weight: bold;
`;

export const FiltersReset = styled.Text`
    font-size: 16px;
    color: #9791A2;
`;

export const ModalFooter = styled.View`
    border-top-color: #f7f7f7;
    border-top-width: 2px;

    padding: 10px 25px;

    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonApplyFilters = styled.TouchableOpacity`
    height: 36px;
    border-radius: 20px;
    background-color: #2699FB;
    justify-content: center;
    align-items: center;
    flex: 1;

    margin-left: 20px;
`;

export const ButtonResetFilters = styled(ButtonApplyFilters)`
    background-color: #ffffff;
    border-width:  2px;
    border-color: #c3c3c3;
    border-radius: 20px;

    margin-left: 0px;
`;

export const FilterType = styled.View`
    margin-top: 20px;
`;

export const FilterTypeLabel = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #0D134E;
    margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    /* font-weight: bold; */
`;

export const ButtonTextReset = styled(ButtonText)`
    color: #9c9c9c;
`;

export const RadioButtonContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    /* border-bottom-color: #ebe6e6; */
    /* border-bottom-width: 1px; */
`;

export const RadioButtonLabel = styled.Text`
    font-size: 16px;
`;
