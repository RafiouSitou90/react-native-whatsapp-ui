import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import { Welcome } from "../pages"
import { AuthenticationRoutes } from "./Navigation"

const AuthStack = createStackNavigator<AuthenticationRoutes>()

const AuthStackNavigator = () => {
	return (
		<AuthStack.Navigator headerMode="none">
			<AuthStack.Screen name="Welcome" component={Welcome} />
		</AuthStack.Navigator>
	)
}

export default AuthStackNavigator
