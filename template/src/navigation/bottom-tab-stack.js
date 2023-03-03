import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import BottomTab from '../components/Layout/BottomTab';
import { screens } from '../config';
import AppStack from './app-stack';

const BottomTabStack = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <BottomTab {...props} />}
      activeColor={'#f0edf6'}
      inactiveColor={'red'}
      barStyle={styles.barStyle}>
      <BottomTabStack.Screen name={screens.appStack} component={AppStack} />
    </BottomTabStack.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyle: { backgroundColor: '#694fad' },
});
