import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ActivityTrackingScreen() {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [workoutActive, setWorkoutActive] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    let interval = null;
    if (workoutActive) {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
        // Simulate steps and calories increment
        setSteps((prev) => prev + 5);
        setCalories((prev) => prev + 0.5);
        setDistance((prev) => prev + 0.004); // approx 4 meters per 5 steps
      }, 1000);
    } else if (!workoutActive && duration !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [workoutActive]);

  const toggleWorkout = () => {
    setWorkoutActive(!workoutActive);
    if (!workoutActive) {
      // Reset stats when starting new workout
      setSteps(0);
      setCalories(0);
      setDistance(0);
      setDuration(0);
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Activity Tracking</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Steps</Text>
          <Text style={styles.statValue}>{steps}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Calories</Text>
          <Text style={styles.statValue}>{calories.toFixed(1)} kcal</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Distance</Text>
          <Text style={styles.statValue}>{distance.toFixed(2)} km</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Duration</Text>
          <Text style={styles.statValue}>{formatDuration(duration)}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, workoutActive ? styles.stopButton : styles.startButton]}
        onPress={toggleWorkout}
      >
        <Text style={styles.buttonText}>{workoutActive ? 'Stop Workout' : 'Start Workout'}</Text>
      </TouchableOpacity>
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
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    backgroundColor: '#334155',
    width: '48%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 10,
  },
  statValue: {
    color: '#E2E8F0',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    color: '#E2E8F0',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
