import { TextProps } from "react-native";
import { Container } from "./styles";
import theme from "@theme";
import * as T from "./types";
import { Line } from "react-native-svg";


export type TypographyStyle = {
    textAlign?: T.TextAlign;
    fontFamily?: T.FontFamily;
    lineHeight?: T.LineHeight;
    fontSize?: T.FontSizes;
    color?: T.Colors;
}

type TypographyProps = TextProps & TypographyStyle;

export function Typography({...props}: TypographyProps) {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}