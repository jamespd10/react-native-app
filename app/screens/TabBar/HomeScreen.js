//Imports
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

import Header from '../../components/Header'

//constant function HomeScreen
const HomeScreen = props=>{

    const { signOut } = props.extraData;

    const comment = {text: 'nombre'}
  
    return (
      
      <View style={styles.HomeScreen}>

        <Header title='Home'/>

        <View style={styles.HomeView}>
          <Image 
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.img}
          />

          <Text style={styles.txtWelcome}>
            {comment.text}
          </Text>

          <Text style={styles.txtSign}>
            Signed in!
          </Text>

          <Text style={styles.txtHome}>
            Home!
          </Text>

          <TouchableOpacity 
            style={styles.button}
            onPress={signOut}>

            <Text style={styles.btntext}>
              Sign out
            </Text>

          </TouchableOpacity>

        </View>
      </View>
    );
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    HomeScreen:{
      flex: 1
    },
    HomeView: {
      flex: 1,
      paddingLeft: 30,
      paddingRight: 30
    },
    textinput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#000',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1
    },
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#000',
      marginTop: 30,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10
    },
    btntext: {
      color: '#fff',
      fontWeight: 'bold'
    },
    img: {
      width: 200,
      height: 200,
      marginTop: 36,
      alignSelf: 'center',
      borderRadius: 100
    },
    txtReg: {
      marginTop: 20,
      alignSelf: 'center'
    },
    txtWelcome: {
      alignSelf: 'center',
      fontSize: 22,
      color: '#000'
    },
    txtSign: {
      alignSelf: 'center',
      fontSize: 22,
      color: '#000'
    },
    txtHome: {
      alignSelf: 'center',
      fontSize: 22,
      color: '#000'
    }
  });