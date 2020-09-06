import React, { ReactNode } from "react"
import { Dimensions } from "react-native"
import { Box } from "../../../theme"

interface ContainerProps {
	children: ReactNode
	header?: ReactNode
	footer?: ReactNode
}

const { height } = Dimensions.get("window")

const Container = ({ children, header, footer }: ContainerProps) => {
	return (
		<Box
			flex={1}
			justifyContent="center"
			alignItems="center"
			backgroundColor="mainBackground"
		>
			{header && (
				<Box
					flex={0.2}
					top={0}
					position="absolute"
					style={{ marginTop: height * 0.05 }}
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
				>
					{header}
				</Box>
			)}

			{children}

			{footer && (
				<Box
					alignItems="center"
					bottom={0}
					position="absolute"
					style={{ marginBottom: height * 0.03 }}
					marginHorizontal="xs"
				>
					{footer}
				</Box>
			)}
		</Box>
	)
}

export default Container
