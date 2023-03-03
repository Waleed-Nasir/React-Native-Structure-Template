/**
 * Sample React Native ItemRow
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../assets/Colors';
import { FONTFAMILY } from '../../assets/fonts/fonts';
import { clock, Cross } from '../../assets/Images';
import Text from './Text';

const ItemRow = ({
  title,
  image = clock,
  showCross = true,
  style = {},
  onPress = () => { },
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={["#ff2fff70", '#ff640c70', '#ffe00940', '#ffffff70']}
        style={[styles.Card, style]}
      >
        <View style={styles.CardImage}>
          <Image source={image} style={{ marginLeft: 4 }} />
          <Text style={styles.text}>{title}</Text>
        </View>
        {showCross ? <Image source={Cross} /> : null}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Card: {
    height: 50,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.LightGray,
    borderBottomWidth: 0.5,
    marginBottom: 10,
    borderRadius: 10
  },
  CardImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: FONTFAMILY.PoppinsMedium,
    paddingHorizontal: 15,
    color: '#fff',
    fontWeight: '600',
    textShadowColor: Colors.SolidPink,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default ItemRow;
