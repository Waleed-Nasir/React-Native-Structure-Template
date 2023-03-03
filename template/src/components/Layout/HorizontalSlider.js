/**
 * Sample React Native HorizontalSlider
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { FlatList, Heading } from "native-base";
import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import ICON from "../UI/Icon";
import Text from "../UI/Text";
import { Pressable } from "native-base";
import { theme } from "../../theme";


const { colors } = theme
const ArrowSquareRight = null

const HorizontalSlider = ({
  showViewAll = false,
  title = "",
  data = [],
  row = 0,
  Component = () => {},
  onPress = () => {},
  onLoadData = () => {},
}) => {
  const onEndReached = ({ distanceFromEnd }) => {
    if (distanceFromEnd < 0 && data.length >= (Platform.isPad ? 4 : 2)) {
      onLoadData(data);
      return;
    }
  };

  return (
    <View style={styles.VerticalList}>
      <View style={styles.VerticalHeadingList}>
        <Heading fontSize={14} bold>
          {title}
        </Heading>
        {showViewAll ? (
          <Pressable onPress={onPress}>
            <View style={styles.VerticalViewAll} pointerEvents={"none"}>
              <Text style={styles.VerticalViewAllText}>View All</Text>
              <ICON icon={ArrowSquareRight} p={0} onPress={onPress} />
            </View>
          </Pressable>
        ) : null}
      </View>
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 10 }}
          onEndReached={onEndReached}
          ListHeaderComponent={() => (
            <View
              style={{
                padding: 5,
              }}
            />
          )}
          ListFooterComponent={() => (
            <View
              style={{
                padding: 5,
              }}
            />
          )}
          renderItem={({ item, index }) => (
            <Component {...{ ...item, index: index, row: row }} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  VerticalList: {
    width: "100%",
  },
  VerticalHeadingList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  VerticalViewAll: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  VerticalViewAllText: {
    fontSize: 12,
    color: colors.white,
    paddingHorizontal: 5,
  },
});

export default HorizontalSlider;
