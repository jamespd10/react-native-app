import React, { Component, useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {    StyleSheet, 
            Text, 
            View, 
            TextInput, 
            TouchableOpacity, 
            Image, 
            ScrollView,
            AsyncStorage } from 'react-native';

//Constant function Settings
import Header from '../../components/Header'

const ProfileScreen=props=> {

  return (

    <View style={styles.HomeScreen}>

      <Header title='Profile' />

      <ScrollView style={styles.ScrollForm}>

      <Icon style={styles.img} name="ios-contact" size={200} color='#000'/>

      <Text style={styles.txtheader} >
        James Pico
      </Text>

      <View style={styles.inputSection}>

        <Text style={styles.txtTeen}>Desarrollador de Software</Text>
        <Text style={styles.barra}>|</Text>
        <Text style={styles.txtTeen}>Panamá</Text>

      </View>

      <View style={styles.inputSection}>

        <View style={styles.iconSection}>
          <Icon style={styles.icon} name="ios-paper-plane" size={20} color='#000'/>
        </View>
        <View style={styles.iconSection}>
          <Icon style={styles.icon} name="ios-paper-plane" size={20} color='#000'/>
        </View>
        <View style={styles.iconSection}>
          <Icon style={styles.icon} name="ios-paper-plane" size={20} color='#000'/>
        </View>
        <View style={styles.iconSection}>
          <Icon style={styles.icon} name="ios-paper-plane" size={20} color='#000'/>
        </View>

      </View>

      <View style={styles.inputSection}>

        <View style={styles.followSection}>
          <Text style={styles.txtheader}>80</Text>
          <Text>Post</Text>
        </View>

        <View style={styles.followSection}>
          <Text style={styles.txtheader}>1000</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.followSection}>
          <Text style={styles.txtheader}>200</Text>
          <Text>Following</Text>
        </View>

      </View>

      <View style={styles.inputSection}>

        <TouchableOpacity style={styles.btnPosts}>

          <Text style={styles.txtPosts}>Posts</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.boxPosts}>

        <View style={styles.postsSection}>

          <Image 
            source={{uri: 'http://192.168.0.137/clinica-utp/img/profile-img/james.jpeg'}}
            style={styles.imagePost}
          />
          <Image 
            source={{uri: 'http://192.168.0.137/clinica-utp/img/profile-img/james.jpeg'}}
            style={styles.imagePost}
          />
          <Image 
            source={{uri: 'http://192.168.0.137/clinica-utp/img/profile-img/james.jpeg'}}
            style={styles.imagePost}
          />

        </View>

        <View style={styles.postsSection}>

          <Image 
            source={{uri: 'http://192.168.0.137/clinica-utp/img/profile-img/james.jpeg'}}
            style={styles.imagePost}
          />
          <Image 
            source={{uri: 'http://192.168.0.137/clinica-utp/img/profile-img/james.jpeg'}}
            style={styles.imagePost}
          />
          <Image 
            source={{uri: 'http://192.168.0.137/clinica-utp/img/profile-img/james.jpeg'}}
            style={styles.imagePost}
          />

        </View>

      </View>

      </ScrollView>

    </View>
    
  );
}

//Export Function
//<ActivityIndicator size="large" color="#0000ff" style={styles.splash} />
export default ProfileScreen;

/*<Image 
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.imagePost}
          />*/

const styles = StyleSheet.create({
    HomeScreen:{
      flex: 1,
    },
    ScrollForm:{
      paddingLeft: 10,
      paddingRight: 10,
    },
    txtTeen: {
      fontStyle: 'italic',
      color: 'gray'
    },
    barra: {
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    txtheader: {
      fontSize: 24,
      color: '#000',
      paddingBottom: 10,
      marginBottom: 5,
      alignSelf: 'center'
    },
    inputSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#fff',
      borderRadius: 30,
      marginBottom: 20,
      padding: 5
    },
    followSection: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5
    },
    iconSection: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: 50,
      height: 50,
      borderRadius: 100/2,
      padding: 5,
      margin: 5
    },
    btnPosts:{
      backgroundColor: 'gray',
      width: '100%',
      alignItems: 'center',
      padding: 20,
      borderRadius: 30
    },
    txtPosts:{
      color: '#fff',
      fontWeight: 'bold'
    },
    textinput: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      color: '#000',
    },
    img: {
      marginTop: 5,
      alignSelf: 'center',
      borderRadius: 100
    },
    icon: {
      padding: 5,
    },
    boxPosts: {
      flex: 1,
      marginBottom: 20
    },
    postsSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      //backgroundColor: '#fff',
      borderRadius: 30,
      padding: 2
    },
    imagePost: {
      alignSelf: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginHorizontal: 2,
      flex: 1,
      height: 100
    }
  });