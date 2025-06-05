import AppNavigator from './navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { SnackbarProvider } from './context/SnackbarContext';
import StatusBarManager from './atoms/StatusBarManager';
import { theme } from './theme/theme';

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <SnackbarProvider>
                <StatusBarManager />
                <AppNavigator />
            </SnackbarProvider>
        </PaperProvider>
    );
} 