import React from "react"
import { AuthNavigationProps } from "../../../routes"
import { Box, Text } from "../../../theme"

const Welcome = ({}: AuthNavigationProps<"Welcome">) => {
	return (
		<Box>
			<Text>Welcome</Text>
		</Box>
	)
}

export default Welcome
