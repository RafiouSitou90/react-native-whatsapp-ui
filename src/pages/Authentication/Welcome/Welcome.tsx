import React from "react"
import { Dimensions, Image, Linking } from "react-native"
import { AuthNavigationProps } from "../../../routes"
import { Box, Text, useTheme } from "../../../theme"

import bgImage from "../../assets/bgImage.jpg"
import { RectButton } from "react-native-gesture-handler"

const { width, height } = Dimensions.get("window")
const size = width * 0.7

const Welcome = ({}: AuthNavigationProps<"Welcome">) => {
	const theme = useTheme()

	async function handlePrivacy() {
		await Linking.openURL("https://www.whatsapp.com/legal/#privacy-policy")
	}

	async function handleTerms() {
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
				style={{ marginTop: height * 0.08 }}
			>
				<Text
					fontSize={width * 0.075}
					fontWeight="bold"
					color="primary"
				>
					Welcome to WhatsApp
				</Text>
			</Box>

			<Box marginTop="l">
				<Image
					source={bgImage}
					style={{
						width: size,
						height: size,
						borderRadius: size / 2,
					}}
				/>
			</Box>

			<Box
				justifyContent="flex-end"
				alignItems="center"
				flex={0.5}
				marginHorizontal="s"
			>
				<Box>
					<Text
						color="info2"
						lineHeight={25}
						fontSize={14}
						textAlign="center"
					>
						Read our{" "}
						<Text color="textBlue" onPress={handlePrivacy}>
							Privacy Policy
						</Text>
						. Tap "Agree and continue" to accept the{" "}
						<Text color="textBlue" onPress={handleTerms}>
							Terms of Service
						</Text>
						.
					</Text>
				</Box>

				<Box marginTop="ml">
					<RectButton
						onPress={() => true}
						style={{
							height: height * 0.06,
							width: width * 0.8,
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
							AGREE AND CONTINUE
						</Text>
					</RectButton>
				</Box>
			</Box>

			<Box
				alignItems="center"
				bottom={0}
				position="absolute"
				style={{ marginBottom: height * 0.02 }}
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
		</Box>
	)
}

export default Welcome
