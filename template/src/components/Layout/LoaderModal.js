import { Spinner } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../assets/Colors";

export default function LoaderModal(props) {
  const visibility = useSelector((state) => state.Loader.isVisible);

  const renderContent = () => (
    <View style={styles.modal}>
      <View style={styles.body}>
        <Spinner size="lg" color={"theme.100"} />
      </View>
    </View>
  );

  return (
    <Modal
      visible={props?.visibility ? props?.visibility : visibility}
      statusBarTranslucent
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        props.setVisibility(!props?.visibility);
      }}
    >
      {renderContent()}
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    backgroundColor: Colors.TPink,
  },
  body: {
    alignSelf: "center",
  },
});
