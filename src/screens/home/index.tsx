import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Card } from "@components/Card";
// import { Button } from "@components/Button";
import { View } from "react-native";
import { Typography } from "@components/Typhography";
import { Button } from "@components/Button";
import { Plus, Pencil } from "phosphor-react-native";


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
                
                <Button title="Nova Refeição" icon={<Plus color="white" size={18} /> } onPress={() => console.log('Nova refeição')}/>
            </View>
        </Container>
    )
}