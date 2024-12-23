import { createStackNavigator } from "@react-navigation/stack"
import { Route } from "./Routes"
import HomeScreen from "../presentation/screens/HomeScreen"

const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name={Route.Home} component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator