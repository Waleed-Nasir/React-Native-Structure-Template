/**
 * Sample React Native SingleProduct
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Dimensions, Image, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
// import { Heart, HeartFill } from "../../assets/Images";
import Text from "./Text";
const { width, height } = Dimensions.get("screen");
const SingleProduct = (item) => {
  const {
    title,
    image,
    index,
    row = 2,
    size = 220,
    fontSize = Platform.isPad ? 24 : 16,
    subTitle = "",
    id,
  } = item;
  const is_fav = false
  // getMyFavList[id]?.is_fav === 1
  //   ? 1
  //   : getMyFavList[id]?.is_fav === 0
  //   ? 0
  //   : false;

  let BG_Color_1 = index % 2 ? 'white' : 'pink';
  let BG_Color_2 = index % 2 ? 'pink' : 'white';

  const makeItFav = () => {
    // if (is_fav !== false) {
    let checkFav = is_fav === 1 ? 0 : 1;
    // dispatch(
    //   makeItMyFavorite({
    //     nft_id: id,
    //     is_fav: checkFav,
    //     users_id: userID,
    //   })
    // );
    // var data = { ...getMyFavList };
    if (checkFav === 1) {
      data[id] = { is_fav: 1 };
    } else {
      data[id] = { is_fav: 0 };
    }
    // dispatch(handleLocalFave(data));
    // setTimeout(() => {
    //   dispatch(getMyFavoriteList(userID));
    // }, 1200);
    // } else {
    //   MessageShow(
    //     "error",
    //     "NFT Error",
    //     "Current User doesn`t have make favrite access"
    //   );
    // }
  };

  return (
    <View style={[styles.Card]}>
      <View
        style={[
          styles.CardImage,
          {
            backgroundColor: row % 2 ? BG_Color_1 : BG_Color_2,
          },
        ]}
      >
        <View style={styles.image}>
          {/* <WebImage image={image?.uri} /> */}
          <Image source={image} style={styles.image} resizeMode={"stretch"} />
          {/* <SvgUri
            width="100%"
            height="100%"
            source={{
              uri: "https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg",
            }}
          /> */}
        </View>
        <TouchableOpacity onPress={makeItFav}>
          <View style={styles.Heart}>
            {/* <Image
              source={is_fav === 1 ? HeartFill : Heart}
              style={styles.image}
              resizeMode={"stretch"}
            /> */}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.CartTitle}>
        <Text style={[styles.text, { fontSize }]}>{title}</Text>
      </View>
      <View style={styles.CartTitle}>
        <Text style={[styles.Subtitle]}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Card: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginVertical: 10,
    
  },
  CardImage: {
    height: height / 2.2,
    width: "100%",
    borderRadius: 16,
    marginVertical: 20,
    
  },
  CartTitle: {
    width: "100%",
    alignItems: "flex-start",
    marginVertical: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    // fontFamily: FONTFAMILY.PoppinsBold,
    color: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  Heart: {
    width: Platform.isPad ? 45 : 30,
    height: Platform.isPad ? 45 : 30,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 100,
    right: 7,
    bottom: -20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  Subtitle: {
    fontSize: Platform.isPad ? 20 : 14,
    fontWeight: "600",
    // fontFamily: FONTFAMILY.PoppinsBold,
    color: 'Blue',
  },
});

export default SingleProduct;
