/**
 * Sample React Native SignIn
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Box, IconButton } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
const ICON = props => {
  const { borderRadius = 8, bg } = props;
  return (
    <Box alignItems="center" mx={1}>
      <IconButton
        onPress={props.onPress}
        icon={
          <Image
            source={props?.icon}
            style={[styles.ImageStyle, props.style]}
          />
        }
        borderRadius={borderRadius}
        bg={bg || `theme.icon`}
        _hover={{
          bg: `theme.icon:alpha.70`,
        }}
        _pressed={{
          bg: `theme.icon:alpha.70`,
        }}
        p={props.p}
        size={'lg'}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
    // marginHorizontal: 14,
  },
});
export default ICON;
