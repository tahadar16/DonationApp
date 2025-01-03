import { createStackNavigator } from "@react-navigation/stack"
import { Route } from "./Routes"
import HomeScreen from "../presentation/screens/HomeScreen"
import DescriptionScreen from "../presentation/screens/DescriptionScren"
import LoginScreen from "../presentation/screens/LoginScreen"

const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name={Route.Login} component={LoginScreen}/>
            <Stack.Screen name={Route.Home} component={HomeScreen}/>
            <Stack.Screen name={Route.Description} component={DescriptionScreen}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator