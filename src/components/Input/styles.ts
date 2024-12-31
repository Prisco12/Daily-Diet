import styled from "styled-components/native";
import { InputType } from ".";

export const Container = styled.View`
    flex-direction: column;
    flex: 1;
`

export const TextInput = styled.TextInput<InputType>`
    width: 100%;
    height: ${({height}) => height ? height : 50}px;

    border-radius: 6px;
    border-width: 1px;
    padding: 14px;
    align-items: flex-start;
	text-align: left;
    border-color: ${({theme}) => theme.colors.base.gray_5};
`