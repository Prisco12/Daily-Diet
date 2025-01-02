import styled from "styled-components/native";
import { MealStatus } from ".";

export const Container = styled.View`
    flex: 1;
`

export const Content = styled.View`
    flex: 1;
    width: 100%;
`

export const Row = styled.View`
    margin-bottom: 24px;
`

export const Tag = styled.View`
    width: 144px;
    height: 34px;

    padding: 8px 16px;

    justify-content: center;
    align-items: center;
    flex-direction: row;

    background-color: ${({theme}) => theme.colors.base.gray_6};
    border-radius: 1000px;
`

export const Status = styled.View<MealStatus>`
    width: 8px;
    height: 8px;

    margin-right: 8px;

    background-color: ${({theme, inOntheDiet}) => {
        return inOntheDiet ? theme.colors.brand.green_dark : theme.colors.brand.red_dark
        }};
    border-radius: 1000px;

`