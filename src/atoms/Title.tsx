import { ColorValue, StyleSheet } from 'react-native';
import { Text, TextProps, useTheme } from 'react-native-paper';
import { WithText, WithTypography } from '../types';

import React from 'react';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

interface TitleProps extends Partial<TextProps<never>>, WithText, WithTypography {
  variant?: VariantProp<never>;
  style?: TextProps<never>['style'];
}

/**
 * Componente atómico para mostrar un título
 * @param {TitleProps} props - Propiedades del componente
 */
const Title: React.FC<TitleProps> = ({
  text,
  variant = 'headlineMedium',
  color,
  style
}) => {
  const theme = useTheme();
  const textColor = color ? theme.colors[color] : theme.colors.onSurface;

  return (
    <Text
      variant={variant as VariantProp<never>}
      style={[
        styles.text,
        { color: textColor as ColorValue },
        style
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});

export default Title;
