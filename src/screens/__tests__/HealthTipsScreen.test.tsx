import { HEALTH_TIPS, MESSAGES } from '../../constants';
import { render, screen } from '@testing-library/react-native';

import HealthTipsScreen from '../HealthTipsScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const TestWrapper = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="HealthTips"
                component={HealthTipsScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

describe('HealthTipsScreen', () => {
    it('renders the title and subtitle correctly', () => {
        render(<TestWrapper />);

        expect(screen.getByText(MESSAGES.healthTipsTitle)).toBeTruthy();
        expect(screen.getByText(MESSAGES.healthTipsSubtitle)).toBeTruthy();
    });

    it('renders all health tips', () => {
        render(<TestWrapper />);

        HEALTH_TIPS.forEach(tip => {
            expect(screen.getByText(tip.title)).toBeTruthy();
            expect(screen.getByText(tip.description)).toBeTruthy();
        });
    });
}); 