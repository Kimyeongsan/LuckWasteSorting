import React from 'react';

import styled from 'styled-components/native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import { StyleSheet, View, FlatList, Image } from 'react-native';

const Container = styled.View`
    flex: 1;
`;

const Child = styled.View`
    height: 370px;
    width: 340px;
    justifyContent: center;
    alignItems: center;
`;

const FinalChild = styled.View`
    height: 300px;
    width: 300px;
    justifyContent: center;
    flexDirection: row;
    backgroundColor: rgba(255, 255, 255, 0.9);
    alignItems: center;
    borderRadius: 10px;
    elevation: 5;
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: 'transparent'
    },

    item: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
        margin: 5,
        height: 160,
        width: 150
    }
});

const data_F = [
    {
        key: 'A',
        image: require("../../assets/img/search/grid1.png"),
        mark: require("../../assets/img/search/mark/mark_pet.png"),
        sub_mark: require("../../assets/img/search/mark/mark_stone.png")
        
    },
    {
        key: 'B',
        image: require("../../assets/img/search/grid2.png"),
        mark: require("../../assets/img/search/mark/mark_pet.png"),
        sub_mark: require("../../assets/img/search/mark/mark_gras.png")
    },
    {
        key: 'C',
        image: require("../../assets/img/search/grid3.png"),
        mark: require("../../assets/img/search/mark/mark_ar.png"),
        sub_mark: require("../../assets/img/search/mark/mark_defpack.png"),
        thr_mark: require("../../assets/img/search/mark/mark_pp.png")
    },
    {
        key: 'D',
        image: require("../../assets/img/search/grid4.png"),
        mark: require("../../assets/img/search/mark/mark_pet.png"),
        sub_mark: require("../../assets/img/search/mark/mark_pp.png")
    }
];

const data_S = [
    {
        key: 'A',
        image: require("../../assets/img/search/grid5.png"),
        mark: require("../../assets/img/search/mark/mark_pet.png"),
        sub_mark: require("../../assets/img/search/mark/mark_pp.png")
    },
    {
        key: 'B',
        image: require("../../assets/img/search/grid6.png"),
        mark: require("../../assets/img/search/mark/mark_pp.png")
    },
    {
        key: 'C',
        image: require("../../assets/img/search/grid7.png"),
        mark: require("../../assets/img/search/mark/mark_defpack.png")
    },
    {
        key: 'D',
        image: require("../../assets/img/search/grid9.png"),
        mark: require("../../assets/img/search/mark/mark_pet.png")
    }, 
];


const numColumns = 2;

// Grid View 가로 출력 함수

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });

        numberOfElementsLastRow++;
    }
    return data;
};

const renderItem = ({ item, index }) => {
    if (item.empty === true) {
        return <View style={styles.item} />;
    }
    return (
        <View
            style={styles.item}>
            <Image
                style={{ height: 100, width: 60 }}
                source={item.image}>
            </Image>

            <View style={{ flexDirection: 'column' }}>
                <Image
                    style={{ height: 30, width: 30, marginLeft: 20 }}
                    source={item.mark}>
                </Image>

                <Image
                    style={{ height: 30, width: 30, marginLeft: 20 }}
                    source={item.sub_mark}>
                </Image>
                <Image
                    style={{ height: 30, width: 30, marginLeft: 20 }}
                    source={item.thr_mark}>
                </Image>
            </View>
        </View>
    );
};

const Search_item = () => {
    return (
        <Container>
            <SwiperFlatList
                autoplay
                autoplayDelay={10}
                autoplayLoop
                index={0}
                showPagination>

                {/* 반복문으로 바꿀 예정 */}
                <Child>
                    <FlatList
                        data={formatData(data_F, numColumns)}
                        style={styles.container}
                        renderItem={renderItem}
                        numColumns={numColumns}
                    />
                </Child>

                <Child>
                    <FlatList
                        data={formatData(data_S, numColumns)}
                        style={styles.container}
                        renderItem={renderItem}
                        numColumns={numColumns}
                    />
                </Child>

                <Child>
                    <FinalChild>
                        <Image
                            style={{ height: 150, width: 150 }}
                            source={require("../../assets/img/search/grid8.png")}>
                        </Image>

                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ height: 50, width: 40, marginLeft: 20 }}
                                source={require("../../assets/img/search/mark/mark_paper.png")}>
                            </Image>

                            <Image
                                style={{ height: 50, width: 40, marginLeft: 20 }}
                                source={require("../../assets/img/search/mark/mark_pp.png")}>
                            </Image>
                        </View>
                    </FinalChild>
                </Child>

            </SwiperFlatList>
        </Container>
    );
}

export default Search_item;