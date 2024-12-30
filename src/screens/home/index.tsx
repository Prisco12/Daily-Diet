import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Card } from "@components/Card";
// import { Button } from "@components/Button";
import { SectionList, View } from "react-native";
import { Typography } from "@components/Typhography";
import { Button } from "@components/Button";
import { Plus, Pencil } from "phosphor-react-native";
import { Meal } from "@components/Meal";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export function HomeScreen() {

    const meals = [
    {
        title: '12.08.23',
        data: [
            {
                id: "01",
                hour: "20:00",
                description: "X-tusasdo",
                isOnTheDiet: false
            },
            {
                id: "02",
                hour: "18:00",
                description: "X-Salada",
                isOnTheDiet: true
            }
        ]
    },
    {
        title: '13.08.23',
        data: [
            {
                id: "03",
                hour: "20:00",
                description: "X-Jump",
                isOnTheDiet: false
            },
            {
                id: "04",
                hour: "18:00",
                description: "X-Hugo",
                isOnTheDiet: true
            },
            {
                id: "05",
                hour: "18:00",
                description: "X-Hugo",
                isOnTheDiet: true
            },
            {
                id: "06",
                hour: "18:00",
                description: "X-Hugo",
                isOnTheDiet: true
            },
            {
                id: "07",
                hour: "18:00",
                description: "X-Hugo",
                isOnTheDiet: true
            }
        ]
    }

    ]

    

    const navigation = useNavigation()

    function handleGoStatistic() {
        navigation.navigate('statistic')
    }

    return (
        <Container>
            <Header />
            <Card
                title="90.86%"
                subtitle="das refeições dentro da dieta"
                bg="green"
                iconPosition="right"
                onPress={handleGoStatistic}
            />
            <View style={{ marginTop: 40 }}>
                <Typography fontSize="title_sm" style={{marginBottom: 8}}>
                    Refeições
                </Typography>
                
                <Button title="Nova Refeição" icon={<Plus color="white" size={18} /> } onPress={() => console.log('Nova refeição')}/>
            </View>
            <SectionList 
                sections={meals} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Meal key={item.id} {...item} onPress={() => console.log(item.description)}/>}
                renderSectionHeader={({section: {title}}) => (
                    <Typography 
                        fontSize="title_sm" 
                        fontFamily="bold" 
                        color="gray_1"
                        style={{marginBottom: 8, marginTop: 32}}
                    >
                        {title}
                    </Typography>
                )}
                style={{marginBottom: 32}}
                contentContainerStyle={meals.length === 0 && {flex: 1, justifyContent: 'center', alignItems: 'center'}}
                ListEmptyComponent={() => (
                    <>
                        <Typography textAlign="center">Não há refeições cadastradas ainda</Typography>
                        <Typography textAlign="center">Vamos cadastrar refeições hoje?</Typography>
                    </>
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}