import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Card } from "@components/Card";
// import { Button } from "@components/Button";
import { SectionList, View } from "react-native";
import { Typography } from "@components/Typhography";
import { Button } from "@components/Button";
import { Plus, Pencil } from "phosphor-react-native";
import { Meal } from "@components/Meal";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealGetAll";
import { MealDTO } from "@dtos/MealDTO";
import { mealsList } from "@utils/list";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";


type Meals = {
	date: string
	data: MealDTO[]
}

export function HomeScreen() {

    const [meals, setMeals] = useState<Meals[]>([])
    // const meals = [
    // {
    //     title: '12.08.23',
    //     data: [
    //         {
    //             id: "01",
    //             hour: "20:00",
    //             description: "X-tusasdo",
    //             isOnTheDiet: false
    //         },
    //         {
    //             id: "02",
    //             hour: "18:00",
    //             description: "X-Salada",
    //             isOnTheDiet: true
    //         }
    //     ]
    // },
    // {
    //     title: '13.08.23',
    //     data: [
    //         {
    //             id: "03",
    //             hour: "20:00",
    //             description: "X-Jump",
    //             isOnTheDiet: false
    //         },
    //         {
    //             id: "04",
    //             hour: "18:00",
    //             description: "X-Hugo",
    //             isOnTheDiet: true
    //         },
    //         {
    //             id: "05",
    //             hour: "18:00",
    //             description: "X-Hugo",
    //             isOnTheDiet: true
    //         },
    //         {
    //             id: "06",
    //             hour: "18:00",
    //             description: "X-Hugo",
    //             isOnTheDiet: true
    //         },
    //         {
    //             id: "07",
    //             hour: "18:00",
    //             description: "X-Hugo",
    //             isOnTheDiet: true
    //         }
    //     ]
    // }

    // ]

    

    const navigation = useNavigation()

    function handleGoStatistic() {
        navigation.navigate('statistic')
    }

    function handleGoRegister() {
        navigation.navigate('register')
    }

    async function fetchMeals() {
        const data = await mealsGetAll()
        const meal = mealsList(data)
        setMeals(meal)
        return meal
    }

    useFocusEffect(
		useCallback(() => {
			fetchMeals()
		}, []),
	)

    return (
        <Container>
            <Header />
            <Card
                title="90.86%"
                subtitle="das refeiçõesss dentro da dieta"
                bg="green"
                iconPosition="right"
                onPress={() => console.log(meals )}
            />
            <View style={{ marginTop: 40 }}>
                <Typography fontSize="title_sm" style={{marginBottom: 8}}>
                    Refeições
                </Typography>
                
                <Button title="Nova Refeição" icon={<Plus color="white" size={18} /> } onPress={handleGoRegister}/>
            </View>
            <SectionList 
                sections={meals} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Meal key={item.id} {...item} onPress={() => console.log(item.description)}/>}
                renderSectionHeader={({section: {date}}) => (
                    <Typography 
                        fontSize="title_sm" 
                        fontFamily="bold" 
                        color="gray_1"
                        style={{marginBottom: 8, marginTop: 32}}
                    >
                        {date}
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