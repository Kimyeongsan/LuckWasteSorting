import React from 'react';
import styled from 'styled-components/native';
import SearchDetail_item from '../components/SearchDetail_item';

import { ImageBackground } from 'react-native';

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
	align-self: center;
  marginTop: 24px;
  color: white;
	fontSize: 50px;
  font-family: Kameron-Bold;
`;

// 검색 상세 화면 : 검색 화면을 통해 검색된 Item에 대한 세부 내역 출력
const SearchDetail = () => {

  return (
    <Container>
      <Background source={require("../../assets/img/search_background.png")} />

      <Title>recycle</Title>
      <SearchDetail_item/>

    </Container>
  );

}

export default SearchDetail;