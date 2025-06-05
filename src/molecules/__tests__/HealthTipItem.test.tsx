import { render, screen } from '@testing-library/react-native';

import HealthTipItem from '../HealthTipItem';
import React from 'react';

const mockTip = {
    id: 1,
    title: 'Test Tip',
    description: 'Test Description',
    icon: 'run'
};

describe('HealthTipItem', () => {
    it('renders correctly with all props', () => {
        render(<HealthTipItem tip={mockTip} />);

        expect(screen.getByText(mockTip.title)).toBeTruthy();
        expect(screen.getByText(mockTip.description)).toBeTruthy();
    });

    it('renders with the correct icon', () => {
        const { UNSAFE_getByProps } = render(<HealthTipItem tip={mockTip} />);

        const icon = UNSAFE_getByProps({ name: mockTip.icon });
        expect(icon).toBeTruthy();
        expect(icon.props.size).toBe(28);
    });
}); 