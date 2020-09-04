import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import {
	Login,
	Welcome,
	CheckNumber,
	ProfileInfo,
	Initialization,
} from "../pages"
import { AuthenticationRoutes } from "./Navigation"

const AuthStack = createStackNavigator<AuthenticationRoutes>()

const AuthStackNavigator = () => {
	return (
		<AuthStack.Navigator headerMode="none" initialRouteName="Welcome">
			<AuthStack.Screen name="Welcome" component={Welcome} />
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="CheckNumber" component={CheckNumber} />
			<AuthStack.Screen name="ProfileInfo" component={ProfileInfo} />
			<AuthStack.Screen
				name="Initialization"
				component={Initialization}
			/>
		</AuthStack.Navigator>
	)
}

export default AuthStackNavigator
