import { BaseComponentProps, WithIcon, WithPress, WithText } from '../types';
import { List, Surface, useTheme } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

interface NavItemProps extends BaseComponentProps, Required<WithIcon>, WithText, WithPress { }

/**
 * Componente atómico para elemento de navegación
 * @param {NavItemProps} props - Propiedades del componente
 */
const NavItem: React.FC<NavItemProps> = ({
  text,
  iconName,
  iconColor,
  onPress,
  style
}) => {
  const theme = useTheme();
  const color = iconColor || theme.colors.primary;

  return (
    <Surface style={[styles.surface, style]} elevation={1}>
      <List.Item
        title={text}
        left={props => (
          <MaterialCommunityIcons
            {...props}
            name={iconName}
            size={24}
            color={color}
          />
        )}
        right={props => (
          <MaterialCommunityIcons
            {...props}
            name="chevron-right"
            size={24}
            color={theme.colors.onSurfaceVariant}
          />
        )}
        onPress={onPress}
        titleStyle={styles.title}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    borderRadius: 12,
    marginVertical: 4,
  },
  title: {
    fontWeight: '500',
  },
});

export default NavItem;
