import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Constants from "expo-constants"
import React, { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { MaterialIcons, Feather } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

import { Call, Chat, Loading, Status } from "../pages"
import { Camera } from "../pages/Home"
import { Box, useTheme, Text } from "../theme"
import AuthStackNavigator from "./AuthRoutes"
import { AppRoutes, AppTabRoutes } from "./Navigation"
import { StatusBar } from "expo-status-bar"

const { height } = Dimensions.get("window")

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
	const theme = useTheme()
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
				<Box flex={1}>
					<Box
						height={height * 0.1}
						backgroundColor="secondary"
						style={{
							paddingTop: Constants.statusBarHeight + 10,
						}}
					>
						<Box
							marginHorizontal="s"
							flexDirection="row"
							alignItems="center"
							justifyContent="space-between"
						>
							<Box>
								<Text
									fontSize={20}
									fontWeight="800"
									color="mainBackground"
								>
									WhatsApp
								</Text>
							</Box>
							<Box
								flexDirection="row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Box marginRight="s">
									<BorderlessButton
										rippleColor={theme.colors.info}
										onPress={() => true}
										style={{
											padding: 3,
										}}
									>
										<MaterialIcons
											name="search"
											color="white"
											size={22}
										/>
									</BorderlessButton>
								</Box>
								<Box>
									<BorderlessButton
										rippleColor={theme.colors.info}
										onPress={() => true}
										style={{
											padding: 3,
										}}
									>
										<Feather
											name="more-vertical"
											color="white"
											size={20}
										/>
									</BorderlessButton>
								</Box>
							</Box>
						</Box>
					</Box>
					<StatusBar
						style="light"
						translucent={true}
						backgroundColor="rgba(0, 0, 0, 0.2)"
					/>
					<AppTabNavigator />
				</Box>
			) : (
				<AppStackNavigator />
			)}
		</>
	)
}

export default AppContainer
