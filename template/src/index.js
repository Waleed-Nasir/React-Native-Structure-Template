import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './navigation/root-stack';
import { theme } from './theme';
import "./i18next/index";

// import { DropDownHolder, PushNotification } from './components';

enableScreens();

const App = () => {
 
  useEffect(() => {
    console.disableYellowBox = true;
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <AppNavigator />
      {/* <PushNotification />
         <DropdownAlert ref={(react-native-paperref) => DropDownHolder.setDropDown(ref)} /> */}
    </NavigationContainer>
  );
};

export default (App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
