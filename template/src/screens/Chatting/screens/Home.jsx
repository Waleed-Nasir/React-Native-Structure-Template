import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppButton, Input } from '../../../components';
import { screens } from '../../../config';

export const ChatHome = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({ roomId: 'React-Native Chatting Room', username: 'New User' });
  return (
    <View style={styles.container}>
      <Input
        onChangeText={val => setUser(user => ({ ...user, roomId: val }))}
        InputProps={{
          value: user.roomId,
          editable: false
        }}
        SectionStyle={{ marginVertical: 0 }}
        placeholder="Room ID"
      />
      <Input
        onChangeText={val => setUser(user => ({ ...user, username: val }))}
        InputProps={{
          value: user.username,
        }}
        SectionStyle={{ marginVertical: 0 }}
        placeholder="UserName"
      />
      <View style={styles.button}>
        <AppButton
          onPress={() =>
            navigation.navigate(screens.MainNoBottomTabNavigator, { screen: 'Chatting', params: { user: user } })
          }
        >Join the Chat</AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  button: {
    width: '100%',
  },
});
