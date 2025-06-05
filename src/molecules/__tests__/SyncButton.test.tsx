import { fireEvent, render } from '@testing-library/react-native';

import { PaperProvider } from 'react-native-paper';
import React from 'react';
import SyncButton from '../SyncButton';

describe('SyncButton', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <PaperProvider>{children}</PaperProvider>
    );

    it('debería mostrar el estado por defecto', () => {
        const onPress = jest.fn();
        const { getByText } = render(
            <SyncButton
                isSyncing={false}
                syncSuccess={false}
                onPress={onPress}
            />,
            { wrapper }
        );

        expect(getByText('Sincronizar dispositivo')).toBeTruthy();
    });

    it('debería mostrar el estado de sincronización', () => {
        const onPress = jest.fn();
        const { getByText } = render(
            <SyncButton
                isSyncing={true}
                syncSuccess={false}
                onPress={onPress}
            />,
            { wrapper }
        );

        expect(getByText('Sincronizando...')).toBeTruthy();
    });

    it('debería mostrar el estado de éxito', () => {
        const onPress = jest.fn();
        const { getByText } = render(
            <SyncButton
                isSyncing={false}
                syncSuccess={true}
                onPress={onPress}
            />,
            { wrapper }
        );

        expect(getByText('Sincronización exitosa con el dispositivo BLE')).toBeTruthy();
    });

    it('debería llamar onPress al hacer clic en estado por defecto', () => {
        const onPress = jest.fn();
        const { getByText } = render(
            <SyncButton
                isSyncing={false}
                syncSuccess={false}
                onPress={onPress}
            />,
            { wrapper }
        );

        fireEvent.press(getByText('Sincronizar dispositivo'));
        expect(onPress).toHaveBeenCalled();
    });

    it('no debería llamar onPress en estado de sincronización', () => {
        const onPress = jest.fn();
        const { getByText } = render(
            <SyncButton
                isSyncing={true}
                syncSuccess={false}
                onPress={onPress}
            />,
            { wrapper }
        );

        fireEvent.press(getByText('Sincronizando...'));
        expect(onPress).not.toHaveBeenCalled();
    });
}); 