import { CustomTheme } from '../theme/types';
import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';

const StatusBarManager: React.FC = () => {
    const theme = useTheme<CustomTheme>();

    return (
        <StatusBar
            backgroundColor={theme.statusBar.backgroundColor}
            barStyle={theme.statusBar.style === 'light' ? 'light-content' : 'dark-content'}
            animated={true}
        />
    );
};

export default StatusBarManager; 