import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { LoadAssets } from "./src/components"
import AppStackNavigator from "./src/routes/AppRoutes"
import { ThemeProvider } from "./src/theme"

export default function App() {
	return (
		<ThemeProvider>
			<LoadAssets>
				<SafeAreaProvider>
					<AppStackNavigator />
				</SafeAreaProvider>
			</LoadAssets>
		</ThemeProvider>
	)
}
