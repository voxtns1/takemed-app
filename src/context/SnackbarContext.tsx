import React, { createContext, useCallback, useContext, useState } from 'react';

import { Snackbar } from 'react-native-paper';

interface SnackbarOptions {
    message: string;
    type?: 'success' | 'error' | 'info';
    duration?: number;
}

interface SnackbarContextType {
    showSnackbar: (options: SnackbarOptions) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'success' | 'error' | 'info'>('info');

    const showSnackbar = useCallback(({
        message,
        type = 'info',
        duration = 4000
    }: SnackbarOptions) => {
        setMessage(message);
        setType(type);
        setVisible(true);

        // Auto hide after duration
        setTimeout(() => {
            setVisible(false);
        }, duration);
    }, []);

    const getSnackbarStyle = () => {
        switch (type) {
            case 'success':
                return { backgroundColor: '#4CAF50' };
            case 'error':
                return { backgroundColor: '#F44336' };
            default:
                return { backgroundColor: '#2196F3' };
        }
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar
                visible={visible}
                onDismiss={() => setVisible(false)}
                duration={4000}
                style={getSnackbarStyle()}
                action={{
                    label: 'OK',
                    onPress: () => setVisible(false),
                    textColor: '#fff'
                }}
            >
                {message}
            </Snackbar>
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
}; 