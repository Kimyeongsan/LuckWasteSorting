import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import MainScreen from './screens/MainScreen';

function App() {

  // Splash Add : 1초 후 Test 화면 이동
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  });

  return (    
    <MainScreen />    
  )
}

export default App;
