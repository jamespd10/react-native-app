//Imports
import * as React from 'react';

import { AsyncStorage, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

//Imports Screens
import LoginForm from './app/screens/Loginform'

import Home from './app/screens/Home'

import Regform from './app/screens/Regform'

import loginData from './app/database/functions/loginData'

import SplashScreen from './app/screens/SplashScreen'

//Constansts
const AuthContext = React.createContext();

const Stack = createStackNavigator();

//Variables
let res;

let message=true;

let inputError = 0;

//Function Main
export default function App({ navigation }) {

  const [state, dispatch] = React.useReducer(

    (prevState, action) => {

      switch (action.type) {
        //agregué caso Loading
        case 'LOADING':

          return {
            ...prevState,
            isLoading: true,
          };

        case 'RESTORE_TOKEN':

          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };

        case 'SIGN_IN':

          return {
            ...prevState,
            isSignout: false,
            //agregué isloading aquí
            isLoading: false,
            userToken: action.token,
          };

        case 'SIGN_OUT':

          return {
            ...prevState,
            isSignout: true,
            //agregué isloading aquí
            isLoading: false,
            userToken: null,
          };

      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }

  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {

      let userToken;

      try {

        userToken = await AsyncStorage.getItem('userToken');

      } 

      catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch(
        { 
          type: 'RESTORE_TOKEN', 
          token: userToken 
        }
      );

    };

    bootstrapAsync();

  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        //'https://reactnative.dev/movies.json'
        //To Validate Login
        if(data.username==''||data.password==''){
          //envio alerta para los datos que estan en blanco
          Alert.alert(
            "Datos en blanco",
            "debe rellenar todos los campos");
          if(data.username=='' && data.password!=''){
            inputError=1
          }
          else if(data.username!='' && data.password==''){
            inputError=2
          }
          else{
            inputError=0
          }
          //lo reenvio al login
          dispatch({ type: 'SIGN_OUT' });
          //mensaje es igual a false para mostrar el formulario en rojo
          message=false;
        }
        else{

          message=true;

          dispatch({type: 'LOADING'});

          res = await loginData(data);

          //if res is false
          if(!res){

            Alert.alert(
              "Datos inválidos",
              "el usuario y la contraseña no coinciden");
            dispatch({ type: 'SIGN_OUT' });

          }
          //else view screen home
          else{

            save = async () => {
              try {
                let guardarDatos = [['name', res.name],
                                    ['apellido', res.apellido],
                                    ['id', res.id]]
                await AsyncStorage.multiSet(guardarDatos)
              } catch (e) {
                console.error('Failed to save name.')
              }
            }
            save();
            
                const value = await AsyncStorage.getItem('id')
                  // We have data!!
                  console.log(value);
            
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });

          }
        }

      },

      signOut: () => {
        AsyncStorage.clear();
        dispatch({ type: 'SIGN_OUT' })
      },

      signUp: async data => {
        
        console.log(data)
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },

    }),
    []
  );
  //return Main
  //console.log(state.userToken)
  return (

    <AuthContext.Provider value={authContext}>

      <NavigationContainer>

        <Stack.Navigator headerMode="none">

          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen 
              name="Splash" 
              component={SplashScreen} 
            />

          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <>
              <Stack.Screen
                name="SignIn"
                options={
                  {
                    title: 'React App',
                    // When logging out, a pop animation feels intuitive
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }
                }
              >

                {props => <LoginForm {...props} extraData={authContext} 
                                                errorMessage={message}
                                                errorInput={inputError} />}

              </Stack.Screen>

              <Stack.Screen 
                name="Regform"
                options={
                  {
                    title: 'React App',
                    // When logging out, a pop animation feels intuitive
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }
                }
              >
                {props => <Regform {...props} extraData={authContext} />}
              </Stack.Screen>
            </>
          ) : (
            // User is signed in
            <Stack.Screen 
              name="Home"
              options={
                {
                  title: 'React App'
                }
              }
            >
              {props => <Home {...props} extraData={authContext} />}

            </Stack.Screen>
          )}

        </Stack.Navigator>

      </NavigationContainer>

    </AuthContext.Provider>
    
  );
}