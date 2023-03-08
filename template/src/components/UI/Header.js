import { Box, HStack, IconButton, StatusBar } from 'native-base';
import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import ICON from './Icon';
import Text from './Text';
import { theme } from '../../theme';

const { colors } = theme;
const Header = ({
  CenterLogo = false,
  LeftIcon = false,
  PressLeft = () => { },
  PressRight = () => { },
  RightIcon = false,
  CenterText = false,
  LeftText = false,
  RightText = false,
  Profile = false,
  bg = 'white',
  TextProps = {},
}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="white"
        barStyle={'dark-content'}
      />
      <Box safeAreaTop bg={'theme.background'} height={70} />
      <HStack
        position={'absolute'}
        safeAreaTop
        bg={'theme.background'}
        paddingX={5}
        py="2"
        top={0}
        justifyContent="space-between"
        alignItems="flex-end"
        zIndex={10}
        w="100%">
        <HStack
          alignItems={'center'}
          justifyContent={'flex-start'}
          flex={0.2}
          height={'100%'}>
          {LeftIcon ? (
            <ICON
              onPress={PressLeft}
              icon={LeftIcon}
              style={{ width: 15, height: 15 }}
              bg={'theme.white'}
              borderRadius={100}
            />
          ) : LeftText ? (
            <Text
              color={'theme.text'}
              onPress={PressLeft}
              fontSize={Platform.isPad ? '20' : "16"}
            >
              {LeftText}
            </Text>
          ) : Profile ? (
            <IconButton
              onPress={PressLeft}
              icon={<Image source={Profile} style={[styles.ImageStyle]} />}
              borderRadius={10}
              p={0}
            />
          ) : null}
        </HStack>
        <HStack alignItems={'center'} justifyContent={'center'} flex={1} >
          {CenterLogo ? (
            <Image source={CenterLogo} />
          ) : CenterText ? (
            <Text
              color={'theme.text'}
              fontSize={Platform.isPad ? '20' : "16"}
              h={Platform.isPad ? 10 : 7}
              {...TextProps}
            >
              {CenterText}
            </Text>
          ) : null}
        </HStack>
        <HStack
          height={'100%'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          flex={0.2}>
          {RightIcon ? (
            <ICON
              onPress={PressRight}
              icon={RightIcon}
              style={{ width: 15, height: 15 }}
              borderRadius={100}
              bg={'theme.white'}
            />
          ) : RightText ? (
            <Text
              color={'theme.text'}
              fontSize="16"
            >
              {RightText}
            </Text>
          ) : null}
        </HStack>
      </HStack>
    </>
  );
};
const styles = StyleSheet.create({
  ImageStyle: {
    height: Platform.isPad ? 50 : 30,
    width: Platform.isPad ? 50 : 30,
    resizeMode: 'stretch',
    alignItems: 'center',
    borderRadius: 100
    // marginHorizontal: 14,
  },
});
export default Header;
