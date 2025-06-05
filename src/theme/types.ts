import { MD3Theme } from "react-native-paper";

export interface StatusBarConfig {
  backgroundColor: string;
  style: "light" | "dark";
}

export interface SpacingConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface IconSizesConfig {
  small: number;
  medium: number;
  large: number;
}

export interface BorderRadiusConfig {
  small: number;
  medium: number;
  large: number;
}

export interface CustomColors {
  success: string;
}

export interface CustomTheme extends MD3Theme {
  statusBar: StatusBarConfig;
  spacing: SpacingConfig;
  iconSizes: IconSizesConfig;
  borderRadius: BorderRadiusConfig;
  colors: MD3Theme["colors"] & CustomColors;
}
