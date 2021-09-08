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
  marginTop: 132px;
  marginLeft: 23px;
`;

const Title = styled.Text`
	align-self: flex-start;
  color: white;
	fontSize: 50px;
  font-family: Kameron-Bold;
`;

const ContentContainer = styled.View`
  width: 100%;
  height: 150px;
  marginTop: 35px;
  marginLeft: 23px;
`;

const Content = styled.Text`
  marginBottom: 13px;
	align-self: flex-start;
  color: white;
	fontSize: 18px;
  font-family: Kameron-Bold;
`;

const NomalContent = styled.Text`
	align-self: flex-start;
  color: white;
	fontSize: 18px;
`;

const StartButton = styled.TouchableOpacity`
  width: 253px;
  height: 60px;
	align-self: center;
  justifyContent: center;
  marginTop: 115px;
  borderWidth: 2px;
  borderColor: white;
`;

const StartText = styled.Text`
	align-self: center;
  color: white;
	fontSize: 30px;
  font-family: Kadwa-Bold;
  borderColor: white;
`;

// Login 되기 전 화면 
// 혹은 Login 이 안됬을 경우 출력 될 화면

// 추후 : 로그인이 될 경우 해당 화면은 Skip 되게 기능추가 할 예정

const LoginBeforeScreen = ({ navigation }) => {
  return (
    <Background
      source={require("../../assets/img/login_background.png")} >

      <Container>

        <TitleContainer>
          <Title>gather</Title>
          <Title>tomorrow</Title>
        </TitleContainer>

        <ContentContainer>

          <Content>기분좋은 환경실천, 내일을 모으다</Content>
          <NomalContent>재활용 분리를 통해</NomalContent>
          <NomalContent>깨끗한 하루하루를 모아보세요</NomalContent>

        </ContentContainer>

        <StartButton
          onPress={() => navigation.navigate('login')}>
          <StartText>Start Login</StartText>
        </StartButton>

      </Container>
    </Background>
  );
}

export default LoginBeforeScreen;