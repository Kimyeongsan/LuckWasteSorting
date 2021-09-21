import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginBeforeScreen from './screens/LoginBeforeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpComplete from './screens/SignUpComplete';
import SignUpScreen from './screens/SignUpScreen';
import MainScreen from './screens/MainScreen';
import CameraScreen from './screens/CameraScreen';
import SearchScreen from './screens/SearchScreen';
import SearchDetail from './screens/SearchDetail';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const Stack = createStackNavigator();

// 화면 이동 Function
function StackNavigator() {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firestore().collection('users');

    auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()

            setInitializing(false)
            setUser(userData)
          })
          .catch((error) => {
            setInitializing(false)
          });

        // login log print
        console.log('login user : ' + user.email);
      } else {
        setInitializing(false)

        // init login print
        console.log('최초 login');
      }
    });
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginBefore"
        screenOptions={{
          headerShown: false
        }}>

        {user ? (
          <>
            <Stack.Screen
              name="main">
              {props => <MainScreen {...props} extraData={user} />}
            </Stack.Screen>

            <Stack.Screen
              name="camera"
              component={CameraScreen}
            />

            <Stack.Screen
              name="search"
              component={SearchScreen}
            />

            <Stack.Screen
              name="searchDetail">
              {props => <SearchDetail {...props} extraData={user} />}
            </Stack.Screen>

            <Stack.Screen
              name="login"
              component={LoginScreen}
            />

            <Stack.Screen
              name="signUp"
              component={SignUpScreen}
            />

            <Stack.Screen
              name="signUpComplete"
              component={SignUpComplete}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="loginBefore"
              component={LoginBeforeScreen}
            />

            <Stack.Screen
              name="login"
              component={LoginScreen}
            />

            <Stack.Screen
              name="signUp"
              component={SignUpScreen}
            />

            <Stack.Screen
              name="signUpComplete"
              component={SignUpComplete}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;