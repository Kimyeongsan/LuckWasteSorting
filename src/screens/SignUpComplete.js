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

// 회원가입 성공 화면

// 구현사항 :
// 회원가입을 성공했을 경우 main으로 넘어갈 수 있는 버튼 출력 예정

const SignUpComplete = () => {

  return (
    <Container>
      <Title>SignUpComplete Screen</Title>
    </Container>
  );

}

export default SignUpComplete;