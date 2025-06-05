import { HEALTH_TIPS, MESSAGES } from '../constants';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';

import { HealthTip } from '../types';
import HealthTipItem from '../molecules/HealthTipItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../navigation/AppNavigator';
import Title from '../atoms/Title';

type HealthTipsScreenProps = NativeStackScreenProps<RootStackParamList, 'HealthTips'>;

const HealthTipsScreen: React.FC<HealthTipsScreenProps> = () => {
  const theme = useTheme();

  return (
    <Surface style={styles.container} elevation={0}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Title
            text={MESSAGES.healthTipsTitle}
            variant="headlineMedium"
          />
          <Text
            variant="bodyLarge"
            style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            {MESSAGES.healthTipsSubtitle}
          </Text>
        </View>

        <View style={styles.tipsList}>
          {HEALTH_TIPS.map((tip) => (
            <HealthTipItem key={tip.id} tip={tip} />
          ))}
        </View>
      </ScrollView>
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
    paddingTop: 32,
  },
  subtitle: {
    marginTop: 8,
  },
  tipsList: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 16,
  },
});

export default HealthTipsScreen;
