import { Typography } from "@components/Typhography";
import { Container, Content, Header } from "./styles";
import React from "react";

type LayoutProps = {
    header: JSX.Element | string;
    children: React.ReactNode;
}

export function Layout({...props}: LayoutProps) {
    return (
        <Container>
            <Header>
                {typeof props.header === 'string' ? (
                    <Typography>{props.header}</Typography>
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