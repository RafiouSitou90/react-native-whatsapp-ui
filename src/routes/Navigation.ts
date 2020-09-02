import { RouteProp, CompositeNavigationProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
	navigation: CompositeNavigationProp<
		StackNavigationProp<AppRoutes, "Authentication">,
		StackNavigationProp<AuthenticationRoutes, "Welcome">
	>
	route: RouteProp<AppRoutes, RouteName>
}

export interface AuthNavigationProps<
	RouteName extends keyof AuthenticationRoutes
> {
	navigation: StackNavigationProp<AuthenticationRoutes, RouteName>
	route: RouteProp<AuthenticationRoutes, RouteName>
}

export type AuthenticationRoutes = {
	Welcome: undefined
	Login: undefined
}

export type AppRoutes = {
	Loading: undefined
	Authentication: undefined
	Home: undefined
}
