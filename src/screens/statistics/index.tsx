import { Layout } from "@components/Layout";
import { Container, Row } from "./styles";
import { Card } from "@components/Card";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Typography } from "@components/Typhography";
import { useCallback, useState } from "react";
import { mealsGetAll } from "@storage/meal/mealGetAll";
import { statsSorter } from "@utils/statisctics";


type Statistic = {
    percentage: string
    bestSequenceOfDishesWithinTheDiet: string
    registeredMeals: string
    mealsOnTheDiet: string
    mealsOutOnDiet: string
}

export type StatisticBackground = {
    bg: 'green' | 'red'
}

export function StatisticsScreen() {
    const [statistic, setStatistic] = useState<Statistic>()
    const [isMealsOnTheDiet, setIsMealsOnTheDiet] = useState(true)

    const navigation = useNavigation()

    function goBack() {
        navigation.goBack()
    }

    async function handleReceiveMeal() {
        try {
            const data = await mealsGetAll()

            const statistic = statsSorter(data)

            const isMealsOnTheDiet =
                statistic.mealsOnTheDiet >= statistic.mealsOutOnDiet
                    ? true
                    : false

            setIsMealsOnTheDiet(isMealsOnTheDiet)

            setStatistic(statistic)
        } catch (error) {
            console.log(error)
        }
    }

    // when it has focus on the screen
    useFocusEffect(
        // executes the fetchMeals function
        useCallback(() => {
            handleReceiveMeal()
        }, []),
    )

    return (
        <Container>
            {statistic && (
                <Layout
                    bg={statistic.percentage === '0,00%' ? 'gray' : isMealsOnTheDiet ? 'green' : 'red'}
                    header={
                        <Card
                            bg={statistic.percentage === '0,00%' ? 'gray' : isMealsOnTheDiet ? 'green' : 'red'}
                            iconPosition='left'
                            title={statistic.percentage}
                            subtitle="das refeições cadastradas"
                            onPress={goBack} />
                    }
                    onPressBrack={goBack}
                >
                    <Typography fontFamily="bold" fontSize="title_xs" style={{ marginBottom: 20 }}>Estatísticas Gerais</Typography>

                    <Row>
                        <Card
                            title={statistic.bestSequenceOfDishesWithinTheDiet}
                            subtitle="Melhor sequência de pratos dentro da dieta"
                            bg="gray"
                            showIconButton={false}
                        />
                    </Row>

                    <Row>
                        <Card
                            title={statistic.registeredMeals}
                            subtitle="Refeições registradas"
                            bg="gray"
                            showIconButton={false}
                        />
                    </Row>
                    <Row>
                        <Card
                            title={statistic.mealsOnTheDiet}
                            subtitle="Refeições dentro da dieta"
                            bg="green"
                            showIconButton={false}
                            style={{ width: '48%' }}
                        />
                        <Card
                            title={statistic.mealsOutOnDiet}
                            subtitle="Refeições fora da dieta"
                            bg="red"
                            showIconButton={false}
                            style={{ width: '48%' }}
                        />
                    </Row>
                </Layout>
            )}
        </Container>
    )
}