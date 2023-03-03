/**
 * Sample React Native Chips
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import { Pressable } from "native-base";
import { theme } from "../../theme";
const {
  colors
} = theme
const {
  transparent,
  white,
  black,
  text,
  primary,
  success,
  error,
  background
} = colors
const Chips = ({ title, image, onPress }) => {

  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => {
        return (
          <View
            style={[
              styles.Card,
              {
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              },
            ]}
          >
            <View style={styles.CardImage}>
              <Image
                source={image}
                style={styles.Image}
                resizeMode={"contain"}
              />
            </View>
            <Text style={styles.text}>{title}</Text>
          </View>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Card: {
    height: 40,
    backgroundColor: white,
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 4,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  CardImage: {
    backgroundColor: background,
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 14,
    // fontFamily: FONTFAMILY.PoppinsRegular,
    paddingHorizontal: 20,
    color: text
  },
  Image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});

export default Chips;
