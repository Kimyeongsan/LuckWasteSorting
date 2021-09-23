import React, { useRef, useState, useEffect } from 'react';
import { Text, Dimensions, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import styled from 'styled-components/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icos from 'react-native-vector-icons/Ionicons';

import firestore from '@react-native-firebase/firestore'

const { width: screenWidth } = Dimensions.get('window');

const Container = styled.View`
    flex: 1px; 
    paddingTop: 27px;
`;

const ItemContainer = styled.View`
    backgroundColor: rgba(255, 255, 255, 0.9);
    borderRadius: 5px;
    flex: 1;
    align-items: center;
    padding: 40px;
`;

const CarouselContainer = styled.View`
    height: 80%; 
    justifyContent: center;
`;

// Complete button 부분
const IconContainer1 = styled.View`
marginBottom: 15px;
  flexDirection: row;
`;

const IconContainer2 = styled.View`
  marginTop: 15px;
  alignSelf: flex-end;
`;

const CompleteContainer = styled.View`
    backgroundColor: rgba(0, 0, 0, 0.2);
    borderRadius: 5px;
    flex: 1;
    align-items: center;
    padding: 40px;
`;


// 이동 화면 Style
const ContentContainer = styled.View`
    width: 100%;
    height: 130px;
    marginTop: 40px;
`;

const NomalContent = styled.Text`
    align-self: center;
    color: white;
    fontSize: 15px;
    font-family: JosefinSans-Regular;
`;

const StartButton = styled.TouchableOpacity`
    width: 253px;
    height: 60px;
    align-self: center;
    justifyContent: center;
    marginTop: 150px;
    borderWidth: 2px;
    borderColor: white;
`;

const StartText = styled.Text`
    align-self: center;
    color: white;
    fontSize: 30px;
    font-family: Kadwa-Bold;
    borderColor: white;
`;

const SearchDetail_item = () => {

    const carouselRef = useRef("null");

    // Current page를 index에 저장
    const [index, setIndex] = useState(0)

    // components에서 navigation 가져올 때 방법 : hook으로 가져온다.
    const navigation = useNavigation();
    const route = useRoute();

    // Complete Count를 count에 저장
    const [count, setCount] = useState()

    // 다음 item으로 이동하는 버튼 부분
    const goForward = () => {
        carouselRef.current.snapToNext();

        if (index == searchItem.length - 1) {
            setCount(count + 1); // count 추가 부분
            navigation.navigate('main', { countValue: count });
        }
    };

    const [searchItem, setSearchItem] = useState([]); // Initial empty array of users
    const userJobCount = route.params.searchValue;

    // firebase 호출
    useEffect(() => {
        const subscriber = firestore()
            .collection(`${userJobCount}`)
            .onSnapshot(querySnapshot => {
                const recycle = [];

                querySnapshot.forEach(documentSnapshot => {
                    recycle.push({
                        ...documentSnapshot.data(),
                    });
                });

                console.log(recycle);
                setSearchItem(recycle);
            });
        return () => subscriber();
    }, []);

    // Item 부분
    const renderItem = ({ item }) => {

        // 검색어가 없을때의 페이지 조건문 생성 예정
        if (index < searchItem.length - 1) {
            return (
                <ItemContainer>
                    <TouchableOpacity 
                    onPress={goForward}
                    style={{position: 'absolute', alignSelf:'flex-end', padding: 10}}>
                        <Icos
                            name='arrow-forward' 
                            size={35}
                        /> 
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'JosefinSans-Bold', fontSize: 20 }}>{item.title}</Text>
                    <Image
                        style={{ height: 230, width: 230, margin: 10 }}
                        source={{ uri: item.img }}
                    />
                    <Text style={{ fontFamily: 'JosefinSans-Regular', fontSize: 14, margin: 3 }}>{item.content}</Text>
                </ItemContainer>
            )
        }

        else if (index == searchItem.length - 1) {
            return (
                <CompleteContainer>
                    <ContentContainer>
                        <IconContainer1><Icon name="quote-left" color="rgba(255, 255, 255, 0.5)" size={40} /></IconContainer1>
                        <NomalContent>깨끗한 내일을 위한 “내일을 모으다”</NomalContent>
                        <NomalContent>오늘도 환경 운동에 힘써주셔서</NomalContent>
                        <NomalContent>감사합니다.{"\n"}</NomalContent>
                        <NomalContent>아름답고 깨끗한 지구에서</NomalContent>
                        <NomalContent>맞이하는 오늘의 운세를</NomalContent>
                        <NomalContent>점쳐보러 갈까요?</NomalContent>
                        <IconContainer2><Icon name="quote-right" color="rgba(255, 255, 255, 0.5)" size={40} /></IconContainer2>
                    </ContentContainer>

                    <StartButton onPress={goForward}>
                        <StartText>Start Luck</StartText>
                    </StartButton>
                </CompleteContainer>
            )
        }
    };

    // 출력 부분
    return (
        <Container>
            {/* Animation 부분 */}
            <CarouselContainer>
                <Carousel
                    layout={"default"}
                    ref={carouselRef}
                    data={searchItem}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setIndex(index)} />
            </CarouselContainer>

            {/* Pagination 부분 */}
            <Pagination
                dotsLength={searchItem.length}
                activeDotIndex={index}
                containerStyle={{ flexDirection: 'row', justifyContent: 'center', }}
                dotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.8}
            />
        </Container>
    );

}

export default SearchDetail_item;