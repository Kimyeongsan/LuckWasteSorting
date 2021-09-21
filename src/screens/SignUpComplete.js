import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  marginTop: 90px;
`;

const IconContainer1 = styled.View`
  marginLeft: 40px;
  flexDirection: row;
`;

const IconContainer2 = styled.View`
  marginTop: 15px;
  marginRight : 40px;
  alignSelf: flex-end;
`;

const NomalContent = styled.Text`
	align-self: center;
  color: white;
	fontSize: 18px;
  font-family: Kadwa-Regular;
`;

const StartButton = styled.TouchableOpacity`
  width: 253px;
  height: 58px;
	align-self: center;
  justifyContent: center;
  marginTop: 120px;
  borderWidth: 2px;
  borderColor: white;
`;

const StartText = styled.Text`
	align-self: center;
  color: white;
	fontSize: 22px;
  font-family: Kadwa-Bold;
  borderColor: white;
`;

// 회원가입 성공 화면

const SignUpComplete = ({ navigation }) => {

  return (
    <Background
      source={require("../../assets/img/login_background.png")} >

      <Container>

        <TitleContainer>
          <Title>gather</Title>
          <Title>tomorrow</Title>
        </TitleContainer>

        <ContentContainer>
          <IconContainer1><Icon name="quote-left" color="rgba(255, 255, 255, 0.5)" size={40} /></IconContainer1>
          <NomalContent>환영합니다!</NomalContent>
          <NomalContent>깨끗한 지구를 위한 환경실천</NomalContent>
          <NomalContent>"내일을 모으다"</NomalContent>
          <NomalContent>회원님의 기분좋은 환경실천을 응원합니다.</NomalContent>
          <IconContainer2><Icon name="quote-right" color="rgba(255, 255, 255, 0.5)" size={40} /></IconContainer2>

        </ContentContainer>

        <StartButton
          onPress={() => navigation.navigate('login')}>
          <StartText>Let'gather tomorrow</StartText>
        </StartButton>

      </Container>
    </Background>
  );

}

export default SignUpComplete;