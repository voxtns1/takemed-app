import { successAnimation, syncAnimation } from '../media';

import AnimatedButton from '../atoms/AnimatedButton';
import React from 'react';
import { palette } from 'theme/tokens';

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
