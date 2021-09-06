import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import LoginBeforeScreen from './screens/LoginBeforeScreen';

function App() {

  // Splash Add : 1초 후 Login Before 화면 이동
  // 추가 시간이 남을 시 animation 적용 예정 : default Function
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  });

  return (    
    <LoginBeforeScreen />    
  )
}

export default App;
