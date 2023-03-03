/**
 * Sample React Native SignIn
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { ScrollView } from "native-base";
import { useFormControlProvider } from "native-base/lib/typescript/components/composites/FormControl";
import React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Layout = ({ Header = () => {}, Footer = () => {}, children,height=120 }) => {
  return (
    // <View style={styles.layout}>
    <LinearGradient
      start={{ x: 2, y: 1 }}
      end={{ x: 2, y: 0.1 }}
      colors={["#ff2fff70", "#23dcad70","#13d8ff70",'#ffe00970','#ff640c70']}
      style={styles.layout}
    >
      {Header()}
      <ScrollView style={styles.scroll} bounces={false} contentContainerStyle={{backgroundColor:'transparent'}}>
        {children}
      </ScrollView>
      {Footer()}
      <View style={{height}} />
    </LinearGradient>
    // </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    flex: 1,
    // paddingHorizontal: 20,
    // paddingBottom:120
  },
  scroll: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor:'transparent'
  },
});

export default Layout;
