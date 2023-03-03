import { Pressable,  } from "native-base";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme";
import Text from "./Text";
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
const Product = (item) => {
  const {
    title,
    image,
    index,
    row = 2,
    size = 220,
    fontSize = 16,
    onPress = () => { },
    id,
  } = item;
  let BG_Color_1 = index % 2 ? 'Blue' : 'Pink';
  let BG_Color_2 = index % 2 ? 'Pink' : 'Blue';
  // const is_fav =
  //   getMyFavList[id]?.is_fav === 1
  //     ? 1
  //     : getMyFavList[id]?.is_fav === 0
  //     ? 0
  //     : false;
  const is_fav = false
  const getNFT = () => {
    onPress();

  };
  const makeItFav = () => {
    let checkFav = is_fav === 1 ? 0 : 1;
    // dispatch(
    //   makeItMyFavorite({
    //     nft_id: id,
    //     is_fav: checkFav,
    //     users_id: userID,
    //   })
    // );
    // var data = { ...getMyFavList };
    // if (checkFav === 1) {
    //   data[id] = { is_fav: 1 };
    // } else {
    //   data[id] = { is_fav: 0 };
    // }
    // dispatch(handleLocalFave(data));
    // setTimeout(() => {
    //   dispatch(getMyFavoriteList(userID));
    // }, 1500);
  };

  return (
    <Pressable onPress={getNFT} key={index}>
      {({ isPressed }) => {
        return (
          <View
            style={[
              styles.Card,
              {
                width: size,
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              },
            ]}
          >
            <View
              style={[
                styles.CardImage,
                {
                  backgroundColor: row % 2 ? BG_Color_1 : BG_Color_2,
                  height: size,
                },
              ]}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 0,
                  height: 40,
                  width: 40,
                  zIndex: 100000,
                }}
                onPress={makeItFav}
              >
                {/* <View style={styles.Heart}>
                  <Image
                    source={is_fav === 1 ? HeartFill : Heart}
                    style={[styles.image]}
                    resizeMode={"stretch"}
                  />
                </View> */}
              </TouchableOpacity>
              <Image
                source={image}
                style={styles.image}
                resizeMode={"cover"}
              />
            </View>
            <View style={styles.CartTitle}>
              <Text style={[styles.text, { fontSize }]} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </View>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Card: {
    // width: 220,
    // height: 300,
    backgroundColor:white,
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
    marginVertical: 10,
  },
  CardImage: {
    height: 230,
    width: "100%",
    borderRadius: 16,
  },
  CartTitle: {
    // flex: 1,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color:'black'
    // fontFamily: FONTFAMILY.PoppinsBold,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  Heart: {
    width: Platform.isPad ? 34 : 24,
    height: Platform.isPad ? 34 : 24,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 100,
    right: 7,
    top: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Product;
