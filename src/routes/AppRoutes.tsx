import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import React, { useEffect, useState } from "react"

import { Call, Chat, Loading, Status } from "../pages"
import { Camera } from "../pages/Home"
import { useTheme } from "../theme"
import AuthStackNavigator from "./AuthRoutes"
import { AppRoutes, AppTabRoutes } from "./Navigation"

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

const AppTab = createMaterialTopTabNavigator<AppTabRoutes>()

const AppTabNavigator = () => {
	const theme = useTheme()

	return (
		<AppTab.Navigator
			tabBarOptions={{
				style: { backgroundColor: theme.colors.secondary },
				scrollEnabled: false,
				labelStyle: {
					fontSize: 14,
					fontWeight: "bold",
				},
				activeTintColor: theme.colors.mainBackground,
				indicatorStyle: {
					backgroundColor: theme.colors.mainBackground,
					height: 2,
				},
			}}
		>
			<AppTab.Screen name="Camera" component={Camera} />
			<AppTab.Screen name="Chat" component={Chat} />
			<AppTab.Screen name="Status" component={Status} />
			<AppTab.Screen name="Call" component={Call} />
		</AppTab.Navigator>
	)
}

const AppContainer = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(!isLoading)
			setUser(true)
		}, 500)
	}, [])

	return (
		<>
			{isLoading ? (
				<Loading />
			) : user ? (
				<AppTabNavigator />
			) : (
				<AppStackNavigator />
			)}
		</>
	)
}

export default AppContainer
