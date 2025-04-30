import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ActivityTrackingScreen from './src/screens/ActivityTrackingScreen';
import SleepMonitoringScreen from './src/screens/SleepMonitoringScreen';
import HeartRateScreen from './src/screens/HeartRateScreen';
import RemindersScreen from './src/screens/RemindersScreen';
import DeviceSyncScreen from './src/screens/DeviceSyncScreen';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function AppStack() {
  const { userToken, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userToken ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ActivityTracking" component={ActivityTrackingScreen} />
          <Stack.Screen name="SleepMonitoring" component={SleepMonitoringScreen} />
          <Stack.Screen name="HeartRate" component={HeartRateScreen} />
          <Stack.Screen name="Reminders" component={RemindersScreen} />
          <Stack.Screen name="DeviceSync" component={DeviceSyncScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
