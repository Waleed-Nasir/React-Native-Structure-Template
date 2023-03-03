/**
 * Sample React Native SignIn
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button } from 'native-base';
import { Platform } from 'react-native';

const AppButton = props => {
  return (
    <Button
      bg={`colors.300`}
      _hover={{
        bg: `colors.300:alpha.80`,
      }}
      _pressed={{
        bg: `colors.300:alpha.80`,
      }}
      size={'lg'}
      _text={{
        color: `text.0`,
      }}
      width="100%"
      height={Platform.isPad ? 60 : 50}
      borderRadius={8}
      // colorScheme={'theme.100'}
      marginY={4}
      {...props}
    />
  );
};

export default AppButton;
