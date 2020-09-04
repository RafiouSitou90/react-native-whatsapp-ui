import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React, { useEffect } from "react"
import { Dimensions, TextInput } from "react-native"
import { RectButton } from "react-native-gesture-handler"

import { Box, Text, useTheme } from "../../../theme"

const { width, height } = Dimensions.get("window")

const CheckNumber = () => {
	const theme = useTheme()
	const navigation = useNavigation()

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("ProfileInfo")
		}, 2000)
	}, [])

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
						Verifying +55 61 9 9999 9999
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
				<Box>
					<Text
						fontSize={15}
						textAlign="center"
						color="textBlack"
						lineHeight={22}
					>
						In agreement of automatic detection of an SMS sent to{" "}
						<Text color="textBlack" fontSize={16} fontWeight="bold">
							+55 61 9 9999 9999
						</Text>
						. <Text color="textBlue">Wrong number?</Text>
					</Text>
				</Box>

				<Box marginTop="ms" justifyContent="center" alignItems="center">
					<Box
						width={width * 0.6}
						borderBottomWidth={2}
						borderColor="primary"
						justifyContent="center"
						alignItems="center"
						flexDirection="row"
					>
						<Box flexDirection="row">
							<TextInput
								textAlignVertical="center"
								keyboardType="phone-pad"
								placeholderTextColor={theme.colors.info}
								placeholder="-"
								defaultValue=""
								maxLength={1}
								style={{
									fontSize: 30,
									marginHorizontal: 5,
									paddingBottom: 2,
									textAlign: "center",
								}}
							/>
							<TextInput
								textAlignVertical="center"
								keyboardType="phone-pad"
								placeholderTextColor={theme.colors.info}
								placeholder="-"
								defaultValue=""
								maxLength={1}
								style={{
									fontSize: 30,
									marginHorizontal: 5,
									paddingBottom: 2,
									textAlign: "center",
								}}
							/>
							<TextInput
								textAlignVertical="center"
								keyboardType="phone-pad"
								placeholderTextColor={theme.colors.info}
								placeholder="-"
								defaultValue=""
								maxLength={1}
								style={{
									fontSize: 30,
									marginHorizontal: 5,
									paddingBottom: 2,
									textAlign: "center",
								}}
							/>
						</Box>

						<Box flexDirection="row" marginLeft="s">
							<TextInput
								textAlignVertical="center"
								keyboardType="phone-pad"
								placeholderTextColor={theme.colors.info}
								placeholder="-"
								defaultValue=""
								maxLength={1}
								style={{
									fontSize: 30,
									paddingHorizontal: 5,
									paddingBottom: 2,
									textAlign: "center",
								}}
							/>
							<TextInput
								textAlignVertical="center"
								keyboardType="phone-pad"
								placeholderTextColor={theme.colors.info}
								placeholder="-"
								defaultValue=""
								maxLength={1}
								style={{
									fontSize: 30,
									paddingHorizontal: 5,
									paddingBottom: 2,
									textAlign: "center",
								}}
							/>
							<TextInput
								textAlignVertical="center"
								keyboardType="phone-pad"
								placeholderTextColor={theme.colors.info}
								placeholder="-"
								defaultValue=""
								maxLength={1}
								style={{
									fontSize: 30,
									paddingHorizontal: 5,
									paddingBottom: 2,
									textAlign: "center",
								}}
							/>
						</Box>
					</Box>

					<Box
						justifyContent="center"
						alignItems="center"
						marginTop="s"
					>
						<Text fontSize={15} color="info2" textAlign="center">
							Enter the 6-digits code
						</Text>
					</Box>
				</Box>

				<Box marginTop="ms">
					<Box
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center"
						marginHorizontal="s"
					>
						<Box alignSelf="center" marginRight="xs">
							<MaterialIcons
								name="textsms"
								color={theme.colors.info}
								size={26}
							/>
						</Box>
						<Box
							alignSelf="center"
							justifyContent="flex-start"
							width="70%"
						>
							<RectButton
								onPress={() => true}
								style={{
									justifyContent: "center",
									height: 40,
									paddingHorizontal: theme.spacing.s,
									borderRadius: theme.borderRadii.s,
								}}
							>
								<Text
									color="info2"
									fontSize={16}
									fontWeight="bold"
								>
									Resend SMS
								</Text>
							</RectButton>
						</Box>
						<Box
							alignSelf="center"
							marginLeft="xs"
							justifyContent="flex-end"
							alignItems="flex-end"
						>
							<Text color="info2">99:99</Text>
						</Box>
					</Box>
					<Box
						marginVertical="xs"
						borderBottomWidth={1}
						borderColor="info"
						justifyContent="center"
						alignSelf="center"
						width={width * 0.9}
					/>
					<Box
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center"
						marginHorizontal="s"
					>
						<Box alignSelf="center" marginRight="xs">
							<MaterialIcons
								name="phone"
								color={theme.colors.info}
								size={26}
							/>
						</Box>
						<Box
							alignSelf="center"
							justifyContent="flex-start"
							width="70%"
						>
							<RectButton
								onPress={() => true}
								style={{
									justifyContent: "center",
									height: 40,
									paddingHorizontal: theme.spacing.s,
									borderRadius: theme.borderRadii.s,
								}}
							>
								<Text
									color="info2"
									fontSize={16}
									fontWeight="bold"
								>
									Call me
								</Text>
							</RectButton>
						</Box>
						<Box alignSelf="center" marginLeft="xs">
							<Text color="info2">99:99</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default CheckNumber
