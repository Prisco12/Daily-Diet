import { Typography } from "@components/Typhography";
import { Container, TextInput } from "./styles";
import { useTheme } from "styled-components/native";
import { dateMask, hourMask } from "@utils/masks";
import { TextInputProps } from "react-native";


export type InputType = {
    height?: number;
}

export type InputProps = TextInputProps & InputType &{
    mask?: 'date' | 'hour';
    label: string;
    onInputMaskChange?: (value: string) => void;
    errorMessage?: string;
}

export function Input({mask, label, onInputMaskChange, ...props}: InputProps) {
    const { colors } = useTheme()

    function handleChange(text: string) {
		onInputMaskChange &&
			mask === 'date' &&
			onInputMaskChange(dateMask(text))
        onInputMaskChange &&
			mask === 'hour' &&
			onInputMaskChange(hourMask(text))
	}

    return (
        <Container style={props.style}>
            <Typography fontFamily="bold" fontSize="title_xs" textAlign="left" color="gray_2" lineHeight="md" style={{marginBottom: 4}}>{label}</Typography>
            <TextInput 
                placeholderTextColor={colors.base.gray_3}
                cursorColor={colors.base.gray_1}
                multiline={false}
                numberOfLines={1}
                maxLength={mask === 'date' ? 10 : mask === 'hour' ? 5 : 50}
                onChangeText={(text) => handleChange(text)}
                {...props}
            />
            {/* <Typography fontFamily="bold" fontSize="body_xs" color="red_dark" style={{marginBottom: -10}}>{props.errorMessage}</Typography> */}
        </Container>
    )
}