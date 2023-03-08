import React from 'react';
import { I18nManager, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-community/async-storage';
// import RNRestart from 'react-native-restart';
import { drawerIcons } from '../../helpers';
import { images } from '../../constants';
import styles from './drawer.styles';
import { useTheme, View } from 'native-base';
import Text from '../UI/Text';
import ICON from '../UI/Icon';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../store/Slicer/Settings';

function Drawer(props) {
  const { colors } = useTheme();
  const dispatch = useDispatch()
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  // this should be called for language that need RTL for example for Arabic
  const changeLanguageWithRTL = async () => {
    let currentLanguage = await AsyncStorage.getItem('language');
    if (currentLanguage == 'en') {
      await AsyncStorage.setItem('language', 'fr');
      I18nManager.forceRTL(true);
      // RNRestart.Restart();
    } else {
      await AsyncStorage.setItem('language', 'en');
      I18nManager.forceRTL(false);
      // RNRestart.Restart();
    }
  };

  const changeLanguageWithoutRTL = async () => {
    let currentLanguage = await AsyncStorage.getItem('language');
    if (currentLanguage == 'en') {
      await AsyncStorage.setItem('language', 'fr');
      // RNRestart.Restart();
    } else {
      await AsyncStorage.setItem('language', 'en');
      // RNRestart.Restart();
    }
  };
  const handleTheme = (value) => {
    dispatch(changeTheme(value))
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.theme.background }]}>
      <FastImage source={{ uri: 'https://i.pinimg.com/originals/4e/53/4f/4e534f3a1b91f32c2c2ea40f32fa33ec.jpg' }} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.itemContainer} onPress={() => changeLanguageWithRTL()}>
          {/* ÷{drawerIcons.language} */}
          <Text style={styles.itemText}>{i18('Drawer.changeLanguage')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          {/* ÷{drawerIcons.language} */}
          <Text style={styles.itemText}>{i18('Drawer.changeTheme')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={() => changeLanguageWithRTL()}>
          <ICON onPress={()=>handleTheme('Light')}  bg={'theme.light'} />
          <ICON onPress={()=>handleTheme('Dark')}  bg={'theme.black:alpha.80'} />
          <ICON onPress={()=>handleTheme('Yellow')}  bg={'theme.warning'} />
          <ICON onPress={()=>handleTheme('Blue')}  bg={'theme.info'} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export { Drawer };
