import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ImageBackground, View, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth';

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
  width: 130px;
  height: 130px;
  align-self: center;
  marginTop: 55px;
`;

const User = styled.Text`
  marginBottom: 13px;
	align-self: center;
  color: white;
	fontSize: 13px;
  font-family: JosefinSans-Medium;
`;

const Script = styled.Text`
  marginBottom: 13px;
  align-self: center;
  text-align: center;
  color: white;
  fontSize: 13px;
  font-family: JosefinSans-Medium;
  width: 200px;
  height: 60px;
`;

const Script_2 = styled.Text`
  align-self: center;
  color: white;
  fontSize: 13px;
  font-family: JosefinSans-Medium;
  text-align: center;
  width: 241px;
  height: 50px;
  marginTop: 11px;
`;

const Luckbox = styled.View`
  width: 88%;
  height: 175px;
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
  font-family: JosefinSans-Bold;
`;

const Mtitle = styled.Text`
  font-family: JosefinSans-Bold;
  font-size: 18px;
  marginLeft: 14px;
  line-height: 20px;
`;

const Content = styled.Text`
  font-family: JosefinSans-Light;
  height: 100px;
  font-size: 11px;
  line-height: 12px;
  marginLeft: 14px;
  marginRight: 10px;
  marginTop: 15px;
`;

// 로그아웃 버튼 추가
const LogOutButton = styled.TouchableOpacity`
  height: 30px; 
  width: 30px;
  margin : 20px
  position: absolute;
  alignItems: flex-start;
`;

// 하단 이미지 3개 Style
const ImgButton = styled.TouchableOpacity`
  height: 70px; 
  width: 70px;
  margin: 12px;
`;

// 하단 이미지 크기
const BottomImg = styled(Image)`
  height: 70px; 
  width: 70px;
`;

const ImgContent = styled.Text`
  font-family: Kadwa-Regular;
  font-size: 12px;
  alignSelf: center;
  color: white;
`;

const Buttombox = styled.View`
  flexDirection: row;
  justifyContent: center;
  height: 50px;
  width: 100%; 
`;


// 전반적인 운세 출력을 위한 화면
const MainScreen = ({ navigation }) => {

  // 연애운, 직장운, 금전운 count
  const [loveCnt, setLoveCnt] = useState(2);
  const [jobCnt, setJobCnt] = useState(3);
  const [moneyCnt, setMoneyCnt] = useState(4);

  const imgData = [
    {
      img: require("../../assets/img/main/Blur_love.png"),
      complete_img: require("../../assets/img/main/love.png")
    },
    {
      img: require("../../assets/img/main/Blur_work.png"),
      complete_img: require("../../assets/img/main/work.png")
    },
    {
      img: require("../../assets/img/main/Blur_money.png"),
      complete_img: require("../../assets/img/main/money.png")
    },
  ]


  //사용자의 검색 횟수를 채우지 못하면 얼럿버튼
  //횟수가 충족되면 버튼 액션에 맞게 검색 결과가 달라져야함
  ///// 이거 3개를 합칠 방법

  // love 버튼
  const love_clickBtn = (count) => {

    if (count > 0) {
      setLoveCnt(count - 1);

      Alert.alert('검색 횟수를 채워주세요');
      navigation.navigate('search');

    }
    else if (count != 0 && count > 0) {
      setLoveCnt(count - 1);

      Alert.alert('검색 횟수를 다 못채웠습니다.');
      navigation.navigate('search');
    }

    else if (count == 0 || count == "완료") {
      Alert.alert('다 채웠습니다!');

      setLoveCnt("완료");
    }
  }

  // job 버튼
  const job_clickBtn = (count) => {

    if (count > 0) {
      setJobCnt(count - 1);

      Alert.alert('검색 횟수를 채워주세요');
      navigation.navigate('search');

    }
    else if (count != 0 && count > 0) {
      setJobCnt(count - 1);

      Alert.alert('검색 횟수를 다 못채웠습니다.');
      navigation.navigate('search');
    }

    else if (count == 0 || count == "완료") {
      Alert.alert('다 채웠습니다!');

      setJobCnt("완료");
    }
  }

    // money 버튼
    const money_clickBtn = (count) => {

      if (count > 0) {
        setMoneyCnt(count - 1);
  
        Alert.alert('검색 횟수를 채워주세요');
        navigation.navigate('search');
  
      }
      else if (count != 0 && count > 0) {
        setMoneyCnt(count - 1);
  
        Alert.alert('검색 횟수를 다 못채웠습니다.');
        navigation.navigate('search');
      }
  
      else if (count == 0 || count == "완료") {
        Alert.alert('다 채웠습니다!');
  
        setMoneyCnt("완료");
      }
    }


  ///// 조건에 따라 이미지 변경 함수
  const changeImg = (index, id) => {

    if (index > 0) {
      return (
        imgData[id].img
      )
    }
    else if (index != 0 && index > 0) {
      return (
        imgData[id].img
      )
    }
    else if (index == 0 || index == "완료") {
      return (
        imgData[id].complete_img
      );
    }
  }

  const logOut = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));

    navigation.navigate('login')
  }

  return (
    <Background
      source={require("../../assets/img/main_background.png")} >
      <Container>

        {/* 로그아웃 버튼 추가 */}
        <LogOutButton>
          <Icon
            name="log-out"
            size={32}
            color="white"
            onPress={() => logOut()}
          />
        </LogOutButton>

        {/* 사용자 가입내역 수정 팝업 추가 예정 */}
        <Ellipse source={require("../../assets/img/main/magic_ellipse.png")} />
        <User>김재정 1997.10.23</User>
        <Script>오늘도 환경실천을 한 당신,{"\n"}상쾌한 숲속의 구슬로{"\n"}오늘의 운세를 점쳐보세요</Script>

        {/* 조건 달성시 내용 바뀌게 추가할 예정 */}
        <Luckbox>
          <Title>오늘의 운세</Title>
          <Mtitle>전반적으로 숲속의 기운이 가득한날</Mtitle>
          <Content>이것은 운세 착한사람만 보이는 데이터라고 봐두 무방합니다
            {"\n"}자 이게보이시나요 여러분은 그럼 착한사람이에요
            {"\n"}축하해요 언제나 그렇게 착한일만 하시고
            {"\n"}하는일 모두 잘 되시길 바랍니다.
            {"\n"}호호 노래를 들으면서 하고있는데 즐겁네요 여러분도 디자인 하십쇼</Content>
        </Luckbox>

        <Script_2>열람을 위해선{"\n"} 선행 분리수거를 진행해 주세요</Script_2>

        <Buttombox>
          <ImgButton
            onPress={() => { love_clickBtn(loveCnt) }}>
            <BottomImg source={changeImg(loveCnt, 0)} />
            <ImgContent>연애운</ImgContent>
            <ImgContent>{loveCnt}</ImgContent>
          </ImgButton>

          <ImgButton
            onPress={() => { job_clickBtn(jobCnt) }} >
            <BottomImg source={changeImg(jobCnt, 1)} />
            <ImgContent>직장운</ImgContent>
            <ImgContent>{jobCnt}</ImgContent>
          </ImgButton>

          <ImgButton
            onPress={() => { money_clickBtn(moneyCnt) }} >
            <BottomImg source={changeImg(moneyCnt, 2)} />
            <ImgContent>금전운</ImgContent>
            <ImgContent>{moneyCnt}</ImgContent>
          </ImgButton>
        </Buttombox>

      </Container>
    </Background>

  );

}

export default MainScreen;