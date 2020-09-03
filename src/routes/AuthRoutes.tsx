import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import { Login, Welcome } from "../pages"
import { AuthenticationRoutes } from "./Navigation"

const AuthStack = createStackNavigator<AuthenticationRoutes>()

const AuthStackNavigator = () => {
	return (
		<AuthStack.Navigator headerMode="none" initialRouteName="Welcome">
			<AuthStack.Screen name="Welcome" component={Welcome} />
			<AuthStack.Screen name="Login" component={Login} />
		</AuthStack.Navigator>
	)
}

export default AuthStackNavigator
