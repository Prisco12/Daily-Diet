import { Typography } from "@components/Typhography";
import { ButtonToStaticLeft, ButtonToStaticRight, Container, IconArrowUpLeft, IconArrowUpRight } from "./styles";
import { ViewProps } from "react-native";
import { FontSizeTitle } from "@components/Typhography/types";

export type TextSize = { titleFontSize?: FontSizeTitle; }

export type CardColor = { bg?: 'gray' | 'green' | 'red'; }

export type ButtonFloatProps = {iconPosition?: 'left' | 'right';}

type CardProps = ViewProps & 
    CardColor & 
    TextSize & 
    ButtonFloatProps & {
        title: string;
        subtitle: string;
        showIconButton?: boolean;
        onPress?: () => void;
    }

export function Card({
    bg = 'gray', 
    titleFontSize = 'title_lg', 
    iconPosition = 'right',
    showIconButton = true,
    ...props}: CardProps) {
    return (
        <Container bg={bg} {...props}>
            { showIconButton && 
                (iconPosition === 'left' ? (
                    <ButtonToStaticLeft onPress={props.onPress}>
                        <IconArrowUpLeft bg={bg}/>
                    </ButtonToStaticLeft>
                ) : (
                    <ButtonToStaticRight onPress={props.onPress}>
                        <IconArrowUpRight bg={bg}/>
                    </ButtonToStaticRight>
                ))
            }

            <Typography 
                fontSize={titleFontSize} 
                color="gray_1"
                fontFamily="bold"
                lineHeight="lg"
                >
                {props.title}
            </Typography>
            <Typography 
                fontSize="body_sm" 
                color="gray_2"
                fontFamily="regular"
                >
                {props.subtitle}
            </Typography>
        </Container>
    )
}