import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  justifyContent: center;
  alignItems: flex-end;
`;

const Animation = styled(Animated.View)`
  height: 20px;
  width: 95px;
  margin: 10px;
  borderRadius: 25px;
  flexDirection: row;
`;

const GuidText = styled.Text`
  fontWeight: bold;
  color: #83a4d4;
  fontSize: 15px;
`;

const IconStyle = styled.View`
  width: 35px;
  height: 35px;
  padding: 2px;
`;

class FlipGuid extends React.Component {
  state = { fadeAnim: new Animated.Value(0) } 

  componentDidMount() {
    Animated.loop(
      Animated.timing(                  
        this.state.fadeAnim, {
          toValue: 1,                
          duration: 1500,  // 1.5초간 반복
          useNativeDriver: true      
        }),
      { iterations: -1 }, // 무한반복 값 -1
    ).start();          
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Container>
        <Animation style={{
          ...this.props.style,
          opacity: fadeAnim ,
        }}>{this.props.children}

          <GuidText>Next Page</GuidText>
          <IconStyle>
            <Icon
              name={'arrow-forward'}
              size={20}
              color={'#83a4d4'} />
          </IconStyle>
        </Animation>
      </Container>
    );
  }
};

export default FlipGuid;
