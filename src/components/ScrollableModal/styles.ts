import styled from 'styled-components/native';

export const Container = styled.View`
    /* height: 400px; */
    height: 500px;
    background: #ffffff;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    /* padding-left: 25px; */
    /* padding-right: 25px; */
`;

export const Indicator = styled.View`
    width: 50px;
    height: 5px;
    background-color: #ccc;
    border-radius: 50px;
    align-self: center;
    margin-top: 5px;
`;

export const ScrollableModalContent = styled.View`
    height: 395px;
    padding-left: 25px;
    padding-right: 25px;
    /* padding-top: 50px; */

    flex-direction: row;

    align-items: flex-start;
    justify-content: center;

    /* background-color: yellow; */
`;



export const ScrollableModalText1 = styled.Text`
    font-size: 20px;
    color: white;
`;


// export const ScrollableModalContent2 = styled.View`
//     height: 200px;
//     background-color: #A9DCD3;
//     align-items: center;
//     justify-content: center;
// `;

// export const ScrollableModalText2 = styled.Text`
//     font-size: 20px;
//     color: white;
// `;
