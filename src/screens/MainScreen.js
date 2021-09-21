import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ImageBackground, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth'
import { useNavigation, useRoute } from '@react-navigation/native';

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

  // 연애운, 직장운, 금전운 count
  const [loveCnt, setLoveCnt] = useState(2);
  const [jobCnt, setJobCnt] = useState(3);
  const [moneyCnt, setMoneyCnt] = useState(4);

  //사용자의 검색 횟수를 채우지 못하면 얼럿버튼
  //횟수가 충족되면 버튼 액션에 맞게 검색 결과가 달라져야함
  ///// 이거 3개를 합칠 방법
  //count가 채워지는 조건이 단순 서치화면만 왔다 갔다 한거면 OK인가에 대해서 논의 필요


  // love 버튼
  const love_clickBtn = (count) => {

    if (count != 0 && count > 0) {
      setLoveCnt(count - 1);

      Alert.alert('검색 횟수를 다 못채웠습니다.');
      navigation.navigate('search');
    }

    else if (count == 0 || count == "완료") {

      setLoveCnt("완료");
      btnSt(2);
    }
  }

  // job 버튼
  const job_clickBtn = (count) => {

    if (count != 0 && count > 0) {
      setJobCnt(count - 1);

      Alert.alert('검색 횟수를 다 못채웠습니다.');
      navigation.navigate('search');
    }

    else if (count == 0 || count == "완료") {

      setJobCnt("완료");
      btnSt(3);
    }
  }

  // money 버튼
  const money_clickBtn = (count) => {

    if (count != 0 && count > 0) {
      setMoneyCnt(count - 1);

      Alert.alert('검색 횟수를 다 못채웠습니다.');
      navigation.navigate('search');
    }

    else if (count == 0 || count == "완료") {

      setMoneyCnt("완료");
      btnSt(4);
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

  //////////////////////////////////////

  let today = new Date();

  //운세의 상태를 지정하는 스테이트(전역) 
  // 0-초기화 화면 1-오늘의 운세 2-연애 3-직장 4-금전운
  const [check, btnSt] = useState(0);

  //사용자 생일 (월)
  var month = 10;

  //배열의 요소를 무작위로 섞기 (매일 자정12시에 실행되어야 함.)
  //서버단에서 저장이 되어야하는 부분
  //핸드폰이 껏다 켜지면 (어플이 컸다 켜지면)리로드가 되기 때문에 하드코딩 필요 (회의때 말할것)
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(numbers)

  //month가 몇번째 배열에 있는지 찾아주는 함수
  const Random = () => {
    var i;
    for (i = 0; i <= 11; i++) {
      if (month == numbers[i]) {
        break;
      }
    }
    return i;
  }

  //check 값에 따라 운세가 바뀜
  const change_content = (check) => {
    if (check == 1) {
      //오늘의 운세
      if (Random() <= 2) {
        var arr = ['오늘의 운세', '전반적으로 숲속의 기운이 가득한날', '오늘 당신의 운세는 매우 좋음 입니다!\n크게 노력하지 않아도 일이 술술 풀리는 그런 날입니다.\n마음에 걸렸던 일, 고민이 됐던 지난 일\n모두 시원한 비처럼 씻겨져 나가는 날 입니다.\n환경을 위해 노력하는 당신을 위한 선물 같은 날 이네요\n오늘처럼 좋은 날! 자신감을 가지고 모든 도전해보세요']
        return arr;
      }
      else if (2 < Random() && Random() < 6) {
        var arr = ['오늘의 운세', '넓은 동산에 햇빛이 내리쬐는 상쾌한 날', '오늘 당신의 운세는 좋음 입니다!\n그동안 할까 말까 고민했던 일을 시도해 보세요\n뜻밖의 행운이 당신을 찾아올 수도 있는 그런 날 입니다.\n싱그러운 자연의 바람처럼 당신을 기분 좋게 할 일들일 생길 것 같네요!']
        return arr;
      }
      else if (5 < Random() && Random() < 8) {
        var arr = ['오늘의 운세', '싱그러운 숲속을 거닐기 좋은 날', '오늘 당신의 운세는 보통 입니다!\n가끔은 순탄한 하루를 보내는게 좋은 날도 있죠\n언제나 변하지 않는 소나무처럼 청렴한 하루를 보낼 수 있을 것 같습니다.\n한적하고 편안한 하루가 예상되는 오늘\n지구를 위해 당신을 위해 집안의 전등을 끄고 편안한 휴식을 취하는건 어떨까요?']
        return arr;
      }
      else {
        var arr = ['오늘의 운세', '오늘은 숲속에 비가올 것 같아요', '오늘 당신의 운세는 나쁨 입니다.\n소나기는 금방 그친다는 믿음이 있기 때문에\n쉬어갈 수 있는 여유가 생기는 법 입니다.\n힘들게 뛰어온 당신!\n운세에 보이는 소나기를 피해\n잠시 쉬어가는건 어떨까요?']
        return arr;
      }
    }

    else if (check == 2) {
      //연애

      if (Random() <= 2) {
        var arr = ['오늘의 연애운세', '변화가 있는 오늘', '사랑에 변화의 조짐이 보이네요.\n그리고 그러한 조짐이 좋은 방향으로 흐를지,\n나쁜 방향으로 흐를지는\n당신에게 달려 있습니다. 싱글인 분이라면 새로운 연애의 기운이 있으니 준비하시는 게 좋습니다']
        return arr;
      }
      else if (2 < Random() && Random() < 6) {
        var arr = ['오늘의 연애운세', '위태로운 오늘', '약간 권태기를 느낄 수 있습니다.\n혹시 두 사람 사이에 대화가 너무 없었던 것은 아닌지 돌아보세요.\n싱글인 분이라면 진지한 상대방을 찾아보세요.\n너무 가벼운 사람은\n오늘 당신의 스타일이 아닙니다.']
        return arr;
      }
      else if (5 < Random() && Random() < 8) {
        var arr = ['오늘의 연애운세', '주의가 필요한 오늘', '약간의 주의가 필요합니다.\n당신에게 호감을 가지고 있다며 접근하는 사람이 있지만\n쉽게 마음을 주어서는 안 됩니다.\n당신을 좋아하는 사람이 아니라\n당신이 좋아하는 사람을 선택해야 좋은 날입니다']
        return arr;
      }
      else {
        var arr = ['오늘의 연애운세', '새로운 만남이 기대되는 오늘', '온라인을 통하여 누군가와 만나게 될 수도 있습니다. 맨날 이상한 사람만 걸렸더라도 이번에는 조금 괜찮은 사람을 만나게 될 수도 있으니 기대하세요. 커플인 분이라면 삼각관계의 위험이 있습니다. 당신에게 접근해 오는 사람이 있더라도 쉽게 마음을 빼앗겨서는 안 됩니다.']
        return arr;
      }
    }


    else if (check == 3) {
      //직장인

      if (Random() <= 2) {
        var arr = ['오늘의 직장운세', '오늘은 최상의 컨디션!', '몇 가지 사항에만 신경을 쓴다면\n얻는 것이 많은 하루가 될 수도 있으니\n유념해 두고 업무에 임해보도록 하세요\n오늘의 당신은 집중력과 이해력이 높은 편이니\n평소에 어렵게 생각했던 부분에 과감히 도전해 보는 것이 좋겠습니다.\n']
        return arr;
      }
      else if (2 < Random() && Random() < 6) {
        var arr = ['오늘의 직장운세', '상사에게 예쁨받는 오늘', '평소에 당신에게 늘 깐깐하게 굴고\n당신의 행동이나 업무 처리에 대해서 트집을 잡았던 상사가\n오늘은 무슨 좋은 일이 있는지 당신에게도 싱글벙글 웃는 얼굴입니다.\n오늘의 상사는 매우 기분이 좋은 듯\n당신의 일이나 태도에도 계속 칭찬을 하고 좋은 말만 하겠군요.']
        return arr;
      }
      else if (5 < Random() && Random() < 8) {
        var arr = ['오늘의 직장운세', '기회가 생길듯한 오늘', '승진을 마음에 두고 있다면\n오늘은 조금 기대해 보아도 좋을 듯 싶습니다.\n그 동안 열심히 노력해 온 당신에게 기회가 온다면\n바로 오늘이니까요.\n오늘 하루는 누구보다도 성실하고\n자신에게 충실하게 보내 보겠다고\n마음을 다잡고 출발하세요.']
        return arr;
      }
      else {
        var arr = ['오늘의 직장운세', '신뢰도에 주의가 필요', '서류 관리를 미숙하게 하는 바람에 직장에서 혼이 납니다.\n직장에서 혼이 나지 않더라도\n주위 사람의 신뢰도가 크게 떨어진다는 것을 인지하지 못하고\n계속 실수를 한다면 결국 직장에서 쫓겨날 위기에 처하게 될 것입니다.\n자신이 관리하는 일이 중요한 것이라는 것을 확실히 인식하세요!.']
        return arr;
      }
    }

    else if (check == 4) {
      //금전운

      if (Random() <= 2) {
        var arr = ['오늘의 금전운세', '걱정에 걱정을 잇는 날', '재물 때문에 피곤해질 수 있는 날입니다.\n돈이 들어와도 걱정이고 돈이 나가도 걱정이네요.\n마음을 비우고 사는 게 좋습니다.\n돈을 쫓지 말아야 돈이 붙는 경우도 있으니까요.']
        return arr;
      }
      else if (2 < Random() && Random() < 6) {
        var arr = ['오늘의 금전운세', '돈을 가둬야 하는 날', '돈을 만들기보다 돈을 잃지 않도록 간수해야 하는 날입니다.\n불필요한 소비나 지출은 피하도록 하세요.\n쇼핑을 하더라도 미리 계획한 물품만 구매하는 것이 좋습니다.']
        return arr;
      }
      else if (5 < Random() && Random() < 8) {
        var arr = ['오늘의 금전운세', '거래를 피하면 좋은 날', '재물운은 무난한 하루입니다.\n다만 어떤 거래도 피하는 것이 좋겠네요.\n물건을 구매하기에는 아주 적기입니다.\n그동안 사고 싶었던 물건이 있다면\n오늘 구매를 해보세요.']
        return arr;
      }
      else {
        var arr = ['오늘의 금전운세', '직장을 조심해야하는 날', '재물운은 나쁘지 않지만,\n아르바이트에서 피해를 볼 수 있습니다.\n돈을 못 받게 되거나 나쁜 처우를 견뎌야 할 수 있어요.\n현재 쉬고 있는 중이라면\n다른 날에 알바를 구하는 것이 좋겠네요.']
        return arr;
      }
    }

    //한번도 분리수거를 하지 않았을 경우 어떤식으로 버튼을 이동할건지 고민 필요
    else {
      var arr = ['', '    환경을 위해 분리수거를 실천해보세요!', '             뭐시기 버튼을 누르면 당신의 분리수거를 돠드릴게요']
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
        <Ellipse source={require("../../assets/img/main/magic_ellipse.png")} />
        <User>{userName}, {userBirthDay}</User>
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