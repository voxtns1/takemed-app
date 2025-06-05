import { Button, useTheme } from 'react-native-paper';

import { IconName } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

interface IconButtonProps {
  text: string;
  iconName?: IconName;
  mode?: 'text' | 'outlined' | 'contained' | 'contained-tonal' | 'elevated';
  onPress: () => void;
  style?: any;
}

/**
 * Componente atómico para botón con icono
 * @param {IconButtonProps} props - Propiedades del componente
 */
const IconButton: React.FC<IconButtonProps> = ({
  text,
  iconName,
  mode = 'contained',
  onPress,
  style
}) => {
  const theme = useTheme();

  return (
    <Button
      mode={mode}
      onPress={onPress}
      icon={iconName ? ({ size, color }) => (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      ) : undefined}
      style={[styles.button, style]}
      contentStyle={styles.content}
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
});

export default IconButton;
