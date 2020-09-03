import React from "react"
import { AuthenticationRoutes } from "../../../routes"
import { Box, Text } from "../../../theme"

const Login = ({}: AuthenticationRoutes) => {
	return (
		<Box
			flex={1}
			justifyContent="center"
			alignItems="center"
			backgroundColor="mainBackground"
		>
			<Text>Login</Text>
		</Box>
	)
}

export default Login
