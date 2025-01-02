import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealGetAll";

export async function mealRemove(id: string) {
    try {
        const storedMeals = await mealsGetAll();

        const updatedMeals = storedMeals.filter((meal) => meal.id !== id);

        const newUpdatedMeals = JSON.stringify(updatedMeals);
        
        await AsyncStorage.setItem(MEAL_COLLECTION, newUpdatedMeals);
    } catch (error) {
        throw error;
    }
}