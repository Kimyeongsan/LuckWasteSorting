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
  font-family: JosefinSans-Medium;
  paddingTop: 10px;
  paddingRight: 10px;
  paddingBottom: 10px;
  paddingLeft: 0px;
`;

const Search_Input = () => {
    const navigation = useNavigation();
    const [Xm, handleX] = useState();

    // 플라스틱통 = water bottle & pop bottle
    // 스파게티 소스 유리병 : pill bottle & beer bottle & beer glass & beaker
    // 과자봉투 pillow & plasticbag &  packet & prezel
    // 캔 : pop bottle & coffee mug & bottle cap
    // 우유팩 : packet & carton
    const Submit = () => {

        var itemList = [
            '패트병', 'water bottle', 'pop bottle',
            '유리병', 'pill bottle', 'beer bottle', 'beer glass', 'beaker',
            '과자봉지', 'pillow', 'plasticbag', 'packet', 'prezel',
            '캔', 'coffee mug', 'bottle cap',
            '우유팩', 'carton'
        ]
        
        if (Xm == null) {
            Alert.alert("검색어를 입력해주세요.");
        } 
        else {
            for (var i = 0; i < itemList.length; i++) {
                if (Xm == itemList[i]) {

                    var change = [];

                    if(Xm == '패트병' || Xm == 'water bottle' || Xm == 'pop bottle') {
                        change.push('pet')
                    }
                    else if(Xm == '유리병' || Xm == 'pill bottle' || Xm =='beer bottle' || Xm == 'beer glass' || Xm == 'beaker'){
                        change.push('glass')
                    }
                    else if(Xm == '과자봉지' || Xm == 'pillow' || Xm == 'plasticbag' || Xm == 'packet' || Xm == 'prezel') {
                        change.push('snackbag')
                    }
                    else if(Xm == '캔' || Xm == 'coffee mug' || Xm == 'bottle cap') {
                        change.push('can')
                    }
                    else if(Xm == '우유팩' || Xm == 'carton') {
                        change.push('carton')
                    }

                    navigation.navigate('searchDetail', { searchValue: change });

                    console.log('Search OutPut : ' + change)
                }
            }
            if(!itemList.includes(Xm))  {
                Alert.alert("검색어가 없습니다..");
            }
        }
    }

    return (
        <SearchView>
            <Icons
                name="search"
                size={17}
                color="#7F8080"
                onPress={() => Submit()} />

            <TextInputs
                onChangeText={Xm => handleX(Xm)}
                value={Xm}
                //Hint
                placeholder={"검색"}
                // 검색어 길이 11개로 고정
                maxLength={15}
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