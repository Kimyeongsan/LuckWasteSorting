import React from 'react';
import styled from 'styled-components/native';

import { ImageBackground, Image } from 'react-native';

import Search_Input from '../components/Search_Input'
import Search_item from '../components/Search_item';

const Container = styled.View`
  width: 100%;
  height: 100%;
  backgroundColor: rgba(0,0,0,0.3);
`;

const Background = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  resizeMode: cover;
  position: absolute;
`;

const GridContainer = styled.View`
  width: 340px;
  height: 400px;
  alignSelf: center; 
`;

const CameraButton = styled.TouchableOpacity`
  width: 57px;
  height: 60px;
	align-self: center;
  marginTop: 30px;
  flexDirection: row;
  justify-Content: center;
`;

{/* 가이드 Text */ }
const ContentContainer = styled.View`
  width: 100%;
  height: 100px;
  marginTop: 25px;
`;

const NomalContent = styled.Text`
	align-self: center;
  color: white;
	fontSize: 12px;
  font-family: JosefinSans-Medium;
`;

const SearchScreen = ({ navigation }) => {

  return (
    <Background
      source={require("../../assets/img/search_background.png")}>

      <Container>

        {/* 검색창 호출 */}
        <Search_Input />

        {/* Grid 호출 */}
        <GridContainer>
          <Search_item />
        </GridContainer>

        {/* 카메라 호출 버튼 */}
        <CameraButton
          onPress={() => navigation.navigate('camera')}>
          <Image
            style={{height: 80, width: 80}}
            resizeMode='contain'
            source={require('../../assets/img/search/camera_icon.png')}
          />
        </CameraButton>

        {/* 가이드 Text */}
        <ContentContainer>
          <NomalContent>AI 탐색기능을 사용하여</NomalContent>
          <NomalContent>보다 빠른 분리수거를 실천해 보세요</NomalContent>
        </ContentContainer>

      </Container>

    </Background >
  );

}

export default SearchScreen;