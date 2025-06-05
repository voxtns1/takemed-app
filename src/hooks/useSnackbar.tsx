import { Snackbar, useTheme } from "react-native-paper";
import { useCallback, useState } from "react";

import React from "react";

interface SnackbarOptions {
    message: string;
    type?: "success" | "error" | "info";
    duration?: number;
}

export const useSnackbar = () => {
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const [currentSnack, setCurrentSnack] = useState<SnackbarOptions | null>(null);

    const showSnackbar = useCallback(
        ({ message, type = "info", duration = 4000 }: SnackbarOptions) => {
            setCurrentSnack({ message, type, duration });
            setVisible(true);
        },
        []
    );

    const onDismiss = () => {
        setVisible(false);
        setCurrentSnack(null);
    };

    const SnackbarComponent = currentSnack && (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            duration={currentSnack.duration}
            style={{
                backgroundColor: {
                    success: theme.colors.secondary,
                    error: theme.colors.error,
                    info: theme.colors.primary,
                }[currentSnack.type || "info"],
            }}
            action={{
                label: "OK",
                textColor: theme.colors.onPrimary,
                onPress: onDismiss,
            }}
        >
            {currentSnack.message}
        </Snackbar>
    );

    return { showSnackbar, SnackbarComponent };
};

// Exportamos el contexto para mantener compatibilidad
export { useSnackbar as useSnackbarContext } from "../context/SnackbarContext"; 