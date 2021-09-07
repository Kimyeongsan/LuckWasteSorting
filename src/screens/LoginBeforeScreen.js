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

// Login 되기 전 화면 
// 혹은 Login 이 안됬을 경우 출력 될 화면

// 구현 사항 :
// Login으로 넘어갈 Button 제작 필요


const LoginBeforeScreen = ({navigation}) => {
  return (
    <Container>
      <Title>LoginBefore Screen</Title>

      <Button
        title='Login Screen'
        onPress={() => navigation.navigate('login')} />

    </Container>
  );

}

export default LoginBeforeScreen;