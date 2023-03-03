/**
 * Sample React Native Item
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Pressable } from "native-base";
import React from "react";
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Text from "./Text";

const Item = ({
  title,
  image,
  subTitle,
  index,
  action = false,
  pressAction = () => { },
  id,
  onPress = () => { },
}) => {

  const getNFT = () => {
    onPress();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={getNFT}>
        <View style={styles.Card}>
          <View style={styles.row}>
            <Image
              source={image}
              style={[
                styles.image,
                { backgroundColor: 'pink' },
              ]}
            />
            {/* <View
          style={[
            styles.image,
            {
              backgroundColor: index % 2 ? Colors.LightBlue : Colors.LightPink,
            },
          ]}
        >
          <WebImage image={image.uri} />
        </View> */}
            <View style={styles.CartTitle}>
              <Text style={[styles.text]} numberOfLines={1}>
                {title}
              </Text>
              <Text style={[styles.Subtitle]}>{subTitle}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {action ? (
        <Pressable style={[styles.action]} onPress={pressAction}>
          {action}
        </Pressable>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  Card: {
    flex: 1,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    padding: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  CartTitle: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  Subtitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'red'
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  action: {
    width: 30,
    height: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    right: 20,
    top: -5
  },
});

export default Item;
