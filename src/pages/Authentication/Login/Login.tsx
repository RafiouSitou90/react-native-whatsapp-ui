import { Feather as Icon, MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Alert, Dimensions, Linking, TextInput } from "react-native"
import { BorderlessButton, RectButton } from "react-native-gesture-handler"

import { AuthenticationRoutes } from "../../../routes"
import { Box, Text, useTheme } from "../../../theme"

const { width, height } = Dimensions.get("window")

const Login = ({}: AuthenticationRoutes) => {
	const navigation = useNavigation()
	const theme = useTheme()

	function handleNext() {
		Alert.alert(
			"We will be verifying the phone number: ",
			"+55 61 9 9999 9999",
			[
				{
					text: "EDIT",
					onPress: () => true,
					style: "cancel",
				},
				{
					text: undefined,
					onPress: () => true,
					style: undefined,
				},
				{
					text: "OK",
					onPress: () => navigation.navigate("CheckNumber"),
				},
			],
			{ cancelable: false }
		)
	}

	async function handleYearsRequired() {
		await Linking.openURL(
			"https://www.whatsapp.com/legal/#terms-of-service"
		)
	}

	async function handleFacebookEntities() {
		await Linking.openURL(
			"https://www.whatsapp.com/legal/#terms-of-service"
		)
	}

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
				<Box alignSelf="center" style={{ marginLeft: width * 0.075 }}>
					<Text
						fontSize={width * 0.06}
						fontWeight="bold"
						color="primary"
						textAlign="center"
					>
						Enter your phone number
					</Text>
				</Box>

				<Box marginLeft="s">
					<BorderlessButton
						onPress={() => alert("Press info button")}
					>
						<Icon
							name="more-vertical"
							size={24}
							style={{ color: theme.colors.info2 }}
						/>
					</BorderlessButton>
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
					<Text textAlign="center" color="textBlack" lineHeight={20}>
						WhatsApp will send a SMS message to verify your phone
						number. <Text color="textBlue">What's my number?</Text>
					</Text>
				</Box>
				<Box marginTop="ms" justifyContent="center" alignItems="center">
					<Box
						width={width * 0.7}
						borderBottomWidth={2}
						borderBottomColor="primary"
						justifyContent="center"
						alignItems="center"
					>
						<Box flexDirection="row" justifyContent="space-between">
							<TextInput
								textAlignVertical="center"
								keyboardType="ascii-capable"
								placeholderTextColor={theme.colors.info}
								placeholder="Country name"
								defaultValue="Brazil"
								style={{
									fontSize: 16,
									paddingBottom: 2,
									textAlign: "center",
									width: "90%",
								}}
							/>
							<Box>
								<MaterialIcons
									name="arrow-drop-down"
									size={24}
									style={{ color: theme.colors.primary }}
								/>
							</Box>
						</Box>
					</Box>
					<Box width={width * 0.7} justifyContent="center">
						<Box
							marginBottom="xs"
							justifyContent="space-between"
							borderBottomColor="primary"
							flexDirection="row"
						>
							<Box
								marginTop="s"
								borderBottomWidth={2}
								borderBottomColor="primary"
								width="25%"
								alignItems="flex-start"
							>
								<Box
									flexDirection="row"
									justifyContent="center"
									alignItems="center"
								>
									<Box width="25%">
										<Text fontSize={16} color="info2">
											+
										</Text>
									</Box>
									<Box width="75%">
										<TextInput
											textAlignVertical="center"
											keyboardType="numeric"
											maxLength={3}
											placeholderTextColor={
												theme.colors.info
											}
											placeholder="000"
											defaultValue="55"
											style={{
												fontSize: 16,
												paddingBottom: 2,
												textAlign: "center",
											}}
										/>
									</Box>
								</Box>
							</Box>
							<Box
								alignItems="flex-start"
								marginLeft="xs"
								marginTop="s"
								borderBottomWidth={2}
								width="70%"
								borderBottomColor="primary"
							>
								<TextInput
									keyboardType="phone-pad"
									placeholderTextColor={theme.colors.info}
									placeholder="Phone number"
									defaultValue="61 9 9999 9999"
									style={{
										fontSize: 16,
										paddingBottom: 2,
									}}
									returnKeyLabel="Go"
									returnKeyType="go"
									onSubmitEditing={() => handleNext()}
								/>
							</Box>
						</Box>
						<Box
							justifyContent="center"
							alignItems="center"
							marginTop="s"
						>
							<Text
								fontSize={15}
								color="info2"
								textAlign="center"
							>
								Operator charges for SMS may apply
							</Text>
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

				<Text color="info2" textAlign="center">
					You must be{" "}
					<Text color="textBlue" onPress={handleYearsRequired}>
						at least 16 years old
					</Text>{" "}
					to register. Learn more about how WhatsApp works with{" "}
					<Text color="textBlue" onPress={handleFacebookEntities}>
						Facebook entities
					</Text>
					.
				</Text>
			</Box>
		</Box>
	)
}

export default Login
