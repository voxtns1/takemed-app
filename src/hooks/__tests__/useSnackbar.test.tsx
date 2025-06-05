import { act, renderHook } from '@testing-library/react-native';

import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { useSnackbar } from '../useSnackbar';

describe('useSnackbar', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <PaperProvider>{children}</PaperProvider>
    );

    it('debería iniciar con el snackbar oculto', () => {
        const { result } = renderHook(() => useSnackbar(), { wrapper });
        expect(result.current.SnackbarComponent).toBeFalsy();
    });

    it('debería mostrar el snackbar al llamar showSnackbar', () => {
        const { result } = renderHook(() => useSnackbar(), { wrapper });

        act(() => {
            result.current.showSnackbar({ message: 'Test message' });
        });

        expect(result.current.SnackbarComponent).toBeTruthy();
    });

    it('debería usar el tipo info por defecto', () => {
        const { result } = renderHook(() => useSnackbar(), { wrapper });

        act(() => {
            result.current.showSnackbar({ message: 'Test message' });
        });

        const snackbarProps = result.current.SnackbarComponent?.props;
        expect(snackbarProps).toBeDefined();
        expect(snackbarProps?.children).toBe('Test message');
    });

    it('debería usar la duración por defecto de 4000ms', () => {
        const { result } = renderHook(() => useSnackbar(), { wrapper });

        act(() => {
            result.current.showSnackbar({ message: 'Test message' });
        });

        const snackbarProps = result.current.SnackbarComponent?.props;
        expect(snackbarProps?.duration).toBe(4000);
    });

    it('debería respetar la duración personalizada', () => {
        const { result } = renderHook(() => useSnackbar(), { wrapper });
        const customDuration = 2000;

        act(() => {
            result.current.showSnackbar({ message: 'Test message', duration: customDuration });
        });

        const snackbarProps = result.current.SnackbarComponent?.props;
        expect(snackbarProps?.duration).toBe(customDuration);
    });

    it('debería ocultar el snackbar al llamar onDismiss', () => {
        const { result } = renderHook(() => useSnackbar(), { wrapper });

        act(() => {
            result.current.showSnackbar({ message: 'Test message' });
        });

        expect(result.current.SnackbarComponent).toBeTruthy();

        act(() => {
            result.current.SnackbarComponent?.props.onDismiss();
        });

        expect(result.current.SnackbarComponent).toBeFalsy();
    });
}); 