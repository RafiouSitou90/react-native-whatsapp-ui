import { createStackNavigator } from "@react-navigation/stack"
import React, { useEffect, useState } from "react"

import { Loading } from "../pages"
import { Camera } from "../pages/Home"
import AuthStackNavigator from "./AuthRoutes"
import { AppRoutes } from "./Navigation"

const AppStack = createStackNavigator<AppRoutes>()

const AppStackNavigator = () => {
	return (
		<AppStack.Navigator headerMode="none">
			<AppStack.Screen
				name="Authentication"
				component={AuthStackNavigator}
			/>
		</AppStack.Navigator>
	)
}

const AppContainer = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(!isLoading)
		}, 2000)
	}, [])

	return (
		<>
			{isLoading ? (
				<Loading />
			) : user ? (
				<Camera />
			) : (
				<AppStackNavigator />
			)}
		</>
	)
}

export default AppContainer
