import { BaseComponentProps, WithIcon } from '../types';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

interface CounterProps extends BaseComponentProps, WithIcon {
  value: number;
  label: string;
}

/**
 * Componente atómico para mostrar un contador numérico con etiqueta
 * @param {CounterProps} props - Propiedades del componente
 */
const Counter: React.FC<CounterProps> = ({
  value,
  label,
  iconName,
  iconColor,
  style
}) => {
  const theme = useTheme();
  const color = iconColor || theme.colors.primary;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelContainer}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={24}
            color={color}
            style={styles.icon}
          />
        )}
        <Text variant="bodyLarge" style={[styles.label, { color: theme.colors.onSurfaceVariant }]}>
          {label}
        </Text>
      </View>

      <Text variant="displaySmall" style={[styles.value, { color }]}>
        {value.toLocaleString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontWeight: '500',
  },
  value: {
    fontWeight: 'bold',
  },
});

export default Counter;
