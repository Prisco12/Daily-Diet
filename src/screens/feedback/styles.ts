import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 0 24px;

    background-color: ${({ theme }) => theme.colors.base.gray_7};
`