import React, { useState } from 'react';
import { TextInput, Alert } from 'react-native';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const SearchView = styled.View`
  width: 90%;
  height: 37px;
  flexDirection: row;
  justify-Content: center;
  align-self: center;
  background-color: #D9DADA;
  marginTop: 46px;
  marginBottom: 40px;
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

const Search_Input = () => {
    const navigation = useNavigation();
    const [Xm, handleX] = useState();

    const Submit = () => {
        // Test값 출력
        console.log( 'Search OutPut : ' + Xm )

        if (Xm == null) {
            Alert.alert("검색어를 입력해주세요.");

        } else{
            // 결과값 넘겨주기
            navigation.navigate('searchDetail', { searchValue: Xm });
        }
    }

    return (
        <SearchView>
            <Icons
                name="search"
                size={20}
                color="#7F8080"
                onPress={() => Submit()} />

            <TextInputs
                onChangeText={Xm => handleX(Xm)}
                value={Xm}
                placeholder={Xm}
                // 검색어 길이 11개로 고정
                maxLength = {11}
                //검색어 두줄 불가
                multiline={false}
                // Enter 누르면 Keypad 닫힘
                blurOnSubmit={true}
                //Enter 기능 추가
                onSubmitEditing={() => Submit()} /> 
        </SearchView>
    );
}

export default Search_Input;