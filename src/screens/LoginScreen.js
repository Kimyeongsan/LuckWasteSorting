import React from 'react';
import styled from 'styled-components/native';

import { Button } from 'react-native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #CFDEF3;
`;

const Title = styled.Text`
  flex: 1;
	align-self: center;
  marginTop: 50px;
	fontSize: 20px;
  font-weight: bold;
`;

// Login을 위한 화면

// 구현 사항 : 
// User Id , User Password 입력 받을 창 제작 예정
// Login Button 클릭 시 Main 화면으로 전환

const LoginScreen = ({navigation}) => {

  return (
    <Container>
      <Title>Login Screen</Title>

      <Button
        title='Main Screen'
        onPress={() => navigation.navigate('main')} />

      <Button
        title='SignUp Screen'
        onPress={() => navigation.navigate('signUp')} />
    </Container>
  );

}

export default LoginScreen;