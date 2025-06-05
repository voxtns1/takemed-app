import { StyleSheet, View } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';

import { BaseComponentProps } from '../types';
import Counter from '../atoms/Counter';
import React from 'react';
import { ViewStyle } from 'react-native';

interface StepCounterProps extends BaseComponentProps {
  steps: number;
  style?: ViewStyle;
}

/**
 * Componente molecular para mostrar el contador de pasos
 * @param {StepCounterProps} props - Propiedades del componente
 */
const StepCounter: React.FC<StepCounterProps> = ({ steps, style }) => {
  const theme = useTheme();
  return (
    <Surface
      style={[
        styles.surface,
        {
          backgroundColor: theme.colors.surface,
        },
        style
      ]}
      elevation={1}
      testID="step-counter"
    >
      <Counter
        value={steps}
        label="Pasos diarios"
        iconName="walk"
        iconColor={theme.colors.primary}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
});

export default StepCounter;
