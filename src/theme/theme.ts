import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { borderRadius, iconSizes, palette, spacing } from "./tokens";

import { CustomTheme } from "./types";

// Extendemos el tema de Material Design 3
export const theme: CustomTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: palette.primary.main,
    onPrimary: "#ffffff",
    primaryContainer: palette.primary.container,
    onPrimaryContainer: "#001159",
    secondary: palette.secondary.main,
    onSecondary: "#ffffff",
    secondaryContainer: palette.secondary.container,
    onSecondaryContainer: "#002204",
    tertiary: "#745b00",
    onTertiary: "#ffffff",
    tertiaryContainer: "#ffe08b",
    onTertiaryContainer: "#241a00",
    error: palette.error.main,
    onError: "#ffffff",
    errorContainer: palette.error.container,
    onErrorContainer: "#410002",
    background: palette.background.light,
    onBackground: "#1a1c1e",
    surface: palette.surface.light,
    onSurface: "#1a1c1e",
    surfaceVariant: palette.surface.variant.light,
    onSurfaceVariant: "#44464f",
    outline: palette.outline.light,
    outlineVariant: palette.outline.variant.light,
    success: palette.success.main,
  },
  roundness: borderRadius.medium,
  spacing,
  iconSizes,
  borderRadius,
  statusBar: {
    backgroundColor: palette.primary.main,
    style: "light",
  },
};

export const darkTheme: CustomTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: palette.primary.light,
    onPrimary: "#002089",
    primaryContainer: palette.primary.dark,
    onPrimaryContainer: palette.primary.container,
    secondary: palette.secondary.main,
    onSecondary: "#003909",
    secondaryContainer: palette.secondary.dark,
    onSecondaryContainer: palette.secondary.light,
    tertiary: "#e7c347",
    onTertiary: "#3d2f00",
    tertiaryContainer: "#574400",
    onTertiaryContainer: "#ffe08b",
    error: palette.error.light,
    onError: "#690005",
    errorContainer: palette.error.dark,
    onErrorContainer: palette.error.container,
    background: palette.background.dark,
    onBackground: "#e2e2e6",
    surface: palette.surface.dark,
    onSurface: "#e2e2e6",
    surfaceVariant: palette.surface.variant.dark,
    onSurfaceVariant: "#c4c6d0",
    outline: palette.outline.dark,
    outlineVariant: palette.outline.variant.dark,
    success: palette.success.light,
  },
  roundness: borderRadius.medium,
  spacing,
  iconSizes,
  borderRadius,
  statusBar: {
    backgroundColor: palette.primary.light,
    style: "dark",
  },
};
