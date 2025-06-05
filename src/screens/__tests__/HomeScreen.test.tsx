import { fireEvent, render, screen } from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';
import { MESSAGES } from '../../constants';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Mock hooks
jest.mock('../../hooks/useSyncDevice', () => ({
    useSyncDevice: () => ({
        steps: 1234,
        isSyncing: false,
        syncSuccess: true,
        syncDevice: jest.fn(),
    }),
}));

const mockNavigate = jest.fn();
const Stack = createNativeStackNavigator<RootStackParamList>();

const TestWrapper = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

describe('HomeScreen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders welcome message and user name', () => {
        render(<TestWrapper />);

        expect(screen.getByText(MESSAGES.welcome)).toBeTruthy();
        expect(screen.getByText('Carlos Rodríguez')).toBeTruthy();
    });

    it('renders activity card with step counter', () => {
        render(<TestWrapper />);

        expect(screen.getByText('Actividad Diaria')).toBeTruthy();
        expect(screen.getByText('1234')).toBeTruthy();
    });

    it('renders quick action cards', () => {
        render(<TestWrapper />);

        expect(screen.getByText('Consejos de Salud')).toBeTruthy();
        expect(screen.getByText('Conectar Dispositivo')).toBeTruthy();
    });

    it('navigates to health tips screen when pressing the card', async () => {
        const { getByText } = render(<TestWrapper />);

        const healthTipsCard = getByText('Consejos de Salud');
        fireEvent.press(healthTipsCard.parent);

        // Verificamos que estamos en la pantalla de consejos de salud
        expect(screen.getByText(MESSAGES.healthTipsTitle)).toBeTruthy();
    });

    it('renders sync button', () => {
        render(<TestWrapper />);

        // El botón de sincronización debería estar presente
        const syncButton = screen.UNSAFE_getByProps({ testID: 'sync-button' });
        expect(syncButton).toBeTruthy();
    });
}); 