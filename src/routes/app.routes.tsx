import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FeedbackScreen } from "@screens/feedback"
import { HomeScreen } from "@screens/home"
import { MealScreen } from "@screens/meal"
import { RegisterScreen } from "@screens/register"
import { StatisticsScreen } from "@screens/statistics"
import { UpdateScreen } from "@screens/update"


const {Navigator, Screen} =  createNativeStackNavigator()


export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={HomeScreen} />
            <Screen name="statistic" component={StatisticsScreen} />
            <Screen name="register" component={RegisterScreen} />
            <Screen name="feedback" component={FeedbackScreen} />
            <Screen name="meal" component={MealScreen} />
            <Screen name="update" component={UpdateScreen} />
        </Navigator>
    )
}