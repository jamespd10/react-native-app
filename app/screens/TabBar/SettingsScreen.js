import * as React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {  AsyncStorage, 
          Button, 
          Text, 
          TextInput, 
          View, 
          StyleSheet, 
          Image, 
          TouchableOpacity, 
          ScrollView } from 'react-native';
//Constant function Settings
import Header from '../../components/Header'
export default function SettingsScreen() {
    return (
      <View style={styles.HomeScreen}>

      <Header title='Settings'/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
  HomeScreen:{
    flex: 1
  },
})