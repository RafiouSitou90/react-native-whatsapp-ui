import { StatusBar } from "expo-status-bar"
import React from "react"
import { Dimensions, Image } from "react-native"

import logo from "../../assets/logo.png"
import { Box, Text } from "../../theme"

const { width } = Dimensions.get("window")

const Loading = () => {
	return (
		<Box
			flex={1}
			justifyContent="center"
			alignItems="center"
			backgroundColor="mainBackground"
		>
			<Box flex={0.35}>
				<Image
					source={logo}
					style={{
						width: width * 0.25,
						height: width * 0.25,
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
