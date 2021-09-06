import React from 'react';
import styled from 'styled-components/native';

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

const LoginScreen = () => {

  return (
    <Container>
      <Title>Login Screen</Title>
    </Container>
  );

}

export default LoginScreen;