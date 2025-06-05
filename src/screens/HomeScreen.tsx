import { Avatar, Card, Surface, Text, useTheme } from 'react-native-paper';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import Footer from '../molecules/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../navigation/AppNavigator';
import StepCounter from '../molecules/StepCounter';
import { useSyncDevice } from '../hooks/useSyncDevice';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

/**
 * Pantalla principal de la aplicación
 * @param {HomeScreenProps} props - Propiedades de navegación
 */
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { steps, isSyncing, syncSuccess, syncDevice } = useSyncDevice();
  const userName = "Carlos Rodríguez";

  return (
    <Surface
      style={[
        styles.container,
        { backgroundColor: theme.colors.background }
      ]}
      elevation={0}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header con perfil */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Avatar.Image
              size={120}
              source={require('../assets/adaptive-icon.png')}
            />
            <View style={styles.welcomeText}>
              <Text
                variant="headlineLarge"
                style={[styles.userName, { color: theme.colors.onSurface }]}
              >
                {userName}
              </Text>
              <Text
                variant="titleLarge"
                style={{ color: theme.colors.onSurfaceVariant }}
              >
                ¡Bienvenido de nuevo!
              </Text>
            </View>
          </View>
        </View>

        {/* Contenido principal */}
        <View style={styles.mainContent}>
          {/* Tarjetas de información */}
          <View style={styles.cardsContainer}>
            {/* Resumen de actividad */}
            <Card style={[styles.activityCard, { backgroundColor: theme.colors.primaryContainer }]}>
              <Card.Content style={styles.activityContent}>
                <View style={styles.activityHeader}>
                  <MaterialCommunityIcons
                    name="walk"
                    size={32}
                    color={theme.colors.primary}
                  />
                  <Text
                    variant="titleMedium"
                    style={{ color: theme.colors.primary }}
                  >
                    Actividad Diaria
                  </Text>
                </View>
                <StepCounter steps={steps} />
              </Card.Content>
            </Card>

            {/* Acciones rápidas */}
            <View style={styles.quickActions}>
              <Card
                style={[styles.quickActionCard, { width: (width - 48) / 2 }]}
                onPress={() => navigation.navigate('HealthTips')}
              >
                <Card.Content style={styles.quickActionContent}>
                  <MaterialCommunityIcons
                    name="heart-pulse"
                    size={32}
                    color={theme.colors.error}
                  />
                  <Text variant="titleMedium">
                    Consejos de Salud
                  </Text>
                </Card.Content>
              </Card>

              <Card
                style={[styles.quickActionCard, { width: (width - 48) / 2 }]}
                onPress={() => navigation.navigate('DeviceSync')}
              >
                <Card.Content style={styles.quickActionContent}>
                  <MaterialCommunityIcons
                    name="bluetooth"
                    size={32}
                    color={theme.colors.primary}
                  />
                  <Text variant="titleMedium">
                    Conectar Dispositivo
                  </Text>
                </Card.Content>
              </Card>
            </View>
          </View>
        </View>

        {/* Espacio para el footer */}
        <View style={styles.footerSpace} />
      </ScrollView>

      <Footer
        isSyncing={isSyncing}
        syncSuccess={syncSuccess}
        onSync={syncDevice}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    padding: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  profileSection: {
    alignItems: 'center',
    gap: 24,
  },
  welcomeText: {
    alignItems: 'center',
    gap: 8,
  },
  userName: {
    fontWeight: '700',
  },
  mainContent: {
    flex: 1,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  activityCard: {
    borderRadius: 20,
    elevation: 0,
  },
  activityContent: {
    gap: 16,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  quickActionCard: {
    borderRadius: 20,
  },
  quickActionContent: {
    alignItems: 'center',
    gap: 12,
    padding: 16,
  },
  footerSpace: {
    height: 80,
  },
});

export default HomeScreen;
