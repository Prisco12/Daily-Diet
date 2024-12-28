import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    padding: 16px 24px;

    border-radius: 6px;

    text-align: center;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.base.gray_1};
    color: ${({theme}) => theme.colors.base};
`