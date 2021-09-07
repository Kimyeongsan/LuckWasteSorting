import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginBeforeScreen from './screens/LoginBeforeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpComplete from './screens/SignUpComplete';
import SignUpScreen from './screens/SignUpScreen';
import MainScreen from './screens/MainScreen';
import CameraScreen from './screens/CameraScreen';
import SearchScreen from './screens/SearchScreen';
import SearchComplete from './screens/SearchComplete';
import SearchDetail from './screens/SearchDetail';

const Stack = createStackNavigator();

// 화면 이동 Function

function StackNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginBefore"
        screenOptions={{
          headerShown: false
        }}>

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

        <Stack.Screen
          name="main"
          component={MainScreen}
        />

        <Stack.Screen
          name="camera"
          component={CameraScreen}
        />

        <Stack.Screen
          name="search"
          component={SearchScreen}
        />

        <Stack.Screen
          name="searchComplete"
          component={SearchComplete}
        />

        <Stack.Screen
          name="searchDetail"
          component={SearchDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

