import { BaseComponentProps, WithIcon, WithText } from '../types';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

interface SubtitleWithIconProps extends BaseComponentProps, WithIcon, WithText { }

/**
 * Componente atómico para mostrar un subtítulo con icono
 * @param {SubtitleWithIconProps} props - Propiedades del componente
 */
const SubtitleWithIcon: React.FC<SubtitleWithIconProps> = ({
  text,
  iconName,
  iconColor,
  style
}) => {
  const theme = useTheme();
  const color = iconColor || theme.colors.primary;

  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={color}
          style={styles.icon}
        />
      )}
      <Text
        variant="bodyLarge"
        style={[styles.text, { color: theme.colors.onSurfaceVariant }]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontWeight: '500',
  },
});

export default SubtitleWithIcon;
