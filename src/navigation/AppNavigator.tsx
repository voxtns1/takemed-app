import HealthTipsScreen from '../screens/HealthTipsScreen';
// Importar pantallas
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Definir tipos para los parámetros de navegación
export type RootStackParamList = {
  Home: undefined;
  HealthTips: undefined;
  DeviceSync: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Componente principal de navegación de la aplicación
 * Gestiona la navegación entre pantallas usando React Navigation
 */
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5271ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HealthTips"
          component={HealthTipsScreen}
          options={{ title: 'Consejos de Salud' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
