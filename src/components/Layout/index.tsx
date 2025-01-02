import { Typography } from "@components/Typhography";
import { BackButton, Container, Content, Header } from "./styles";
import React from "react";
import { ArrowLeft } from "phosphor-react-native";
import { Text, ViewProps, ViewStyle } from "react-native";

export type LayoutColor = {
    bg?: 'gray' | 'green' | 'red';
}

type LayoutProps = LayoutColor & {
    header: JSX.Element | string;
    children: React.ReactNode;
    onPressBrack?: () => void;
    style?: ViewStyle;
}

export function Layout({bg = 'gray', ...props}: LayoutProps) {
    return (
        <Container bg={bg}>
            <Header>
                {typeof props.header === 'string' ? (
                    <>
                        <BackButton style={{width: '15%'}} onPress={props.onPressBrack}>
                            <ArrowLeft />
                        </BackButton>
                        <Typography fontFamily="bold" fontSize="title_sm" lineHeight="lg" textAlign="center" style={{width: '60%'}} >{props.header}</Typography>
                        <Typography style={{width: '15%'}} />
                    </>
                    ) : (
                    <>
                        {props.header}
                    </>
                    )}
            </Header>
            <Content style={props.style}>
                {props.children}
            </Content>
        </Container>
    )
}