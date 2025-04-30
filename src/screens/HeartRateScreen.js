import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HeartRateScreen() {
  // Placeholder heart rate data
  const [currentHR, setCurrentHR] = useState(72);
  const [history, setHistory] = useState([
    { time: '08:00', hr: 70 },
    { time: '09:00', hr: 75 },
    { time: '10:00', hr: 73 },
    { time: '11:00', hr: 78 },
    { time: '12:00', hr: 74 },
  ]);

  // Simulate real-time heart rate changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHR((prev) => prev + (Math.floor(Math.random() * 5) - 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Heart Rate Monitoring</Text>
      <View style={styles.currentHRContainer}>
        <Text style={styles.currentHRLabel}>Current Heart Rate</Text>
        <Text style={styles.currentHRValue}>{currentHR} bpm</Text>
      </View>
      <View style={styles.historyContainer}>
        <Text style={styles.historyHeader}>History</Text>
        {history.map((entry, index) => (
          <View key={index} style={styles.historyEntry}>
            <Text style={styles.historyTime}>{entry.time}</Text>
            <Text style={styles.historyHR}>{entry.hr} bpm</Text>
          </View>
        ))}
      </View>
      {/* Future: Add charts and alerts */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1E293B',
    flexGrow: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 30,
    textAlign: 'center',
  },
  currentHRContainer: {
    backgroundColor: '#334155',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  currentHRLabel: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 10,
  },
  currentHRValue: {
    color: '#E2E8F0',
    fontSize: 48,
    fontWeight: 'bold',
  },
  historyContainer: {
    backgroundColor: '#334155',
    borderRadius: 10,
    padding: 15,
  },
  historyHeader: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  historyEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#475569',
    borderBottomWidth: 1,
  },
  historyTime: {
    color: '#94A3B8',
    fontSize: 16,
  },
  historyHR: {
    color: '#E2E8F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
