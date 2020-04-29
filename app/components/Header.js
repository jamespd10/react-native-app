import React from 'react';

import {  StyleSheet, 
          View, 
          Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Header = props=> {

  return (

    <View style={styles.header}>

      <Text style={styles.headertitle}>{props.title}</Text>
      <Icon style={styles.icon} name="ios-menu" size={40} color='#000'/>

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
    marginRight: 20,
    marginTop: 5
  }

});

export default Header