import styled from "styled-components/native";
import { ButtonProps } from ".";
import { Typography } from "@components/Typhography";

export const Container = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    height: 50px;
    padding: 16px 24px;

    border-radius: 6px;

    justify-content: center;
    align-items: center;
    flex-direction: row;

    border-width: 1px;
    background-color: ${({theme, type, isActive}) => {
        if( type === 'solid') {
            return isActive ? theme.colors.base.gray_1 : theme.colors.base.gray_2;
        }
        if( type === 'outline') {
            return isActive ? 'transparent' : theme.colors.base.gray_5;
        }
    }};
    border-color: ${({theme, type}) => {
        return type === 'outline' ? theme.colors.base.gray_1 : 'transparent';
    }};
    border-style: solid;
`

export const Title = styled(Typography).attrs<ButtonProps>(({type}) => ({
    fontFamily: 'bold',
    color: type === 'solid' ? 'white' : 'gray_1',
}))<ButtonProps>`
    margin: 0 12px;
`

// export const Icon = styled.Image.attrs({source: })``