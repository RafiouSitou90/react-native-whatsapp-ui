import React, { ReactNode } from "react"
import {
	createText,
	createBox,
	useTheme as useReTheme,
	ThemeProvider as ReStyleThemeProvider,
	createTheme,
} from "@shopify/restyle"
import { ImageStyle, TextStyle, ViewStyle } from "react-native"

export const palette = {
	tealGreen: "#128C7E",
	tealGreenDark: "#075E54",
	lightGreen: "#25D366",
	fluidGreen: "#DCF8C6",
	white: "#FFFFFF",
	black: "#0B0B0B",
	blue: "#34B7F1",
	grey: "#ECE5DD",
	lightGrey: "#D3D3D3",
	darkGrey: "#808080",
}

const theme = createTheme({
	colors: {
		primary: palette.tealGreen,
		secondary: palette.tealGreenDark,
		buttonPrimaryBackground: palette.lightGreen,
		textPrimaryColor: palette.lightGreen,
		mainBackground: palette.white,
		textBlue: palette.blue,
		textBlack: palette.black,
		info: palette.lightGrey,
		info2: palette.darkGrey,
	},

	spacing: {
		zero: 0,
		xs: 8,
		s: 16,
		ms: 24,
		m: 28,
		ml: 32,
		l: 40,
		xl: 80,
		xxl: 96,
	},

	borderRadii: {
		zero: 0,
		xs: 2,
		s: 4,
		ms: 8,
		m: 10,
		ml: 20,
		l: 25,
		xl: 50,
		xxl: 100,
	},

	textVariants: {
		elevated: {
			padding: {
				phone: "xs",
				tablet: "s",
				largeTablet: "ms",
			},
			shadowColor: "#000",
			shadowOpacity: 0.2,
			shadowOffset: { width: 0, height: 5 },
			shadowRadius: 15,
			elevation: 5,
		},
	},

	breakpoints: {
		phone: 0,
		tablet: 768,
		largeTablet: 1024,
	},

	zIndices: {
		minimum: -1,
		maximum: 101,
	},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
	<ReStyleThemeProvider theme={theme}>{children}</ReStyleThemeProvider>
)

export type Theme = typeof theme
export const Box = createBox<Theme>()
export const Text = createText<Theme>()
export const useTheme = () => useReTheme<Theme>()

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export const makeStyles = <T extends NamedStyles<T>>(
	styles: (theme: Theme) => T
) => () => {
	const currentTheme = useTheme()
	return styles(currentTheme)
}
