import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "@screens/home"
import { StatisticsScreen } from "@screens/statistics"


const {Navigator, Screen} =  createNativeStackNavigator()


export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={HomeScreen} />
            <Screen name="statistic" component={StatisticsScreen} />
        </Navigator>
    )
}