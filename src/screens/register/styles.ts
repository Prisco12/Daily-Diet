import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`
export const Form = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    width: 100%;
    margin-bottom: 20px;
`

export const Row = styled.View`
    margin: 12px 0px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`