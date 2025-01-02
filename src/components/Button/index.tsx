import { Typography } from "@components/Typhography";
import { Container } from "./styles";
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
           <Typography
				color={type === 'solid' ? 'white' : 'gray_1'}
				fontFamily="bold"
                lineHeight="sm"
                fontSize="body_sm"
				style={{ marginHorizontal: 12 }}
			>
				{props.title}
			</Typography>
        </Container>
    )
}