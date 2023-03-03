import React from 'react';
import {ImageBackground, StyleSheet, Platform} from 'react-native';
import {Background_PNG} from '../../assets/Images/index';
import {KeyboardAvoidingView} from 'native-base';

const GradientBackground = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground source={Background_PNG} style={styles.gradient}>
        {props.children}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default GradientBackground;
