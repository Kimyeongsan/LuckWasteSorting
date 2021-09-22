import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import { ImageBackground, Image, Alert, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { useNavigation, useFocusEffect } from '@react-navigation/native';

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

const TodayBtn = styled.TouchableOpacity`
  align-self: center;
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

// 하단 Image Data
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


// 전반적인 운세 출력을 위한 화면
const MainScreen = (props) => {

  const navigation = useNavigation();

  // firebase User Name, Birthday 출력
  const userName = props.extraData.name
  const userBirthDay = props.extraData.birthday

  const userLoveCount = props.extraData.loveCount
  const userJobCount = props.extraData.jobCount
  const userMoneyCount = props.extraData.moneyCount

  // 연애운, 직장운, 금전운 count
  const [loveCnt, setLoveCnt] = useState(userLoveCount);
  const [jobCnt, setJobCnt] = useState(userJobCount);
  const [moneyCnt, setMoneyCnt] = useState(userMoneyCount);

  //운세의 상태를 지정하는 스테이트(전역) 
  // 0-초기화 화면 1-오늘의 운세 2-연애 3-직장 4-금전운
  const [check, btnSt] = useState(0);

  const user = auth().currentUser;
  const countValue = firestore().collection('users').doc(user.uid)

  // 뒤로 가기 막기
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  // 00시가 되면 Reset
  useEffect(() => {
    // var date = new Date().getDate() + 1;
    var time = new Date().getHours();
    // var min = new Date().getMinutes();

    if (time == 0) {
      countValue
        .update({
          loveCount: 2,
          jobCount: 3,
          moneyCount: 4
        })

        // 운세 Reset
        shuffle(numbers)
    }

    // console.log(date + '-' + time + '-' + min)
  });

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);       
  }

  const Random = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    for (var i = 0; i <= 11; i++) {
      if (userBirthDay == numbers[i]) {
        break;
      }
    }
    return i;
  }


  // love 버튼
  const love_clickBtn = (count) => {

    if (count != 0 && count > 0) {
      setLoveCnt(count - 1);

      countValue
        .update({
          loveCount: loveCnt
        })

      Alert.alert('검색 횟수를 다 못채웠습니다.');
      navigation.navigate('search');
    }

    else if (count == 0 || count == "완료") {
      countValue
        .update({
          loveCount: loveCnt
        })

      setLoveCnt("완료");
      btnSt(2);
    }
  }

  // job 버튼
  const job_clickBtn = (count) => {

    if (count != 0 && count > 0) {
      setJobCnt(count - 1);

      countValue
        .update({
          jobCount: jobCnt
        })

      Alert.alert('검색 횟수를 다 못채웠습니다.');
      navigation.navigate('search');
    }

    else if (count == 0 || count == "완료") {
      countValue
        .update({
          jobCount: jobCnt
        })

      setJobCnt("완료");
      btnSt(3);
    }
  }

  // money 버튼
  const money_clickBtn = (count) => {

    if (count != 0 && count > 0) {
      setMoneyCnt(count - 1);

      countValue
        .update({
          moneyCount: moneyCnt
        })

      Alert.alert('검색 횟수를 다 못채웠습니다.');
      navigation.navigate('search');
    }

    else if (count == 0 || count == "완료") {
      countValue
        .update({
          moneyCount: moneyCnt
        })

      setMoneyCnt("완료");
      btnSt(4);
    }
  }

  ///// 조건에 따라 이미지 변경 함수
  const changeImg = (index, id) => {
    if (index > 0) {
      return (imgData[id].img)
    }
    else if (index != 0 && index > 0) {
      return (imgData[id].img)
    }
    else if (index == 0 || index == "완료") {
      return (imgData[id].complete_img)
    }
  }

  const [luckTitle, setLuckTitle] = useState([]);
  const [luckContent, setLuckContent] = useState([]);

  const luckTitleRef = firestore().collection('LuckTitle');
  const luckConentRef = firestore().collection('LuckContent');

  const LuckFunction = (num) => {
    // Title 호출
    luckTitleRef
      .onSnapshot(querySnapshot => {
        const title = [];

        querySnapshot.forEach(documentSnapshot => {
          title.push({
            ...documentSnapshot.data(),
          });
        });

        if (num == 0) {
          setLuckTitle(title[num].title1);
        } else if (num == 1) {
          setLuckTitle(title[num].title2);
        } else if (num == 2) {
          setLuckTitle(title[num].title3);
        } else if (num == 3) {
          setLuckTitle(title[num].title4);
        }

        // console.log(luckTitle);
      });

    // Conent 호출
    luckConentRef
      .onSnapshot(querySnapshot => {
        const content = [];

        querySnapshot.forEach(documentSnapshot => {
          content.push({
            ...documentSnapshot.data(),
          });
        });

        if (num == 0) {
          setLuckContent(content[num].content1);
        } else if (num == 1) {
          setLuckContent(content[num].content2);
        } else if (num == 2) {
          setLuckContent(content[num].content3);
        } else if (num == 3) {
          setLuckContent(content[num].content4);
        }

        // console.log(luckContent);
      });
  }

  const changeFunction = (check) => {

    var title = ['오늘의 운세', '오늘의 연애운세', '오늘의 직장운세', '오늘의 금전운세']

    if (Random() <= 2) {
      var arr = [title[check], luckTitle, luckContent]
      return arr;
    }
    else if (2 < Random() && Random() < 6) {
      var arr = [title[check], luckTitle, luckContent]
      return arr;
    }
    else if (5 < Random() && Random() < 8) {
      var arr = [title[check], luckTitle, luckContent]
      return arr;
    }
    else {
      var arr = [title[check], luckTitle, luckContent]
      return arr;
    }
  }


  //함수화 다시할 예정
  const change_content = (check) => {

    //오늘의 운세
    if (check == 1) {
      LuckFunction(3)
      return changeFunction(0);
    }

    //연애
    else if (check == 2) {
      LuckFunction(1)
      return changeFunction(1);
    }

    //직장인
    else if (check == 3) {
      LuckFunction(0)
      return changeFunction(2);
    }

    //금전운
    else if (check == 4) {
      LuckFunction(2)
      return changeFunction(3);
    }

    else {
      var arr = ['', '    환경을 위해 분리수거를 실천해보세요!', '             아래 버튼을 누르면 당신의 분리수거를 돠드릴게요']
      return arr;
    }
  }

  // logout
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

        {/* 사용자 내역 출력 */}
        <TodayBtn
          onPress={() => { btnSt(1) }}>
          <Ellipse source={require("../../assets/img/main/magic_ellipse.png")} />
        </TodayBtn>


        <User>{userName}, {userBirthDay}월생</User>
        <Script>오늘도 환경실천을 한 당신,{"\n"}상쾌한 숲속의 구슬로{"\n"}오늘의 운세를 점쳐보세요</Script>

        {/* 조건 달성시 내용 바뀌게 */}
        <Luckbox>
          <Title>{change_content(check)[0]}</Title>
          <Mtitle>{change_content(check)[1]}</Mtitle>
          <Content>{change_content(check)[2]}</Content>
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