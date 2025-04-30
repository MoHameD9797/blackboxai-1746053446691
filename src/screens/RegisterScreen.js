import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import { register } from '../services/authService';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert('Validation Error', 'Please fill all fields');
      return;
    }
    setLoading(true);
    try {
      const data = await register({ username, email, password });
      setLoading(false);
      Alert.alert('Registration Successful', 'You can now log in');
      navigation.replace('Login');
    } catch (error) {
      setLoading(false);
      Alert.alert('Registration Failed', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Register for FitPro</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#94A3B8"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
        editable={!loading}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#94A3B8"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        editable={!loading}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
        {loading ? <ActivityIndicator color="#E2E8F0" /> : <Text style={styles.buttonText}>Register</Text>}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#334155',
    color: '#E2E8F0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#E2E8F0',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
