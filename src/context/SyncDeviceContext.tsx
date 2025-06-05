import React, { createContext, useCallback, useContext, useState } from 'react';

import { syncDeviceData } from '../services/api';
import { useSnackbar } from '../hooks/useSnackbar';

interface SyncDeviceContextType {
    steps: number;
    isSyncing: boolean;
    syncSuccess: boolean;
    syncDevice: () => Promise<void>;
}

const SyncDeviceContext = createContext<SyncDeviceContextType | undefined>(undefined);

export const SyncDeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [steps, setSteps] = useState(0);
    const [isSyncing, setIsSyncing] = useState(false);
    const [syncSuccess, setSyncSuccess] = useState(false);
    const { showSnackbar } = useSnackbar();

    const syncDevice = useCallback(async () => {
        setIsSyncing(true);
        setSyncSuccess(false);

        try {
            const data = await syncDeviceData();
            setSyncSuccess(true);
            setSteps(data.steps);
            showSnackbar({
                message: `Sincronización exitosa: ${data.steps} pasos, ${data.distance}km, ${data.calories} calorías`,
                type: "success",
            });
        } catch (error) {
            showSnackbar({
                message: error instanceof Error ? error.message : "Error desconocido",
                type: "error",
            });
        } finally {
            setIsSyncing(false);
            setTimeout(() => {
                setSyncSuccess(false);
            }, 3000);
        }
    }, [showSnackbar]);

    return (
        <SyncDeviceContext.Provider
            value={{
                steps,
                isSyncing,
                syncSuccess,
                syncDevice,
            }}
        >
            {children}
        </SyncDeviceContext.Provider>
    );
};

export const useSyncDevice = () => {
    const context = useContext(SyncDeviceContext);
    if (!context) {
        throw new Error('useSyncDevice must be used within a SyncDeviceProvider');
    }
    return context;
}; 