import { darkTheme, lightTheme } from './src/theme/theme';

import AppNavigator from './src/navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { useColorScheme } from 'react-native';

/**
 * Componente principal de la aplicación
 * Configura el proveedor de Native Base con el tema personalizado
 * e inicializa la navegación
 */
const App: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
