import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';

export default function RemindersScreen() {
  const [reminders, setReminders] = useState([
    { id: '1', type: 'Water', time: '09:00', active: true },
    { id: '2', type: 'Medication', time: '12:00', active: false },
    { id: '3', type: 'Activity Break', time: '15:00', active: true },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newType, setNewType] = useState('');
  const [newTime, setNewTime] = useState('');

  const toggleReminder = (id) => {
    setReminders((prev) =>
      prev.map((reminder) =>
        reminder.id === id ? { ...reminder, active: !reminder.active } : reminder
      )
    );
  };

  const addReminder = () => {
    if (!newType || !newTime) {
      Alert.alert('Validation Error', 'Please enter reminder type and time');
      return;
    }
    const newReminder = {
      id: (reminders.length + 1).toString(),
      type: newType,
      time: newTime,
      active: true,
    };
    setReminders((prev) => [...prev, newReminder]);
    setNewType('');
    setNewTime('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reminders</Text>
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <View>
              <Text style={styles.reminderType}>{item.type}</Text>
              <Text style={styles.reminderTime}>{item.time}</Text>
            </View>
            <Switch
              value={item.active}
              onValueChange={() => toggleReminder(item.id)}
              trackColor={{ false: '#767577', true: '#4CAF50' }}
              thumbColor={item.active ? '#34D399' : '#f4f3f4'}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add Reminder</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>New Reminder</Text>
            <TextInput
              style={styles.input}
              placeholder="Reminder Type"
              placeholderTextColor="#94A3B8"
              value={newType}
              onChangeText={setNewType}
            />
            <TextInput
              style={styles.input}
              placeholder="Time (HH:MM)"
              placeholderTextColor="#94A3B8"
              value={newTime}
              onChangeText={setNewTime}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Add" onPress={addReminder} />
            </View>
          </View>
        </View>
      </Modal>
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
  reminderItem: {
    backgroundColor: '#334155',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reminderType: {
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  reminderTime: {
    color: '#94A3B8',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#E2E8F0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
  },
  modalContent: {
    backgroundColor: '#1E293B',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#334155',
    color: '#E2E8F0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
