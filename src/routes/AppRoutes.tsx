import {
	Feather,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { BorderlessButton } from "react-native-gesture-handler"

import { Call, Chat, Loading, Status } from "../pages"
import { Camera } from "../pages/Home"
import { Box, Text, useTheme } from "../theme"
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
			initialRouteName="Chat"
			tabBarOptions={{
				style: {
					backgroundColor: theme.colors.secondary,
				},
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
			<AppTab.Screen
				name="Camera"
				component={Camera}
				options={{
					tabBarLabel: ({ color }) => (
						<MaterialCommunityIcons
							name="camera"
							color={color}
							size={24}
						/>
					),
				}}
			/>
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
						height={85}
						backgroundColor="secondary"
						style={{
							paddingTop: Constants.statusBarHeight,
						}}
						justifyContent="center"
					>
						<Box
							marginHorizontal="xs"
							flexDirection="row"
							alignItems="flex-start"
							justifyContent="space-between"
							paddingVertical="xs"
						>
							<Box>
								<Text
									fontSize={18}
									fontWeight="bold"
									color="mainBackground"
									style={{ paddingLeft: 10 }}
								>
									WhatsApp
								</Text>
							</Box>
							<Box
								flexDirection="row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Box marginRight="xs">
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
											size={22}
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
