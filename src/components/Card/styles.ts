import styled from "styled-components/native";
import { CardColor } from ".";
import { ArrowLeft, ArrowUpLeft, ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View<CardColor>`
    width: 100%;
    height: 102px;

    align-items: center;
    justify-content: center;

    border-radius: 8px;
    padding: 20px 16px;

    position: relative;

    background-color: ${({theme, bg}) => {
        const { colors } = theme

        if (bg === 'gray') return colors.base.gray_6
        if (bg === 'green') return colors.brand.green_light
        if (bg === 'red') return colors.brand.red_light
    }};
`
export const ButtonToStaticRight = styled.TouchableOpacity`
    position: absolute;
    right: 8px;
    top: 8px;
`

export const ButtonToStaticLeft = styled.TouchableOpacity`
    position: absolute;
    left: 8px;
    top: 8px;
`

export const IconArrowUpRight = styled(ArrowUpRight).attrs<CardColor>(
    ({theme, bg}) => ({
        size: 24,
        color: bg === 'green' ? theme.colors.brand.green_dark : bg === 'red' ? theme.colors.brand.red_dark : theme.colors.base.gray_1
    })
)<CardColor>``

export const IconArrowUpLeft = styled(ArrowLeft).attrs<CardColor>(
    ({theme, bg}) => ({
        size: 24,
        color: bg === 'green' ? theme.colors.brand.green_dark : bg === 'red' ? theme.colors.brand.red_dark : theme.colors.base.gray_1
    })
)<CardColor>``

