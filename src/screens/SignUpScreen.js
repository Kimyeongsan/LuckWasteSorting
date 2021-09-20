import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Alert, ImageBackground, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

const TitleContainer = styled.View`
  width: 100%;
  height: 150px;
  marginTop: 65px;
`;

const Title = styled.Text`
	align-self: center;
  color: white;
	fontSize: 50px;
  font-family: Kameron-Bold;
`;

const ContentContainer = styled.View`
  width: 100%;
  height: 100px;
  alignItems: center;
`;

const TextContainer = styled.View`
  width: 300px;
  height: 70px;
  marginBottom: 20px;
  borderColor: white;
  border-bottom-width: 2px;
`;

const TextInputs = styled.TextInput`
  color: white;
  fontFamily: JosefinSans-Medium;
`;

const BoldContent = styled.Text`
  color: white;
	fontSize: 20px;
  alignSelf: flex-start;
  font-family: Kameron-Bold;
`;

const SignUpButton = styled.TouchableOpacity`
  width: 175px;
  height: 60px;
	align-self: center;
  justifyContent: center;
  marginTop: 270px;
  borderWidth: 2px;
  borderColor: white;
  border-radius: 30px;
`;

const SignUpText = styled.Text`
	align-self: center;
  color: white;
	fontSize: 22px;
  font-family: Kadwa-Bold;
  borderColor: white;
`;

// 회원가입을 위한 화면

// 구현사항 :
// User ID, PassWord 등등 -> 추후 추가될 수 있음
// 입력 완료 버튼 클릭시 Complete화면으로 전환 (완료)

const SignUpScreen = ({ navigation }) => {

  const [name, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')
  const [password, setPassword] = useState('')

  const onRegisterPress = () => {

    // 입력 예외처리
    if (name == '') {
      Alert.alert("Input(Name) doen't Enough")
      return
    }
    else if (email == '') {
      Alert.alert("Input(email) doen't Enough")
      return
    }
    else if (birthday == '') {
      Alert.alert("Input(birthday) doen't Enough")
      return
    }
    else if (password == '') {
      Alert.alert("Input(password) doen't Enough")
      return
    }

    // firebase 등록
    auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          name,
          birthday
        };

        const usersRef = firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('signUpComplete')
          })
          .catch((error) => {
            alert(error)
          });
      })
      .catch((error) => {
        alert(error)
      });
  }

  return (

    <Container>
      <ImageBackground
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: 'black'
        }}
        imageStyle={{ opacity: 0.5 }} // 어둡게
        resizeMode={'cover'}
        source={require("../../assets/img/login_background.png")}>

        <TitleContainer>
          <Title>gather</Title>
          <Title>tomorrow</Title>
        </TitleContainer>

        <ContentContainer>

          <TextContainer>
            <BoldContent>User Email</BoldContent>
            <TextInputs
              placeholder={'Enter Eamil'}
              placeholderTextColor='white'
              value={email}
              autoFocus={true}
              onChangeText={e => setEmail(e)}
            />
          </TextContainer>

          <TextContainer>
            <BoldContent>Name</BoldContent>
            <TextInputs
              placeholder={'Enter name'}
              placeholderTextColor='white'
              autoFocus={true}
              value={name}
              onChangeText={e => setUserName(e)}
            />
          </TextContainer>

          <TextContainer>
            <BoldContent>Birthday</BoldContent>
            <TextInputs
              placeholder={'Enter Birthday'}
              placeholderTextColor='white'
              autoFocus={true}
              value={birthday}
              onChangeText={e => setBirthday(e)}
            />
          </TextContainer>

          <TextContainer>
            <BoldContent>PASSWORD</BoldContent>
            <TextInputs
              placeholder={'Enter password'}
              placeholderTextColor='white'
              secureTextEntry={true}
              autoFocus={true}
              value={password}
              onChangeText={e => setPassword(e)}
            />
          </TextContainer>

        </ContentContainer>

        <SignUpButton
          onPress={() => {
            onRegisterPress()
          }}>
          <SignUpText>Sign Up</SignUpText>
        </SignUpButton>

      </ImageBackground>
    </Container>
  );

}

export default SignUpScreen;