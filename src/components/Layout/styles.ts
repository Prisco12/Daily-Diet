import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.brand.green_light};
`

export const Header = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    padding: 50px 24px 20px;
`
export const BackButton = styled.TouchableOpacity``

export const Content = styled.View`
    flex: 1;
    align-items: center;
    padding: 40px 24px;
    background-color: ${({theme}) => theme.colors.base.gray_7};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`