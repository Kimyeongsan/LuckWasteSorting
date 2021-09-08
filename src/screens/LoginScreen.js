import React from 'react';
import styled from 'styled-components/native';

import { ImageBackground } from 'react-native';

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
  marginTop: 47px;
`;

const Title = styled.Text`
	align-self: center;
  color: white;
	fontSize: 50px;
  font-family: Kameron-Bold;
`;

const ContentContainer = styled.View`
  width: 100%;
  height: 150px;
  marginTop: 108px;
`;

const UserSignUpButton = styled.TouchableOpacity`
  width: 120px;
  height: 36px;
	align-self: center;
  justifyContent: center;
  marginTop: 122px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 175px;
  height: 60px;
	align-self: center;
  justifyContent: center;
  marginTop: 118px;
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

const UserSignUpText = styled.Text`
	align-self: center;
  color: white;
	fontSize: 16px;
  borderColor: white;
  font-family: serif;
`;

// const Input = styled.Input`
//   width: 267px;
//   height: 48px;
// `;

// Login을 위한 화면

// 구현 사항 : 
// User Id , User Password 입력 받을 창 제작 예정
// Login Button 클릭 시 Main 화면으로 전환

const LoginScreen = ({navigation}) => {

  return (
    <Background
      source={require("../../assets/img/login_background.png")} >

      <Container>
        <TitleContainer>
          <Title>gather</Title>
          <Title>tomorrow</Title>
        </TitleContainer>

          {/* <Input {}/> */}

          <LoginButton
            onPress={() => navigation.navigate('main')}>
            <LoginText>Log in</LoginText>
          </LoginButton>

          <UserSignUpButton
            onPress={() => navigation.navigate('signUp')}>
            <UserSignUpText>User Sign up</UserSignUpText>
          </UserSignUpButton>
        </Container>

    </Background>
    
  );

}

export default LoginScreen;