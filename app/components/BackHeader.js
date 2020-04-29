import React from 'react';

import {  StyleSheet, 
          View, 
          TouchableOpacity} from 'react-native';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

const Header = props=> {

  return (

    <View style={styles.header}>

        <TouchableOpacity onPress={() => props.navigation.goBack()}>

            <FontAwesome style={styles.icon} name="arrow-left" size={35} color='#000'/>

        </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  header: {
    width: '100%',
    flexDirection: 'row',
    height: 90,
    paddingTop: 36,
    //backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headertitle: {
      color: 'black',
      fontSize: 30,
      marginLeft: 36
  },
  icon: {
    marginLeft: 20,
    marginTop: 5
  }

});

export default Header