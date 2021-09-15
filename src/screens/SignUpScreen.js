import React, {useState} from 'react';
import styled from 'styled-components/native';

import { ImageBackground } from 'react-native';
import { TextInput } from 'react-native';

import {Auth} from '../action/auth'

const Container = styled.View`
  width: 100%;
  height: 100%;
  backgroundColor: rgba(0,0,0,0.4);
`;

const Background = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  resizeMode: cover;
  position: absolute;
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
  height: 130px;
  alignItems: center;
`;

const TextContainer = styled.View`
  width: 300px;
  height: 70px;
  marginBottom: 20px;
  borderColor: white;
  border-bottom-width: 2px;
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

const SignUpScreen = ({navigation}) => {

    const [ name, setUserName ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ]= useState()

  return (
  
    <Background
      source={require("../../assets/img/login_background.png")} >

        <Container>
          <TitleContainer>
            <Title>gather</Title>
            <Title>tomorrow</Title>
          </TitleContainer>

          <ContentContainer>
            
            <TextContainer>
            <BoldContent>User ID</BoldContent>
              <TextInput
                style={{fontFamily: "JosefinSans-Medium"}}
                color= 'white'
                placeholder={'Enter ID'}
                value={email}
                onChangeText={e => setEmail(e)}
              />
            </TextContainer>
            
            
            <TextContainer>
            <BoldContent>PASSWORD</BoldContent>
              <TextInput
                style={styled.textFormTop}
                placeholder={'Enter password'}
                value={password}
                // onChangeText={e => setPassword(e)}
              />
            </TextContainer>

            
            <TextContainer>
            <BoldContent>CONFIRM PASSWORD</BoldContent>
              <TextInput
                style={styled.textFormTop}
                placeholder={'Re-enter password'}
              />
            </TextContainer>

            
            <TextContainer>
              <BoldContent>Name</BoldContent>
              <TextInput
                style={styled.textFormTop}
                placeholder={'Enter name'}
                value={name}
                // onChangeText={e => setUserName(e)}
              />
            </TextContainer>
          </ContentContainer>

          <SignUpButton
            onPress={() => {
              Auth.signUp(name, email, password)
              navigation.navigate('signUpComplete')
            }}>
            <SignUpText>Sign Up</SignUpText>
          </SignUpButton>
        </Container>

    </Background>
  );

}

export default SignUpScreen;