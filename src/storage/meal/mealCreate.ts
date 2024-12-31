import { MealDTO } from "@dtos/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealGetAll";

export async function mealCreate(newMeal: MealDTO) {
    try {
        const storedMeals = await mealsGetAll();
        const updatedMeals = JSON.stringify([...storedMeals, newMeal]);
        await AsyncStorage.setItem(MEAL_COLLECTION, updatedMeals);
    } catch (error) {
        console.error("Erro ao salvar refeição:", error);
        throw error;
    }
}