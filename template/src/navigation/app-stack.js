import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import Home from '../screens/home';
import VideoCallScreen from '../screens/VideoCalling';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name={screens.home} component={VideoCallScreen} />
    </MainStack.Navigator>
  );
}
