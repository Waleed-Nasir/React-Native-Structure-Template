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
import NativeTheme from "./src/theme/NativeTheme";
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






const AppRoot = () => {
  const persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <NativeTheme>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PersistGate loading={null} persistor={persistor}>
            <APP />
            <Toast config={toastConfig} />
          </PersistGate>
        </GestureHandlerRootView>
      </NativeTheme>
    </Provider >
  );
};

export default AppRoot;
