import { PaperProvider } from 'react-native-paper';
import React from 'react';
import StepCounter from '../StepCounter';
import { render } from '@testing-library/react-native';

describe('StepCounter', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <PaperProvider>{children}</PaperProvider>
    );

    it('debería renderizar el contador con los pasos proporcionados', () => {
        const steps = 5000;
        const { getByText } = render(<StepCounter steps={steps} />, { wrapper });

        expect(getByText('Pasos diarios')).toBeTruthy();
        expect(getByText('5,000')).toBeTruthy();
    });

    it('debería aplicar estilos personalizados', () => {
        const steps = 5000;
        const customStyle = { marginTop: 20 };
        const { getByTestId } = render(
            <StepCounter steps={steps} style={customStyle} />,
            { wrapper }
        );

        const container = getByTestId('step-counter');
        expect(container.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining(customStyle)
            ])
        );
    });
}); 