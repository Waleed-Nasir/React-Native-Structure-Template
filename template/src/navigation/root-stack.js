import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import AuthStack from './auth-stack';
import DrawerStack from './drawer-stack';
import MainNoBottomTabNavigator from './no-tab-stack';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{
      headerShown: false
    }}>
      {/* <RootStack.Screen name={screens.authStack} component={AuthStack} /> */}
      <RootStack.Screen name={screens.MainNoBottomTabNavigator} component={MainNoBottomTabNavigator} />
      <RootStack.Screen name={screens.drawerStack} component={DrawerStack} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
