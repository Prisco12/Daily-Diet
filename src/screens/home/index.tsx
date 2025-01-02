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
import { statsSorter } from "@utils/statisctics";


type Meals = {
    date: string
    data: MealDTO[]
}

type Statistic = {
    percentage: string
    isMealsOnTheDiet: boolean
}

export function HomeScreen() {

    const [meals, setMeals] = useState<Meals[]>([])
    const [statistic, setStatistic] = useState<Statistic>()

    const navigation = useNavigation()

    function handleGoStatistic() {
        navigation.navigate('statistic')
    }

    function handleGoRegister() {
        navigation.navigate('register')
    }

    function handleGoMeal(id: string) {
        navigation.navigate('meal', {id: id})
    }

    async function fetchMeals() {
        const data = await mealsGetAll()
        const meal = mealsList(data)
        
        const { percentage, mealsOnTheDiet, mealsOutOnDiet } = statsSorter(data)

        const isMealsOnTheDiet = mealsOnTheDiet >= mealsOutOnDiet ? true : false

        const statistics = {
            percentage,
            isMealsOnTheDiet,
        }

        setStatistic(statistics)

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
            { statistic  && (
                <>
                 <Card
                 title={statistic.percentage}
                 subtitle={`${statistic.percentage === '0,00%' ? 'Nenhuma refeição cadastrada' : `das refeições ${statistic.isMealsOnTheDiet ? 'dentro' : 'fora'} da dieta`}`}
                 bg={statistic.percentage === '0,00%' ? 'gray' : statistic.isMealsOnTheDiet ? 'green' : 'red'}
                 iconPosition="right"
                 onPress={handleGoStatistic}
                />
            
                <View style={{ marginTop: 40 }}>
                    <Typography fontSize="title_sm" style={{marginBottom: 8}}>
                        Refeições
                    </Typography>
                    
                    <Button title="Nova Refeição" icon={<Plus color="white" size={18} /> } onPress={handleGoRegister}/>
                </View>
                </>
            )}
            <SectionList 
                sections={meals} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Meal key={item.id} {...item} onPress={() => handleGoMeal(item.id)}/>}
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