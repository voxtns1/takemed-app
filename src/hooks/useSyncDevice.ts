import { useCallback, useState } from "react";

import { syncDeviceData } from "../services/api";
import { useSnackbar } from "./useSnackbar";

interface SyncDeviceState {
  steps: number;
  isSyncing: boolean;
  syncSuccess: boolean;
  syncDevice: () => Promise<void>;
}

/**
 * Hook personalizado para manejar la lógica de sincronización con dispositivo BLE
 * @returns {SyncDeviceState} Estado y funciones para la sincronización
 */
export const useSyncDevice = (): SyncDeviceState => {
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
      // Resetear el estado de éxito después de 3 segundos
      setTimeout(() => {
        setSyncSuccess(false);
      }, 3000);
    }
  }, [showSnackbar]);

  return {
    steps,
    isSyncing,
    syncSuccess,
    syncDevice,
  };
};
