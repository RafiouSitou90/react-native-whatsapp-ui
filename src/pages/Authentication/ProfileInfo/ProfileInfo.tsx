import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { Dimensions, TextInput } from "react-native"
import { RectButton } from "react-native-gesture-handler"

import { Box, Text, useTheme } from "../../../theme"

const { width, height } = Dimensions.get("window")
const size = width * 0.2

const ProfileInfo = () => {
	const theme = useTheme()

	function handleNext() {}

	return (
		<Box
			flex={1}
			justifyContent="center"
			alignItems="center"
			backgroundColor="mainBackground"
		>
			<Box
				flex={0.2}
				top={0}
				position="absolute"
				style={{ marginTop: height * 0.05 }}
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
			>
				<Box alignSelf="center">
					<Text
						fontSize={width * 0.06}
						fontWeight="bold"
						color="primary"
						textAlign="center"
					>
						Profile info
					</Text>
				</Box>
			</Box>

			<Box
				flex={0.8}
				marginHorizontal="s"
				marginVertical="m"
				position="absolute"
				top={height * 0.1}
			>
				<Box marginHorizontal="s">
					<Text
						fontSize={16}
						textAlign="center"
						color="info2"
						lineHeight={22}
					>
						Please enter your name and an optional photo for your
						profile
					</Text>
				</Box>
				<Box marginTop="m">
					<Box
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box alignSelf="center" marginRight="xs">
							<Box
								justifyContent="center"
								alignItems="center"
								style={{
									width: size,
									height: size,
									borderRadius: size / 2,
									backgroundColor: "#d3d3d3",
								}}
							>
								<MaterialIcons
									name="camera-alt"
									color="white"
									size={35}
								/>
							</Box>
						</Box>
						<Box
							flexDirection="row"
							alignSelf="center"
							justifyContent="space-between"
							width="65%"
							borderBottomWidth={2}
							borderColor="primary"
						>
							<TextInput
								textAlignVertical="center"
								keyboardType="ascii-capable"
								placeholderTextColor={theme.colors.info}
								placeholder="Profile name"
								defaultValue="Your profile name"
								maxLength={25}
								style={{
									fontSize: 16,
									paddingBottom: 2,
									paddingHorizontal: 2,
									textAlign: "left",
									width: "90%",
								}}
							/>
							<Text fontWeight="bold" color="info">
								25
							</Text>
						</Box>
						<Box
							alignSelf="center"
							marginLeft="xs"
							justifyContent="flex-end"
							alignItems="flex-end"
						>
							<MaterialIcons
								name="insert-emoticon"
								size={30}
								style={{ color: theme.colors.info2 }}
							/>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box
				alignItems="center"
				bottom={0}
				position="absolute"
				style={{ marginBottom: height * 0.03 }}
				marginHorizontal="ml"
			>
				<Box marginBottom="ml">
					<RectButton
						onPress={handleNext}
						style={{
							height: height * 0.06,
							width: width * 0.3,
							borderRadius: theme.borderRadii.s,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor:
								theme.colors.buttonPrimaryBackground,
							shadowColor: "#000",
							shadowOpacity: 0.2,
							shadowOffset: { width: 0, height: 5 },
							shadowRadius: 15,
							elevation: 2,
						}}
					>
						<Text color="mainBackground" fontWeight="bold">
							NEXT
						</Text>
					</RectButton>
				</Box>
			</Box>
		</Box>
	)
}

export default ProfileInfo
