import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground, View, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  width: 150px;
  height: 150px;
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
  width: 150px;
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

// 구현사항 :
// 사용자가 회원가입 때 입력한 생년월일 출력 Component 제작 필요
// 오늘의 운세, 애정운세, 직장운세, 금전운세에 대한 데이터 를 출력한 Component 제작 필요
// 재활용을 한 횟수를 출력 하기 위한 Component 제작 필요


const MainScreen = ({ navigation }) => {

  let num = 0;
  //검색횟수를 담아두는 전역변수

  const clickBtn = () => {
    if(num>0){
      Alert.alert('검색 횟수를 채워주세요')
    }
    else{
      Alert.alert('검색 횟수를 다 못채웠습니다.')
    }
    
    //사용자의 검색 횟수를 채우지 못하면 얼럿버튼

    //횟수가 충족되면 버튼 액션에 맞게 검색 결과가 달라져야함
  }


  const array_love= [
    {
      id: 0,
      mytegory: "Blur_love",
      src: require("../../assets/img/main/love.png"),
      text: "블러",
    },
    {
      id: 1,
      mytegory: "Blur_love",
      src: require("../../assets/img/main/love.png"),
      text: "블러",
    },
    {
      id: 2,
      mytegory: "Blur_love",
      src: require("../../assets/img/main/love.png"),
      text: "블러",
    }
  ];

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
            onPress={() => navigation.navigate('login')}
          />
        </LogOutButton>

        <Ellipse source={require("../../assets/img/main/magic_ellipse.png")} />
        <User>김재정 1997.10.23</User>
        <Script>오늘도 환경실천을 한 당신,{"\n"}상쾌한 숲속의 구슬로{"\n"}오늘의 운세를 점쳐보세요</Script>

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

        {/* Love, Job, Money : 컨테이너로 가운데 정렬  */}
        <Buttombox>

          <ImgButton
            onPress={() => { clickBtn();}}>
            <BottomImg source={array_love[num].src} />
            {/* 횟수에 따라 이미지가 달라져야함 0은 블러 2는 안블러*/}
            <ImgContent>연애운</ImgContent>
            <ImgContent>2회</ImgContent>
          </ImgButton>

          <ImgButton
            onPress={() => navigation.navigate('search')} >
            <BottomImg source={require("../../assets/img/main/Blur_work.png")} />
            <ImgContent>직장운</ImgContent>
            <ImgContent>3회</ImgContent>
          </ImgButton>

          <ImgButton
            onPress={() => navigation.navigate('search')} >
            <BottomImg source={require("../../assets/img/main/Blur_money.png")} />
            <ImgContent>금전운</ImgContent>
            <ImgContent>4회</ImgContent>
          </ImgButton>
        </Buttombox>

      </Container>
    </Background>

  );

}

export default MainScreen;