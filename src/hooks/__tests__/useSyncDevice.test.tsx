import { act, renderHook } from '@testing-library/react-native';

import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { syncDeviceData } from '../../services/api';
import { useSyncDevice } from '../useSyncDevice';

// Mock del módulo api
jest.mock('../../services/api', () => ({
    syncDeviceData: jest.fn(),
}));

// Mock del hook useSnackbar
jest.mock('../useSnackbar', () => ({
    useSnackbar: () => ({
        showSnackbar: jest.fn(),
    }),
}));

describe('useSyncDevice', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <PaperProvider>{children}</PaperProvider>
    );

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('debería iniciar con valores por defecto', () => {
        const { result } = renderHook(() => useSyncDevice(), { wrapper });

        expect(result.current.steps).toBe(0);
        expect(result.current.isSyncing).toBe(false);
        expect(result.current.syncSuccess).toBe(false);
    });

    it('debería manejar una sincronización exitosa', async () => {
        const mockData = {
            steps: 5000,
            distance: 3,
            calories: 250,
            lastSync: new Date().toISOString(),
        };

        (syncDeviceData as jest.Mock).mockResolvedValueOnce(mockData);

        const { result } = renderHook(() => useSyncDevice(), { wrapper });

        await act(async () => {
            await result.current.syncDevice();
        });

        expect(result.current.steps).toBe(mockData.steps);
        expect(result.current.syncSuccess).toBe(true);
        expect(result.current.isSyncing).toBe(false);
    });

    it('debería manejar un error en la sincronización', async () => {
        const error = new Error('Error de sincronización');
        (syncDeviceData as jest.Mock).mockRejectedValueOnce(error);

        const { result } = renderHook(() => useSyncDevice(), { wrapper });

        await act(async () => {
            await result.current.syncDevice();
        });

        expect(result.current.syncSuccess).toBe(false);
        expect(result.current.isSyncing).toBe(false);
    });

    it('debería resetear el estado de éxito después de 3 segundos', async () => {
        jest.useFakeTimers();
        const mockData = {
            steps: 5000,
            distance: 3,
            calories: 250,
            lastSync: new Date().toISOString(),
        };

        (syncDeviceData as jest.Mock).mockResolvedValueOnce(mockData);

        const { result } = renderHook(() => useSyncDevice(), { wrapper });

        await act(async () => {
            await result.current.syncDevice();
        });

        expect(result.current.syncSuccess).toBe(true);

        act(() => {
            jest.advanceTimersByTime(3000);
        });

        expect(result.current.syncSuccess).toBe(false);

        jest.useRealTimers();
    });
}); 