import { successAnimation, syncAnimation } from '../media';

import AnimatedButton from '../atoms/AnimatedButton';
import { CustomTheme } from '../theme/types';
import React from 'react';
import { palette } from 'theme/tokens';
import { useTheme } from 'react-native-paper';

interface SyncButtonProps {
  isSyncing: boolean;
  syncSuccess: boolean;
  onPress: () => void;
}

const SyncButton: React.FC<SyncButtonProps> = ({
  isSyncing,
  syncSuccess,
  onPress,
}) => {
  const theme = useTheme<CustomTheme>();

  if (isSyncing) {
    return (
      <AnimatedButton
        testID="sync-button"
        text="Sincronizando..."
        disabled
        animation={syncAnimation}
      />
    );
  }

  if (syncSuccess) {
    return (
      <AnimatedButton
        testID="sync-button"
        text="Sincronización exitosa con el dispositivo BLE"
        disabled
        animation={successAnimation}
        style={{
          backgroundColor: palette.success.main,
        }}
        iconColor={palette.success.main}
      />
    );
  }

  return (
    <AnimatedButton
      testID="sync-button"
      text="Sincronizar dispositivo"
      onPress={onPress}
      icon="sync"
    />
  );
};

export default SyncButton;
