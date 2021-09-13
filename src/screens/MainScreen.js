import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground, Text, View } from 'react-native';
import { Image } from 'react-native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  backgroundColor: rgba(0,0,0,0.5);
`;

const Background = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  resizeMode: cover;
  position: absolute;
`;

const Ellipse = styled(Image)`
  align-self: center;
  marginTop: 31px;
`;

// Love, Job, Money : 한줄로 바꿈 = 영산
const BottomImg = styled(Image)`
  height: 85px; 
  width: 85px;
  margin: 10px;
`;

const User = styled.Text`
  marginBottom: 13px;
	align-self: center;
  color: white;
	fontSize: 13px;
  font-family: Josefin-Sans;
`;

const Script = styled.Text`
  marginBottom: 13px;
  align-self: center;
  text-align: center;
  color: white;
  fontSize: 13px;
  font-family: Josefin-Sans;
  width: 150px;
  height: 60px;
`;

const Script_2 = styled.Text`
  align-self: center;
  color: white;
  fontSize: 13px;
  font-family: Josefin-Sans;
  text-align: center;
  width: 241px;
  height: 50px;
  marginTop: 11px;
`;

const Luckbox = styled.View`
  width: 336px;
  height: 184px;
  align-self: center;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Title = styled.Text`
  marginBottom: 13px;
	align-self: flex-start;
  marginLeft: 14px;
  marginTop: 15px;
  color: black;
	fontSize: 12px;
  font-family: Josefin-Sans;
`;

const Mtitle = styled.Text`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  marginLeft: 14px;
  line-height: 20px;
`;

const Content = styled.Text`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  marginLeft: 14px;
  marginTop: 15px;
`;

// Test Button : 영산 => 로그아웃, 검색
const TestButton = styled.TouchableOpacity`
  width: 80px;
  height: 35px;
  margin: 5px;
	align-self: flex-end;
  justifyContent: center;
  backgroundColor: rgba(0,0,0,0.3);
`;


// 전반적인 운세 출력을 위한 화면

// 구현사항 :
// 사용자가 회원가입 때 입력한 생년월일 출력 Component 제작 필요
// 오늘의 운세, 애정운세, 직장운세, 금전운세에 대한 데이터 를 출력한 Component 제작 필요
// 재활용을 한 횟수를 출력 하기 위한 Component 제작 필요

const MainScreen = ({ navigation }) => {

  return (

    <Background
      source={require("../../assets/img/main_background.png")} >
      <Container>

        <Ellipse source={require("../../assets/img/magic_ellipse.png")} />
        <User>김재정 1997.10.23</User>
        <Script>오늘도 환경실천을 한 당신,{"\n"}상쾌한 숲속의 구슬로{"\n"}오늘의 운세를 점쳐보세요</Script>

        <Luckbox>
          <Title>오늘의 운세</Title>
          <Mtitle>전반적으로 숲속의 기운이 가득한날</Mtitle>
          <Content>이것은 운세 착한사람만 보이는 데이터라고 봐두 무방합니다{"\n"}자 이게보이시나요 여러분은 그럼 착한사람이에요
            {"\n"}축하해요 언제나 드렇게 착한일만 하시고
            {"\n"}하는일 모두 잘 되시길 바랍니다.
            {"\n"}호호 노래를 들으면서 하고있는데 즐겁네요 여러분도 디자인 하십쇼</Content>
        </Luckbox>

        <Script_2>열람을 위해선{"\n"} 선행 분리수거를 진행해 주세요</Script_2>

        {/* Love, Job, Money : 컨테이너로 가운데 정렬  */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', height: 50, width: "100%" }}>
          <BottomImg source={require("../../assets/img/Blur_love.png")} />
          <BottomImg source={require("../../assets/img/Blur_work.png")} />
          <BottomImg source={require("../../assets/img/Blur_money.png")} />
        </View>

        {/* 이거 없으면 제 화면에 못들갑니다 ㅎㅎ */}
        <TestButton
          onPress={() => navigation.navigate('search')} >
          <Text>Search Move</Text>
        </TestButton>

        <TestButton
          onPress={() => navigation.navigate('login')} >
          <Text>Logout Move</Text>
        </TestButton>
      </Container>
    </Background>

  );

}

export default MainScreen;