//Imports
import * as React from 'react';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//imports tabScreens
import HomeScreen from './TabBar/HomeScreen';
import SettingsScreen from './TabBar/SettingsScreen';
import ProfileScreen from './TabBar/ProfileScreen';

//Constant function Home
const Home = props=>{

  const Tab = createBottomTabNavigator();

  const authContext = props.extraData;

  return (

      <Tab.Navigator

        initialRouteName="Home"

        screenOptions={({ route }) => (
          {
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              }
              else if (route.name === 'Profile') {
                iconName = focused ? 'user' : 'user';
              }
              else if (route.name === 'Settings') {
                iconName = focused ? 'gear' : 'gear';
              }

              // You can return any component that you like here!
              //return <Ionicons name={iconName} size={size} color={color} />;
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}

        tabBarOptions={{

          //activeTintColor: 'tomato',
          activeTintColor: '#000',
          //activeBackgroundColor: '#000',
          inactiveTintColor: 'gray',
          //inactiveBackgroundColor: 'gray'

        }}
      >
        <Tab.Screen name="Home">

          {props => <HomeScreen {...props} extraData={authContext} />}

        </Tab.Screen>

        <Tab.Screen name="Profile">

          {props => <ProfileScreen {...props} extraData={authContext} />}
          
        </Tab.Screen>
        
        <Tab.Screen name="Settings" component={SettingsScreen} />

      </Tab.Navigator>

  );

}

export default Home;