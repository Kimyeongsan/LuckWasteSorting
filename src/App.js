import React, { useEffect, useState } from 'react';

import SplashScreen from 'react-native-splash-screen';
import StackNavigator from './StackNavigator';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

function App() {

  // Splash Add : 1초 후 Login Before 화면 이동
  // 추가 시간이 남을 시 animation 적용 예정 : default Function
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  });

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
      } else {
        setInitializing(false)
      }
    });
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <StackNavigator />
    );
  }
  return (
    <StackNavigator />
  );
}

export default App;