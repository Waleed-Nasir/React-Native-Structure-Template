import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import AppButton from "./Button";
import { color } from "react-native-reanimated";

const AppModal = ({ Modaldata = {} }) => {
  console.log(Modaldata.details || false, "Modaldata");
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={Modaldata.details ? true : false}
        onRequestClose={Modaldata?.cancel}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.Heading}>{Modaldata?.title}</Text>
            <Text style={styles.modalText}>{Modaldata.details}</Text>
            <View style={styles.BottomButton}>
              <AppButton
                onPress={Modaldata?.cancel}
                {...{
                  bg: `#eeb6a5`,
                  _hover: {
                    bg: `#eeb6a5:alpha.80`,
                  },
                  _pressed: {
                    bg: `#eeb6a5:alpha.80`,
                  },
                  style: { width: "45%" },
                }}
              >
                NO
              </AppButton>
              <AppButton
                {...{ style: { width: "45%" } }}
                onPress={Modaldata?.okay}
              >
                YES
              </AppButton>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 5,
  },
  BottomButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  Heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ff3e1e",
    paddingBottom: 20,
  },
});

export default AppModal;
