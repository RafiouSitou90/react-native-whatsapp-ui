import { StatusBar } from "expo-status-bar"
import React, { useEffect } from "react"
import { Dimensions, Image } from "react-native"

import logo from "../../assets/logo.png"
import { AppNavigationProps } from "../../routes"
import { Box, Text } from "../../theme"

const { width } = Dimensions.get("window")

const Loading = ({ navigation }: AppNavigationProps<"Loading">) => {
	useEffect(() => {
		delay()
	}, [])

	function delay() {
		setTimeout(() => {
			navigation.navigate("Authentication")

			/*			navigation.dispatch(
				CommonActions.reset({
					index: 0,
					routes: [{ name: "Authentication" }],
				})
			)*/
		}, 2000)
	}

	return (
		<Box
			flex={1}
			justifyContent="center"
			alignItems="center"
			backgroundColor="mainBackground"
		>
			<Box flex={0.3}>
				<Image
					source={logo}
					style={{
						width: width * 0.3,
						height: width * 0.3,
					}}
				/>
			</Box>

			<Box
				flex={0.7}
				alignItems="center"
				bottom={0}
				position="absolute"
				marginBottom="l"
			>
				<Text color="info2">from</Text>
				<Text
					color="textPrimaryColor"
					fontSize={width * 0.04}
					marginTop="xs"
				>
					FACEBOOK
				</Text>
			</Box>
			<StatusBar style="light" />
		</Box>
	)
}

export default Loading
