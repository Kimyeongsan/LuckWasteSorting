import React from 'react';
import styled from 'styled-components/native';

import { Button, ImageBackground } from 'react-native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #CFDEF3;
`;

const Background = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  resizeMode: cover;
  position: absolute;
`;

const Title = styled.Text`
  flex: 1;
	align-self: center;
  marginTop: 50px;
	fontSize: 20px;
  font-weight: bold;
`;

// 사용자가 원하는 재활용에 대한 검색 화면 

// 구현사항 :
// 검색을 위한 input Component 필요
// View Pager 를 통한 Grid Item 전환 Compornent 필요
// 카메라 Screen으로 이동하기 위한 button 필요

const SearchScreen = ({ navigation }) => {

  return (
    <Container>

      <Background source={require("../../assets/img/search_background.png")} />
      <Title>Search Screen</Title>

      <Button
        title='SearchDetail Screen'
        onPress={() => navigation.navigate('searchDetail')} />

      <Button
        title='Camera Screen'
        onPress={() => navigation.navigate('camera')} />
    </Container>
  );

}

export default SearchScreen;