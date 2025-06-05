import type { StyleProp, ViewStyle } from "react-native";

import type { MD3Theme } from "react-native-paper";
import type { MaterialCommunityIcons } from "@expo/vector-icons";

export type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

export interface BaseComponentProps {
  style?: StyleProp<ViewStyle>;
}

export interface WithIcon {
  iconName?: IconName;
  iconColor?: string;
}

export interface WithText {
  text: string;
}

export interface WithTypography {
  color?: keyof MD3Theme["colors"];
}

export interface WithPress {
  onPress: () => void;
}

export interface HealthTip {
  id: number;
  title: string;
  description: string;
  icon: string;
}
