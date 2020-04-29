import React from 'react';

import {  StyleSheet, 
          Text, 
          View, 
          TextInput, 
          TouchableOpacity, 
          Image, 
          ScrollView ,
          AsyncStorage} from 'react-native';
          
import Icon from 'react-native-vector-icons/Ionicons';

import BackHeader from '../components/BackHeader';

const Regform = props=> {

  const [name, setName] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeat] = React.useState('');

  const { signUp } = props.extraData;
  /*<Image 
  source={{uri: 'https://reactjs.org/logo-og.png'}}
  style={styles.img}
/>*/

  return (

    <View style={styles.regForm}>

      <BackHeader navigation={props.navigation} />

      <ScrollView style={styles.ScrollForm}>

        <Icon style={styles.img} name="ios-contact" size={200} color='#000'/>

        <Text style={styles.header} >

          Registro de usuario

        </Text>

        <View style={styles.inputSection}>

          <Icon style={styles.icon} name="ios-person" size={20} color='#000'/>

          <TextInput 
            style={styles.textinput} 
            placeholder="Nombre"
            underlineColorAndroid={'transparent'}
            value={name}
            onChangeText={setName}
          />

        </View>

        <View style={styles.inputSection}>
          
          <Icon style={styles.icon} name="ios-person" size={20} color='#000'/>

          <TextInput 
            style={styles.textinput} 
            placeholder="Apellido"
            underlineColorAndroid={'transparent'}
            value={apellido}
            onChangeText={setApellido}
          />

        </View>

        <View style={styles.inputSection}>
          
          <Icon style={styles.icon} name="ios-person" size={20} color='#000'/>
          
          <TextInput 
            style={styles.textinput} 
            placeholder="Username"
            underlineColorAndroid={'transparent'}
            value={username}
            onChangeText={setUsername}
          />

        </View>

        <View style={styles.inputSection}>
          
          <Icon style={styles.icon} name="ios-mail" size={20} color='#000'/>
          
          <TextInput 
            style={styles.textinput} 
            placeholder="Correo"
            underlineColorAndroid={'transparent'} 
            value={email}
            onChangeText={setEmail}
          />

        </View>

        <View style={styles.inputSection}>
          
          <Icon style={styles.icon} name="ios-lock" size={20} color='#000'/>
          
          <TextInput 
            style={styles.textinput} 
            placeholder="Contraseña"
            secureTextEntry={true} 
            underlineColorAndroid={'transparent'}
            value={password}
            onChangeText={setPassword}
          />

        </View>

        <View style={styles.inputSection}>
          
          <Icon style={styles.icon} name="ios-lock" size={20} color='#000'/>
          
          <TextInput 
            style={styles.textinput} 
            placeholder="Repetir Contraseña"
            secureTextEntry={true} 
            underlineColorAndroid={'transparent'}
            value={repeatPassword}
            onChangeText={setRepeat}
          />
          
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => 
            signUp(
              { 
                name, 
                apellido, 
                username, 
                email, 
                password, 
                repeatPassword 
              }
            )
          }
        >

          <Text style={styles.btntext}>Registrar</Text>

        </TouchableOpacity>

      </ScrollView>

    </View>

  );

}

const styles = StyleSheet.create({
  regForm: {
    flex: 1,
  },
  ScrollForm:{
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    fontSize: 24,
    color: '#000',
    paddingBottom: 10,
    marginBottom: 40,
    paddingTop: 40,
    alignSelf: 'center'
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
  textinput: {
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
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  },
  img: {
    marginTop: 50,
    alignSelf: 'center',
    borderRadius: 100
  },
  icon: {
    padding: 5,
  }
});

export default Regform;