import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Login, SplashScreen, Register, Home } from "./src/screens"
import { Provider as PaperProvider } from "react-native-paper"

const Stack = createStackNavigator()

const App = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }} >
					<Stack.Screen name="SplashScreen" component={SplashScreen} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Register" component={Register} />
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}

export default App