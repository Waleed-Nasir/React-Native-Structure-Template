/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import APP from "./src/index";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Store } from "./src/store/Store";
import Toast from "react-native-toast-message";
import toastConfig from "./src/utils/ToastConfig";
import { Appearance } from "react-native";
// const newColorTheme = {
//   theme: {
//     0: "transparent",
//     50: "#F6609C",
//     100: "#F6469C",
//   },
//   secondary: {
//     100: "#008CFC",
//   },
// };
// const theme = extendTheme({ colors: newColorTheme });



const colorScheme = Appearance.getColorScheme();
const Light = {
  colors: {
    0: "transparent",
    100: 'white',
    200: 'black',
    300: "red"
  },
  text: {
    0: 'white',
    100: 'black',
    200: "red"
  },
  theme: {
    0: "transparent",
    50: "#F6609C",
    100: "#008ffC",
    200: 'black',
    300: "red"
  },
};
const DARK = {
  colors: {
    0: "transparent",
    100: 'black',
    200: 'white',
    300: "yellow"
  },
  text: {
    0: 'black',
    100: 'white',
    200: "yellow"
  },
  theme: {
    0: "black",
    50: "#F66fff",
    100: "#F64fff",
    200: 'white',
    300: "yellow"
  },
  secondary: {
    100: "#008ffC",
  },
};

const theme = extendTheme({ colors: colorScheme === 'dark' ? DARK : Light });





const AppRoot = () => {
  const persistor = persistStore(Store);
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={Store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PersistGate loading={null} persistor={persistor}>
            <APP />
            <Toast config={toastConfig} />
          </PersistGate>
        </GestureHandlerRootView>
      </Provider>
    </NativeBaseProvider>
  );
};

export default AppRoot;
