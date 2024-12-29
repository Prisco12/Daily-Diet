import { Typography } from "@components/Typhography";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";


export type ButtonType = {
    type?: 'solid' | 'outline';
    isActive?: boolean;

}

export type ButtonProps =  TouchableOpacityProps & ButtonType &{
    title: string;
    icon?: React.ReactNode;
}

export function Button({type = 'solid', isActive = true, ...props}: ButtonProps) {
    return (
        <Container type={type} isActive={isActive} disabled={!isActive} {...props}>
            {props.icon && props.icon}
            <Title type={type} {...props}>{props.title}</Title>
        </Container>
    )
}