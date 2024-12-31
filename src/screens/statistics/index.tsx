import { Layout } from "@components/Layout";
import { Container, Row } from "./styles";
import { Card } from "@components/Card";
import { useNavigation } from "@react-navigation/native";
import { Typography } from "@components/Typhography";

export function StatisticsScreen() {
        const navigation = useNavigation()
    
        function goBack() {
            navigation.goBack()
        }
    return (
        <Container>
            <Layout
                bg="green"
                header={
                <Card 
                    bg="green" 
                    iconPosition='left' 
                    title="90.86%" 
                    subtitle="das refeições cadastradas" 
                    onPress={goBack}/>
            }
                onPressBrack={goBack}
            >
                <Typography fontFamily="bold" fontSize="title_xs" style={{marginBottom: 20}}>Estatísticas Gerais</Typography>

                <Row>
                    <Card 
                        title="4"
                        subtitle="Melhor sequência de pratos dentro da dieta"
                        bg="gray"
                        showIconButton={false}
                    />
                </Row>

                <Row>
                    <Card 
                        title="109"
                        subtitle="Refeições registradas"
                        bg="gray"
                        showIconButton={false}
                    />
                </Row>
                <Row>
                    <Card 
                        title="99"
                        subtitle="Refeições dentro da dieta"
                        bg="green"
                        showIconButton={false}
                        style={{width: '48%'}}
                    />
                    <Card 
                        title="10"
                        subtitle="Refeições fora da dieta"
                        bg="red"
                        showIconButton={false}
                        style={{width: '48%'}}
                    />
                </Row>
            </Layout>
        </Container>
    )
}