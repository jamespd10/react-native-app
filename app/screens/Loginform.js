import * as React from 'react';

import {  AsyncStorage, 
          Button, 
          Text, 
          TextInput, 
          View, 
          StyleSheet, 
          Image, 
          TouchableOpacity, 
          ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Loginform=props=>{

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = props.extraData;

  const color = { red: '#C90013',
                  black: '#000'};
  let iconColor = '';
  let iconUsername = '';
  let iconPassword = '';

  let styleAux;

  if (props.errorMessage) {
    styleAux=styles.textinput;
    iconColor = color.black;
    iconUsername = color.black;
    iconPassword = color.black;
  }
  else{
    if(props.errorInput==1){
      styleAux=styles.textinputError;
      iconColor = color.red;
      iconUsername = color.red;
      iconPassword = color.black;
    }
    else if(props.errorInput==2){
      styleAux=styles.textinputError;
      iconColor = color.red;
      iconUsername = color.black;
      iconPassword = color.red;
    }
    else{
      styleAux=styles.textinputError;
      iconColor = color.red;
      iconUsername = color.red;
      iconPassword = color.red;
    }
  }
  
    return (
      <View style={styles.loginForm}>

        <ScrollView style={styles.ScrollForm}>

          <Icon style={styles.img} name="ios-lock" size={200} color={iconPassword}/>

          <Text style={styles.header}>Inicio de sesión</Text>

          <View style={styles.inputSection}>

            <Icon style={styles.icon} name="ios-person" size={20} color={iconUsername}/>

            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={styleAux}
            />

          </View>
          
          <View style={styles.inputSection}>

            <Icon style={styles.icon} name="ios-lock" size={20} color={iconPassword}/>

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styleAux}
              secureTextEntry
            />

          </View>
          
          <TouchableOpacity 
            title="Sign in" 
            style={styles.button} 
            onPress={() => 
            signIn({ username, password })}
          >

            <Text style={styles.btntext}>Ingresar</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('Regform')}>
            
            <Text 
              style={styles.txtReg}
            >
              ¿No tienes cuenta?
            </Text>

          </TouchableOpacity>

        </ScrollView>
      
      </View>
    )
}

const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
  },
  ScrollForm:{
    paddingLeft: 30,
    paddingRight: 30,
  },
  icon: {
    padding: 5,
  },
  inputSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 20,
    padding: 5
  },
  header: {
    fontSize: 24,
    color: '#000',
    paddingBottom: 10,
    marginBottom: 20,
    paddingTop: 40,
    alignSelf: 'center'
  },
  textinput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#000',
  },
  textinputError: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#000',
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'gray',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  },
  img: {
    //marginTop: 36,
    marginTop: 50,
    alignSelf: 'center',
    borderRadius: 100
  },
  txtReg: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center'
  }
});

export default Loginform;