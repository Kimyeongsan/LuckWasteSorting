import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import MainScreen from './screens/MainScreen';

function App() {
  
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
