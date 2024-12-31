import { MealDTO } from "@dtos/MealDTO"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "@storage/storageConfig"

export async function mealsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
        const meals: MealDTO[] = storage ? JSON.parse(storage) : []; // Garante que sempre seja um array
        return meals;
    } catch (error) {
        console.error("Erro ao obter refeições:", error);
        throw error;
    }
}