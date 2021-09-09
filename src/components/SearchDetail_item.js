import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

class SearchDetail_item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                },
            ]
        }
    }

    _renderItem({ item }) {
        return (
            <View style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: 5,
                flex: 1,
                padding: 50,
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }

    get pagination() {
        return (
            <Pagination
                dotsLength={this.state.carouselItems.length}
                activeDotIndex={this.state.activeIndex}
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
        );
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingTop: 27, marginLeft: 20, marginRight: 20 }}>
                <View style={{ height: "80%", flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>

                <View></View>{this.pagination}
            </SafeAreaView>
        );
    }
}

export default SearchDetail_item;