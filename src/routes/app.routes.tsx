import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "@screens/home"
import { RegisterScreen } from "@screens/register"
import { StatisticsScreen } from "@screens/statistics"


const {Navigator, Screen} =  createNativeStackNavigator()


export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={HomeScreen} />
            <Screen name="statistic" component={StatisticsScreen} />
            <Screen name="register" component={RegisterScreen} />
        </Navigator>
    )
}