import { Typography } from "@components/Typhography";
import { BackButton, Container, Content, Header } from "./styles";
import React from "react";
import { ArrowLeft } from "phosphor-react-native";

type LayoutProps = {
    header: JSX.Element | string;
    children: React.ReactNode;
}

export function Layout({...props}: LayoutProps) {
    return (
        <Container>
            <Header>
                {typeof props.header === 'string' ? (
                    <>
                        <BackButton>
                            <ArrowLeft />
                        </BackButton>
                        <Typography>{props.header}</Typography>
                    </>
                    ) : (
                    <> {props.header} </>
                    )}
            </Header>
            <Content>
                {props.children}
            </Content>
        </Container>
    )
}