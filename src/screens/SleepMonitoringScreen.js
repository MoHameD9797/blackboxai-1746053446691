import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SleepMonitoringScreen() {
  // Placeholder sleep data
  const [sleepData, setSleepData] = useState({
    totalSleep: 7.5, // hours
    deepSleep: 2.0,
    lightSleep: 4.0,
    remSleep: 1.5,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Sleep Monitoring</Text>
      <View style={styles.sleepSummary}>
        <Text style={styles.summaryText}>Total Sleep: {sleepData.totalSleep} hrs</Text>
      </View>
      <View style={styles.sleepPhases}>
        <View style={styles.phaseBox}>
          <Text style={styles.phaseLabel}>Deep Sleep</Text>
          <Text style={styles.phaseValue}>{sleepData.deepSleep} hrs</Text>
        </View>
        <View style={styles.phaseBox}>
          <Text style={styles.phaseLabel}>Light Sleep</Text>
          <Text style={styles.phaseValue}>{sleepData.lightSleep} hrs</Text>
        </View>
        <View style={styles.phaseBox}>
          <Text style={styles.phaseLabel}>REM Sleep</Text>
          <Text style={styles.phaseValue}>{sleepData.remSleep} hrs</Text>
        </View>
      </View>
      {/* Future: Add sleep history and graphs */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1E293B',
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 30,
    textAlign: 'center',
  },
  sleepSummary: {
    backgroundColor: '#334155',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  summaryText: {
    color: '#E2E8F0',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sleepPhases: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phaseBox: {
    backgroundColor: '#334155',
    width: '30%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  phaseLabel: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 10,
  },
  phaseValue: {
    color: '#E2E8F0',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
