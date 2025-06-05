import { Card, Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { HealthTip } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

interface HealthTipItemProps {
    tip: HealthTip;
}

const HealthTipItem: React.FC<HealthTipItemProps> = ({ tip }) => {
    const theme = useTheme();

    return (
        <Card style={styles.tipCard}>
            <Card.Content style={styles.tipContent}>
                <View style={[styles.iconContainer, { backgroundColor: theme.colors.primaryContainer }]}>
                    <MaterialCommunityIcons
                        name={tip.icon as any}
                        size={28}
                        color={theme.colors.primary}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text variant="titleMedium" style={[styles.tipTitle, { color: theme.colors.onSurface }]}>
                        {tip.title}
                    </Text>
                    <Text
                        variant="bodyMedium"
                        style={[styles.tipDescription, { color: theme.colors.onSurfaceVariant }]}
                    >
                        {tip.description}
                    </Text>
                </View>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    tipCard: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    tipContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
        padding: 16,
    },
    iconContainer: {
        padding: 12,
        borderRadius: 16,
    },
    textContainer: {
        flex: 1,
        gap: 4,
    },
    tipTitle: {
        fontWeight: '500',
    },
    tipDescription: {
        lineHeight: 20,
    },
});

export default HealthTipItem; 