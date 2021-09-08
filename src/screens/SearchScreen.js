import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Button, ImageBackground, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

const SearchView = styled.View`
  width: 90%;
  height: 37px;
  flexDirection: row;
  justify-Content: center;
  align-self: center;
  background-color: #D9DADA;
  marginTop: 46px;
  marginBottom: 55px;
  borderRadius: 8px;
  elevation: 5;
`;

const Icons = styled(Icon)`
  padding: 10px;
`;

const TextInputs = styled(TextInput)`
  flex: 1;
  fontSize: 14px;
  align-self: center;
  paddingTop: 10px;
  paddingRight: 10px;
  paddingBottom: 10px;
  paddingLeft: 0px;
`;

// 구현사항 :
// View Pager 를 통한 Grid Item 전환 Compornent 필요
// 카메라 Screen으로 이동하기 위한 button 필요

const SearchScreen = ({ navigation }) => {
  const [Xm, handleX] = useState('');

  const Submit = () => {
    console.log(
      'Search OutPut : ' + Xm
    )
  }
  return (
    <Container>

      <Background source={require("../../assets/img/search_background.png")} />

      <SearchView>
        <Icons
          name="search"
          size={20}
          color="#7F8080"
          onPress={() => Submit()} />

        <TextInputs
          onChangeText={Xm => handleX(Xm)}
          value={Xm} />
      </SearchView>

      <Button
        title='SearchDetail Screen'
        onPress={() => navigation.navigate('searchDetail')} />


      <TouchableOpacity
        onPress={() => navigation.navigate('camera')}>
        <Image
          source={require('../../assets/img/camera_icon.png')}
        />
      </TouchableOpacity>

      <Text>AI 탐색기능을 사용하여</Text>
      <Text>보다 빠른 분리수거를 실천해 보세요</Text>

    </Container>
  );

}

export default SearchScreen;