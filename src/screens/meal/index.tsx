import { Layout } from "@components/Layout";
import { Container, Content, Row, Status, Tag } from "./styles";
import { Typography } from "@components/Typhography";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealGetAll";
import { useCallback, useState } from "react";
import { MealDTO } from "@dtos/MealDTO";
import { Button } from "@components/Button";
import { Pencil, PencilSimpleLine, Trash } from "phosphor-react-native";
import theme from "@theme";
import { Modal } from "@components/Modal";
import { mealRemove } from "@storage/meal/mealRemove";

type RouteParams = { id: string };

export type MealStatus  = {
    inOntheDiet: boolean;
}

export function MealScreen() {
    const [meal, setMeal] = useState<MealDTO>();
    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute();
    const navigator = useNavigation();

    const { id } = route.params as RouteParams;

    function handleGoBack() {
        navigator.goBack();
    }

    function handleGoUpdate( id: string ) {
        navigator.navigate('update', {id: id});
    }

    async function handleMealRemove( id: string ) {
        try {
            console.log('Remove meal: ', id)
            await mealRemove(id)
            handleGoBack()
        } catch (error) {
            console.log(error);
        }
    }

    async function fecthMeal() {
        const data = await mealsGetAll();

        const meal = data.filter((meal) => meal.id === id);

        setMeal(meal[0]);
    }

    useFocusEffect(
		// executes the fetchMeal function
		useCallback(() => {
			fecthMeal()
		}, []),
	)

    return (
        <Container>
            <Layout
                header="Refeição"
                bg={meal?.isOnTheDiet ? 'green' : 'red'}
                onPressBrack={handleGoBack}
            >
                <Content>
                    <Row>
                        <Typography color="gray_1" fontFamily="bold" lineHeight="lg" fontSize="title_md" style={{marginBottom: 8}}>{meal?.name}</Typography>
                        <Typography color="gray_1" fontFamily="regular" fontSize="body_md" >{meal?.description}</Typography>
                    </Row>
                    <Row>
                        <Typography color="gray_1" fontFamily="bold" fontSize="title_xs" style={{marginBottom: 8}}>Data e hora</Typography>
                        <Typography color="gray_1" fontFamily="regular" fontSize="body_md" >{meal?.date} - {meal?.hour}</Typography>
                    </Row>
                    <Row>
                        <Tag>
                            <Status inOntheDiet={meal?.isOnTheDiet ? true : false} />
                            <Typography color="gray_1" fontSize="body_sm" lineHeight="sm">{meal?.isOnTheDiet ? 'dentro da dieta' : 'fora da dieta'}</Typography>
                        </Tag>
                    </Row>
                </Content>

                { meal && modalVisible &&(
                    <Modal setModalVisible={setModalVisible} modalVisible={modalVisible} onAction={() => handleMealRemove(meal.id)}></Modal>
                )}

                <Button 
                    title="Editar Refeição"
                    icon={<PencilSimpleLine color="white" size={18} />}
                    onPress={() => handleGoUpdate(meal!.id)}
                    style={{marginBottom: 9}}
                />
                <Button 
                    title="Excluir Refeição"
                    type="outline"
                    icon={<Trash color={theme.colors.base.gray_1} size={18} />}
                    onPress={() => setModalVisible(true)}
                />
            </Layout>
        </Container>
    )
}