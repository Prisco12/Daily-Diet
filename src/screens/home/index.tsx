import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { View } from "react-native";
import { Typography } from "@components/Typhography";


export function HomeScreen() {
    return (
        <Container>
            <Header />
            <Card
                title="90.86%"
                subtitle="das refeições dentro da dieta"
                bg="green"
                iconPosition="right"
                onPress={() => console.log('Card clicked')}
            />
            <View style={{ marginTop: 40 }}>
                <Typography fontSize="title_sm" style={{marginBottom: 8}}>
                    Refeições
                </Typography>
                
                <Button />
            </View>
        </Container>
    )
}