import styled from "styled-components/native";
import { SelectStyle } from ".";

export const Container = styled.Pressable<SelectStyle>`
    width: 100%;
    height: 50px;
    background-color: ${({theme, bg, isSelected}) => {
        return isSelected 
            ? bg === 'green' 
                ? theme.colors.brand.green_light
                : theme.colors.brand.red_light
            : theme.colors.base.gray_6
    }};

    border-color: ${({theme, bg, isSelected}) => {
        return isSelected 
            ? bg === 'green' 
                ? theme.colors.brand.green_dark
                : theme.colors.brand.red_dark
            : theme.colors.base.gray_6
    }};

    border-width: 1px;
    border-radius: 6px;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const Status = styled.View<SelectStyle>`
    width: 8px;
    height: 8px;

    border-radius: 8px;

    margin-right: 6px;

    background-color: ${({bg, theme}) => 
        bg === 'green' 
            ? theme.colors.brand.green_dark 
            : theme.colors.brand.red_dark};
`
