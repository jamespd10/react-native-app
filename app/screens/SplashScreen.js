import React, { Component, useState } from 'react';

import {    Alert,
            Modal,
            StyleSheet,
            Text,
            TouchableHighlight,
            View,
            AsyncStorage,
            ActivityIndicator } from 'react-native';

/*export default function SplashScreen() {

    return (

      <View style={styles.splash}>

        <Text>Loading...</Text>

        <ActivityIndicator size="large" color="#0000ff" style={styles.splash} />
        
      </View>

    );

}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
  },
  indicator:{
    alignSelf: 'center',
  },
});*/
export default function SplashScreen() {

  const [modalVisible, setModalVisible] = useState(true);

return (
  <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size="large" color="#0000ff" style={styles.splash} />
        </View>
      </View>
    </Modal>
  </View>
);
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  splash:{
      alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});