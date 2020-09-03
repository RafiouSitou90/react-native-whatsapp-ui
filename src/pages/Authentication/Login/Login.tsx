import React from "react"
import { Dimensions } from "react-native"
import { Feather as Icon } from "@expo/vector-icons"

import { AuthenticationRoutes } from "../../../routes"
import { Box, Text, useTheme } from "../../../theme"
import { BorderlessButton, RectButton } from "react-native-gesture-handler"

const { width, height } = Dimensions.get("window")

const Login = ({}: AuthenticationRoutes) => {
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
						Enter your phone number
					</Text>
				</Box>

				<Box marginHorizontal="s">
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

			<Box flex={0.8} marginHorizontal="s" marginVertical="m">
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
						<Box>
							<Text fontSize={16}>Country name</Text>
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
								width="20%"
								alignItems="flex-start"
							>
								<Box
									flexDirection="row"
									justifyContent="space-between"
								>
									<Box>
										<Text fontSize={16} color="info2">
											+
										</Text>
									</Box>
									<Box>
										<Text fontSize={16}>55</Text>
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
								<Text fontSize={16}>Phone number</Text>
							</Box>
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
					<Text color="textBlue">at least 16 years old</Text> to
					register. Learn more about how WhatsApp works with{" "}
					<Text color="textBlue">Facebook entities</Text>.
				</Text>
			</Box>
		</Box>
	)
}

export default Login
