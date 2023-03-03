/**
 * Sample React Native SignIn
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Colors } from "../../assets/Colors";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import { SMS } from "../../assets/Images";

const { width } = Dimensions.get("screen");
const SearchBar = ({
  LeftIcon = false,
  RightIcon = false,
  label = "",
  placeholder = "",
  style = {},
  value = "",
  onChangeText = () => {},
  onSubmitEditing = () => {},
}) => {
  return (
    <View style={[styles.Input, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.SectionStyle}>
        {LeftIcon ? LeftIcon : null}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.InputStyle}
          placeholder={placeholder}
          placeholderTextColor={Colors.LightGray}
          underlineColorAndroid="transparent"
          returnKeyType="search"
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={false}
        />
        {RightIcon ? RightIcon : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    width: "100%",
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
    marginVertical: 10,
    elevation: 8,
  },
  ImageStyle: {
    padding: 8,
    height: 20,
    width: 20,
    resizeMode: "stretch",
    alignItems: "center",
    marginHorizontal: 14,
  },
  InputStyle: {
    flex: 1,
    height: 50,
    color: Colors.LightGray,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    color: Colors.LightGray,
  },
});

export default SearchBar;
