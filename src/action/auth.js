import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

// signUp handling
const signUp = (name, email, password, password2) => {

  // 만약 빈 칸이 있으면 Error message 출력
  if(!name || !email || !password || !password2){
    Alert.alert('Error', 'please enter all fields')
    // navigation.navigate('signUpComplete')
  }
  // 만약 비밀번호 확인 과정에서 오류가 발생하면 Error message 출력
  if(password != password2){
    Alert.alert('Error', '비밀번호가 같지 않습니다')
  }
  // 그리고 회원가입이 안 되게 해야함

  // 새로운 user 생성
  return auth().createUserWithEmailAndPassword(email, password)
  .then( cred => {
    const {uid} = cred.user;

    // user는 name으로 표시된다
    auth().currentUser.updateProfile({
      displayName: name
    })
    navigation.navigate('signUpComplete')
    return uid
  })
  .catch(
    err => Alert.alert(err.code, err.message)
  )
}

// signIn handling
const signIn = (email, password) => {
  // 만약 빈칸이 있으면 Error message 출력
  if(!email || !password){
    Alert.alert('Error', 'Please enter all fields')
  }


  return auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    navigation.navigate('main')
  })
  .catch(
    err => Alert.alert(err.code, err.message)
  )
}

// 로그아웃
const signOut = () => {
  console.log('User Signed Out!')
  return auth().signOut()
}

const Auth = {
  signUp,
  signIn,
  signOut
}

export default Auth