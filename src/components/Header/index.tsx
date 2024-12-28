import { Avatar, Container, Logo } from "./style";
import logoImage from "@assets/logo.png";
import avatarImage from "@assets/avatar.png";

export function Header() {
    return (
        <Container>
            <Logo />
            <Avatar />
        </Container>
    )
}