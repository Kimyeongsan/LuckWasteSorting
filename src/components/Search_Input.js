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
    const [Xm, handleX] = useState("");

    const Submit = () => {
        console.log(
            'Search OutPut : ' + Xm
        )

        // 예외처리문 수정 예정
        if (Xm == null) {
            Alert.alert("검색어를 입력해주세요.");
        }
        navigation.navigate('searchDetail')
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
                value={Xm} />
        </SearchView>
    );
}

export default Search_Input;