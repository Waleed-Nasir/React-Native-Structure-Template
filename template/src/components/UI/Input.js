/**
 * Sample React Native SignIn
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions, Image, Platform, StyleSheet,
  Text, TextInput, View
} from 'react-native';
import { theme } from '../../theme';
import ICON from './Icon';

const { width } = Dimensions.get('screen');

const { colors } = theme

const Input = ({
  leftIcon = false,
  rightIcon = false,
  label = '',
  placeholder = '',
  LableStyle = {},
  InputStyle = {},
  SectionStyle = {},
  InputProps = {},
  IconPress = () => { },
}) => {
  return (
    <View style={styles.Input}>
      <Text style={[styles.label, LableStyle]}>{label}</Text>
      <View style={[styles.SectionStyle, SectionStyle]}>
        {leftIcon ? (
          <Image source={leftIcon} style={styles.ImageStyle} />
        ) : null}
        <TextInput
          style={[styles.InputStyle, InputStyle]}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          {...InputProps}
        />
        {rightIcon ? (
          <ICON
            onPress={IconPress}
            icon={rightIcon}
            style={[styles.ImageStyle, { marginHorizontal: 5 }]}
            bg={'theme.0'}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    width: '100%',
    marginVertical: 5,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
    marginVertical: 10,
  },
  ImageStyle: {
    padding: 8,
    height: 18,
    width: 18,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  InputStyle: {
    flex: 1,
    height: Platform.isPad ? 60 : 50,
    color: colors.black,
  },
  label: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Input;
