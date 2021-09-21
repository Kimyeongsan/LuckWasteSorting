import React, { useState } from 'react';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome';

import { ToastAndroid, Alert, ImageBackground, Dimensions } from 'react-native';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

const TitleContainer = styled.View`
  width: 100%;
  height: 150px;
  marginTop: 80px;
`;

const Title = styled.Text`
	align-self: center;
  color: white;
	fontSize: 50px;
  font-family: Kameron-Bold;
`;

const LoginContainer = styled.View`
  width: 100%;
  height: 150px;
  marginTop: 60px;
  alignItems: center;
`;

const TextContainer = styled.View`
  width: 80%;
  height: 48px;
  flexDirection: row;
  justify-Content: center;
  align-self: center;
  backgroundColor: rgba(255, 255, 255, 0.7);
  marginBottom: 35px;
  paddingLeft: 12px;
  paddingTop: 6px;
  border-radius: 10px;
`;

const Icons = styled(Icon)`
  padding: 5px;
  marginRight: 10px;
`;

const TextInputs = styled.TextInput`
  flex: 1;
  align-self: center;
  fontFamily: JosefinSans-Medium;
  paddingTop: 0px;
  paddingRight: 10px;
  paddingBottom: 0px;
  paddingLeft: 0px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 175px;
  height: 60px;
	align-self: center;
  justifyContent: center;
  marginTop: 80px;
  borderWidth: 2px;
  borderColor: white;
  border-radius: 30px;
`;

const LoginText = styled.Text`
	align-self: center;
  color: white;
	fontSize: 22px;
  font-family: Kadwa-Bold;
  borderColor: white;
`;

const UserSignUpButton = styled.TouchableOpacity`
  width: 120px;
  height: 36px;
	align-self: center;
  justifyContent: center;
  marginTop: 20px;
`;

const UserSignUpText = styled.Text`
	align-self: center;
  color: white;
	fontSize: 16px;
  borderColor: white;
  font-family: serif;
`;

// Login을 위한 화면

// 구현 사항 : 
// User Id , User Password 입력 받을 창 제작 예정
// Login Button 클릭 시 Main 화면으로 전환

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () => {
    if (email == '' || password == '') {
      Alert.alert('email 혹은 password가 비어있습니다.')
    } else (

      auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid
          const usersRef = firestore().collection('users')
          usersRef
            .doc(uid)
            .get()
            .then(firestoreDocument => {
              if (!firestoreDocument.exists) {
                alert("User does not exist anymore.")
                return;
              }
              const user = firestoreDocument.data()
              navigation.navigate('main', { user: user })
            })
            .catch(error => {
              alert(error)
            });
        })
        .catch(error => {
          alert(error)
        })
    )
  }

  return (

    <Container>
      <ImageBackground
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: 'black',
        }}
        imageStyle={{ opacity: 0.5 }} // 어둡게
        resizeMode={'cover'}
        source={require("../../assets/img/login_background.png")}>

        <TitleContainer>
          <Title>gather</Title>
          <Title>tomorrow</Title>
        </TitleContainer>

        <LoginContainer>

          <TextContainer>
            <Icons name="user" color="#727272" size={25}  />
            <TextInputs
              placeholder={'User ID'}
              placeholderTextColor={"#727272"}
              value={email}
              focusable={true}
              onChangeText={(e) => setEmail(e)}
            />
          </TextContainer>

          <TextContainer>
            <Icons name="lock" color="#727272" size={25} />
            <TextInputs
              type={password}
              value={password}
              placeholder={'PassWord'}
              placeholderTextColor={"#727272"}
              focusable={true}
              secureTextEntry={true}
              onChangeText={(e) => setPassword(e)}
            />
          </TextContainer>


        </LoginContainer>

        <LoginButton
          onPress={() => {
            onLoginPress()
          }}>
          <LoginText>Log in</LoginText>

        </LoginButton>

        <UserSignUpButton
          onPress={() => navigation.navigate('signUp')}>
          <UserSignUpText>User Sign up</UserSignUpText>
        </UserSignUpButton>

      </ImageBackground>
    </Container>
  );

}

export default LoginScreen;