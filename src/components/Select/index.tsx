import { PressableProps } from "react-native";
import { Container, Status } from "./styles";
import { Typography } from "@components/Typhography";

export type SelectStyle = {
    bg?: 'green' | 'red';
    isSelected?: boolean;
}

type SelectProps = PressableProps & SelectStyle & {
    title: string;
}

export function Select({...props}: SelectProps) {
    return (
        <Container {...props}>
            <Status bg={props.bg} isSelected={props.isSelected}/>
            <Typography fontFamily="bold" fontSize="title_xs" textAlign="center">{props.title}</Typography>
        </Container>
    )
}