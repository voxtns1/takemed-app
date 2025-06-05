import { StyleSheet, View } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';

import React from 'react';
import SyncButton from './SyncButton';

interface FooterProps {
    isSyncing: boolean;
    syncSuccess: boolean;
    onSync: () => Promise<void>;
}

const Footer: React.FC<FooterProps> = ({ isSyncing, syncSuccess, onSync }) => {
    const theme = useTheme();

    return (
        <Surface
            style={[
                styles.container,
                {
                    backgroundColor: theme.colors.background,
                },
            ]}
            elevation={0}
        >
            <View style={styles.content}>
                <SyncButton
                    isSyncing={isSyncing}
                    syncSuccess={syncSuccess}
                    onPress={onSync}
                />
            </View>
        </Surface>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 16,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 16,
        alignItems: 'center',
    },
});

export default Footer; 