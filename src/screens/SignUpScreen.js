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
  marginLeft: 36px;
`;

const BoldContent = styled.Text`
  color: white;
	fontSize: 20px;
  font-family: Kameron-Bold;
`;

const SignUpButton = styled.TouchableOpacity`
  width: 175px;
  height: 60px;
	align-self: center;
  justifyContent: center;
  marginTop: 118px;
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

  return (
    

    <Background
      source={require("../../assets/img/login_background.png")} >

        <Container>
          <TitleContainer>
            <Title>gather</Title>
            <Title>tomorrow</Title>
          </TitleContainer>

          <ContentContainer>
            <BoldContent>User ID</BoldContent>
            <BoldContent>PASSWORD</BoldContent>
            <BoldContent>CONFIRM PASSWORD</BoldContent>
            <BoldContent>Name</BoldContent>
          </ContentContainer>

          <SignUpButton
            onPress={() => navigation.navigate('signUpComplete')}>
            <SignUpText>Sign Up</SignUpText>
          </SignUpButton>
        </Container>

    </Background>
  );

}

export default SignUpScreen;