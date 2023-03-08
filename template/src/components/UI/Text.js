/**
 * Sample React Native SignIn
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Text as N_Text } from "native-base";
import React from "react";
import { Platform, StyleSheet } from 'react-native';
import { FontHelper } from "../../helpers";
import _ from 'lodash';

const Text = (props) => {
  var { style } = props;
  if (style instanceof Array) {
    style = _.map(style, (styleObject) => styleObject && FontHelper(StyleSheet.flatten(styleObject)));
  } else {
    style = FontHelper(StyleSheet.flatten(style || {}));
  }

  return (
    <N_Text
      fontSize={Platform.isPad ? "lg" : "md"}
      ellipsizeMode="tail"
      {...props}
      style={style}
      color={'theme.text'}
    />
  );
};

export default Text;
