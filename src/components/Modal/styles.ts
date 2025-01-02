import styled from "styled-components/native";

export const Container = styled.Modal``

export const Centered = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.25);
`
export const Row = styled.View`
    width: 100%;
    margin-top: 32px;
    flex-direction: row;
`

export const ModalView = styled.View`
    width: 327px;
    background-color: ${({theme}) => theme.colors.base.white};
    padding: 32px;
    border-radius: 8px;
` 