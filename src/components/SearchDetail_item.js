import React, { useRef, useState, useEffect } from 'react';
import { Text, Dimensions, TouchableOpacity, Image, View } from 'react-native';

import styled from 'styled-components/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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


// 임시 데이터
const carouselItems = [
    {
        title: "Item 1",
        text: "Text 1",
        image: require("../../assets/img/search/1.png")
    },
    {
        title: "Item 2",
        text: "Text 2",
        image: require("../../assets/img/search/2.png")
    },
    {
        title: "Item 3",
        text: "Text 3",
        image: require("../../assets/img/search/3.png")
    },
    {
        title: "Item 4",
        text: "Text 4",
        image: require("../../assets/img/search/4.png")
    },
    {
        title: "Item 5",
        text: "Text 5",
        image: require("../../assets/img/search/1.png")
    },
    {

    },
]


const SearchDetail_item = () => {

    const [entries, setEntries] = useState([]);
    const carouselRef = useRef("null");

    useEffect(() => { setEntries(carouselItems); }, []);

    // Current page를 index에 저장
    const [index, setIndex] = React.useState(0)


    // components에서 navigation 가져올 때 방법 : hook으로 가져온다.
    const navigation = useNavigation();
    const route = useRoute();


    // 다음 item으로 이동하는 버튼 부분
    const goForward = () => {
        carouselRef.current.snapToNext();

        if (index == carouselItems.length - 1) {
            navigation.navigate('main');
        }
    };


    // Item 부분
    const renderItem = ({ item }) => {

        // 검색어가 없을때의 페이지 조건문 생성 예정
        if (index < carouselItems.length - 1) {
            return (
                <ItemContainer>
                    <Image
                        style={{ height: 250, width: 250 }}
                        source={item.image}
                    />
                    <Text style={{ fontSize: 30 }}>{item.title}</Text>
                    <Text>{item.text}</Text>

                    <TouchableOpacity onPress={goForward}>
                        <Text style={{ color: 'blue', fontSize: 20, marginBottom: 20 }}>go to next slide</Text>
                    </TouchableOpacity>
                </ItemContainer>
            )
        }

        else if (index == carouselItems.length - 1) {
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
                    data={entries}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setIndex(index)} />
            </CarouselContainer>

            <Text>{route.params.searchValue}</Text>

            {/* Pagination 부분 */}
            <Pagination
                dotsLength={entries.length}
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