import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function DeviceSyncScreen() {
  const [devices, setDevices] = useState([
    { id: '1', name: 'Fitbit Versa 3', type: 'Smartwatch', synced: true },
    { id: '2', name: 'Garmin Vivosmart 4', type: 'Fitness Band', synced: false },
  ]);

  const syncDevice = (id) => {
    Alert.alert('Sync', 'Syncing device...');
    // Placeholder for actual sync logic
    setDevices((prev) =>
      prev.map((device) =>
        device.id === id ? { ...device, synced: true } : device
      )
    );
  };

  const removeDevice = (id) => {
    setDevices((prev) => prev.filter((device) => device.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Connected Devices</Text>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deviceItem}>
            <View>
              <Text style={styles.deviceName}>{item.name}</Text>
              <Text style={styles.deviceType}>{item.type}</Text>
              <Text style={styles.syncStatus}>
                {item.synced ? 'Synced' : 'Not Synced'}
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              {!item.synced && (
                <TouchableOpacity
                  style={styles.syncButton}
                  onPress={() => syncDevice(item.id)}
                >
                  <Text style={styles.buttonText}>Sync</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeDevice(item.id)}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {/* Future: Add device discovery and pairing */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  deviceItem: {
    backgroundColor: '#334155',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deviceName: {
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceType: {
    color: '#94A3B8',
    fontSize: 16,
  },
  syncStatus: {
    color: '#A1A1AA',
    fontSize: 14,
    marginTop: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  syncButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: '#EF4444',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#E2E8F0',
    fontWeight: 'bold',
  },
});
