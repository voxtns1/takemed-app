// Design tokens siguiendo Material Design 3

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const iconSizes = {
  small: 16,
  medium: 24,
  large: 32,
} as const;

export const borderRadius = {
  small: 8,
  medium: 16,
  large: 20,
} as const;

// Paleta de colores base (pueden ser personalizados según la marca)
export const palette = {
  primary: {
    light: "#8b9eff",
    main: "#5271ff",
    dark: "#0046f5",
    container: "#dde1ff",
  },
  secondary: {
    light: "#80e683",
    main: "#4CAF50",
    dark: "#087f23",
    container: "#dcf8dd",
  },
  error: {
    light: "#ef5350",
    main: "#d32f2f",
    dark: "#c62828",
    container: "#ffedea",
  },
  success: {
    light: "#81c784",
    main: "#4caf50",
    dark: "#388e3c",
    container: "#dcf8dd",
  },
  info: {
    main: "#2196F3",
    light: "#e3f2fd",
    dark: "#0d47a1",
    container: "#e3f2fd",
  },
  background: {
    light: "#ffffff",
    dark: "#1a1c1e",
  },
  surface: {
    light: "#ffffff",
    dark: "#1a1c1e",
    variant: {
      light: "#e1e2ec",
      dark: "#44464f",
    },
  },
  outline: {
    light: "#74777f",
    dark: "#8d9199",
    variant: {
      light: "#c4c6d0",
      dark: "#44464f",
    },
  },
} as const;
