import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { Camera as ExpoCamera } from "expo-camera"
import React, { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { RectButton } from "react-native-gesture-handler"

import { Box, Text, useTheme } from "../../../theme"

const { width } = Dimensions.get("window")
const size = width * 0.15
const size2 = width * 0.18

const Camera = () => {
	const theme = useTheme()
	const [hasPermission, setHasPermission] = useState<boolean>(false)
	const [type, setType] = useState(ExpoCamera.Constants.Type.back)

	useEffect(() => {
		;(async () => {
			const { status } = await ExpoCamera.requestPermissionsAsync()
			setHasPermission(status === "granted")
		})()
	}, [])

	if (hasPermission === null) {
		return <Box />
	}
	if (!hasPermission) {
		return <Text>No access to camera</Text>
	}

	return (
		<Box flex={1}>
			<ExpoCamera
				style={{ flex: 1 }}
				type={type}
				ratio="16:9"
				autoFocus={true}
			/>
			<Box
				flexDirection="column"
				justifyContent="space-between"
				style={{
					height: 85,
					backgroundColor: "black",
					borderTopColor: "black",
				}}
				paddingBottom="s"
			>
				<Box
					flexDirection="row"
					style={{
						marginTop: -23,
						marginHorizontal: 45,
					}}
					justifyContent="space-between"
					marginBottom="xs"
				>
					<Box alignSelf="flex-start">
						<RectButton
							style={{
								width: size,
								height: size,
								borderRadius: size / 2,
								alignItems: "center",
								justifyContent: "center",
							}}
							rippleColor={theme.colors.secondary}
							onPress={() => true}
						>
							<MaterialIcons
								name="flash-off"
								size={28}
								color="white"
							/>
						</RectButton>
					</Box>
					<Box alignSelf="flex-end">
						<Box
							style={{
								width: size2,
								height: size2,
								borderRadius: size2 / 2,
								alignItems: "center",
								justifyContent: "center",
								borderWidth: 2,
								borderColor: "white",
							}}
						>
							<RectButton
								style={{
									width: 60,
									height: 60,
									borderRadius: 60 / 2,
									alignItems: "center",
									justifyContent: "center",
								}}
								rippleColor="red"
								onPress={() => true}
							/>
						</Box>
					</Box>
					<Box alignSelf="flex-start">
						<RectButton
							style={{
								width: size,
								height: size,
								borderRadius: size / 2,
								alignItems: "center",
								justifyContent: "center",
							}}
							rippleColor={theme.colors.secondary}
							onPress={() => {
								setType(
									type === ExpoCamera.Constants.Type.back
										? ExpoCamera.Constants.Type.front
										: ExpoCamera.Constants.Type.back
								)
							}}
						>
							<MaterialCommunityIcons
								name="camera-party-mode"
								size={28}
								color="white"
							/>
						</RectButton>
					</Box>
				</Box>
				<Box alignSelf="center">
					<Text color="mainBackground">
						hold for video, tap for photo
					</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default Camera
