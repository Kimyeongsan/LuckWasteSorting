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

// 전반적인 운세 출력을 위한 화면

// 구현사항 :
// 사용자가 회원가입 때 입력한 생년월일 출력 Component 제작 필요
// 오늘의 운세, 애정운세, 직장운세, 금전운세에 대한 데이터 를 출력한 Component 제작 필요
// 재활용을 한 횟수를 출력 하기 위한 Component 제작 필요

const MainScreen = () => {

  return (
    <Container>
      <Title>Main Screen</Title>
    </Container>
  );

}

export default MainScreen;