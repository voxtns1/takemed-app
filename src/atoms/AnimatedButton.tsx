import { Button, Text, useTheme } from 'react-native-paper';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import { CustomTheme } from '../theme/types';
import { IconName } from '../types';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface AnimatedButtonProps {
    text: string;
    disabled?: boolean;
    onPress?: () => void;
    style?: any;
    animation?: any;
    icon?: IconName;
    iconColor?: string;
    testID?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    text,
    disabled = false,
    onPress,
    style,
    animation,
    icon,
    iconColor,
    testID,
}) => {
    const theme = useTheme<CustomTheme>();
    const animationRef = useRef<LottieView>(null);

    useEffect(() => {
        if (animation && animationRef.current) {
            animationRef.current.play();
        }
    }, [animation]);

    const renderIcon = ({ size, color }: { size: number; color: string }) => {
        if (animation) {
            return (
                <View style={{ ...styles.animationContainer, width: size * 2, height: size * 2 }}>
                    <LottieView
                        ref={animationRef}
                        source={animation}
                        style={styles.animation}
                        autoPlay
                        loop={animation.loop !== false}
                    />
                </View>
            );
        }

        if (icon) {
            return (
                <MaterialCommunityIcons
                    name={icon}
                    size={size}
                    color={iconColor || color}
                />
            );
        }

        return null;
    };

    return (
        <Button
            testID={testID}
            mode="contained"
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                { backgroundColor: theme.colors.primary },
                style
            ]}
            contentStyle={styles.buttonContent}
            icon={renderIcon}
            buttonColor={theme.colors.primary}
            textColor={theme.colors.onPrimary}
        >
            <Text variant="labelLarge" style={[styles.buttonText, { color: theme.colors.onPrimary }]}>
                {text}
            </Text>
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 28,
        elevation: 2,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        marginLeft: 8,
    },
    animationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: '100%',
        height: '100%',
    },
});

export default AnimatedButton; 