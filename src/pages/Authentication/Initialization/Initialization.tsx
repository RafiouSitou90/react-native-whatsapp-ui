import React from "react"
import { Dimensions, ActivityIndicator, Image } from "react-native"

import { Box, Text, useTheme } from "../../../theme"
import bgImage from "../../assets/bgImage.jpg"

const { width } = Dimensions.get("window")
const size = width * 0.7

const Initialization = () => {
	const theme = useTheme()

	return (
		<Box
			flex={1}
			justifyContent="center"
			alignItems="center"
			backgroundColor="mainBackground"
		>
			<Box
				flex={0.8}
				flexDirection="column"
				justifyContent="space-between"
				alignItems="center"
			>
				<Box justifyContent="center" alignItems="center">
					<Text
						fontSize={width * 0.075}
						fontWeight="bold"
						color="primary"
					>
						Initialization...
					</Text>
					<Text fontSize={18} fontWeight="800" color="info2">
						Please wait
					</Text>
				</Box>
				<Box>
					<Image
						source={bgImage}
						style={{
							width: size,
							height: size,
							borderRadius: size / 2,
						}}
					/>
				</Box>
				<Box>
					<ActivityIndicator
						size="large"
						color={theme.colors.primary}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default Initialization
