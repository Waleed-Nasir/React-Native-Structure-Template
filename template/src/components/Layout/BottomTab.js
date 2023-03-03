import { View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions, Image,
  Platform, StyleSheet, TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";
import Text from "../UI/Text";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../theme";
const tabBarSection = [
  {
    title: "Home",
    showName: true,
    routeName: "Home",
    icon: 'home',
    // selectedIcon: HomeFill,
    style: "Bottom_Icon_Buttom",
  },
  {
    title: "My Work",
    showName: true,
    routeName: "MyWork",
    icon: 'bookmark',
    // selectedIcon: BookmarkFill,
    style: "Bottom_Icon_Buttom",
  },
  {
    title: "My Favorites",
    showName: false,
    routeName: "MyFavorites",
    icon: 'heart',
    // selectedIcon: TabHeartFill,
    style: "Bottom_Icon_Buttom",
  },
  {
    title: "Settings",
    showName: true,
    routeName: "Settings",
    icon: 'gear',
    // selectedIcon: SettingFill,
    style: "Bottom_Icon_Buttom",
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTab: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: 'white',
    borderRadius: 14,
  },
  Bottom_Icon_Buttom: {
    width: 24,
    height: 24,
  },
  bottomTabText: {
    fontSize: 10,
    fontWeight: "400",
    // marginTop: 4,
  },
  tab: {
    width: "100%",
    backgroundColor: "transparent",
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    paddingBottom: Platform.OS === "ios" ? 30 : 4,
    // position: 'absolute',
    // bottom: 10
  },
  slider: {
    height: 5,
    position: "absolute",
    top: 0,
    backgroundColor: 'black',
    borderRadius: 10,
    zIndex: 100,
  },
});

const BottomTab = (props) => {
  const { state, navigation } = props;
  // const TabIndex = state?.index;
  const handleTextRef = useRef(null);
  const [TabIndex, setTabIndex] = useState(0)
  const totalWidth = Dimensions.get("window").width;
  const tabWidth = totalWidth / 5;

  const V = {
    0: 0,
    1: (totalWidth / 4.5),
    2: totalWidth / 2,
    3: totalWidth - 90,
  };

  const animateSlider = (index) => {
    handleTextRef.current.transitionTo({
      translateX: V[index],
    });
    setTabIndex(index)
  };

  useEffect(() => {
    animateSlider(TabIndex);
  });

  const nonSelectd = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          animateSlider(index);
          // navigation.navigate(item.routeName, { name: item.title });
        }}
        style={[styles.container]}
      >
        <View style={styles.ButtonContainer}>
          {[
            TabIndex === index ? (
              <Icon name={item.icon} size={24} color={theme.colors.success} />
              // <Image
              //   source={item.selectedIcon}
              //   {...{ ...styles[item.style] }}
              //   style={{ tintColor: 'black' }}
              // />
            ) : (
              <Icon name={item.icon} size={24} color={theme.colors.primary} />
              // <Image source={item.icon} {...{ ...styles[item.style] }} style={{ tintColor: 'white' }} />
            ),
          ]}
          <Text style={styles.bottomTabText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (

    <View style={styles.tab}>
      <View style={styles.bottomTab} shadow={1}
      >
        <Animatable.View
          ref={handleTextRef}
          style={[
            styles.slider,
            {
              width: 50,
            },
          ]}
        />
        {tabBarSection.map((item, index) => nonSelectd(item, index))}
      </View>
    </View>
  );
};

export default BottomTab;
