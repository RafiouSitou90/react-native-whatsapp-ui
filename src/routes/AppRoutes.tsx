import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import { Loading } from "../pages"
import AuthStackNavigator from "./AuthRoutes"
import { AppRoutes } from "./Navigation"

const AppStack = createStackNavigator<AppRoutes>()

const AppStackNavigator = () => {
	return (
		<AppStack.Navigator headerMode="none">
			<AppStack.Screen name="Loading" component={Loading} />
			<AppStack.Screen
				name="Authentication"
				component={AuthStackNavigator}
			/>
		</AppStack.Navigator>
	)
}

export default AppStackNavigator
