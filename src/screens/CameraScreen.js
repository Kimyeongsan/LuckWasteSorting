import React, { Component } from 'react';
import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera-tflite';
import { TouchableOpacity, Alert } from 'react-native';

import outputs from '../../Output.json';
import _ from 'lodash';

const Container = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: center;
  backgroundColor: black;
`;

const Preview = styled(RNCamera)`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const CameraText = styled.Text`
  color: white;
  fontSize: 18px;
  fontWeight: bold;
`;

const BottomImgContainer = styled.View`
  width: 80px;
  height: 130px;
  justifyContent: center;
  align-self: flex-end;
  position: absolute;
`;

const BottomImg = styled.Image`
  width: 80px;
  height: 80px;
  justifyContent: center;
`;

let _currentInstant = 0;

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ""
    };
  }

  processOutput({ data }) {
    const probs = _.map(data, item => _.round(item / 255.0, 0.02));
    const orderedData = _.chain(data).zip(outputs).orderBy(0, 'desc').map(item => [_.round(item[0] / 255.0, 2), item[1]]).value();
    const outputData = _.chain(orderedData).take(1).map(item => `${item[1]}`).join('\n').value();
    const output = `${outputData}`;

    this.setState(state => ({
      output
    }));

    _currentInstant = Date.now();
  }

  changeFunction() {
    var itemList = [
      'water bottle', 'pop bottle',
      'pill bottle', 'beer bottle', 'beer glass', 'beaker',
      'pillow', 'plasticbag', 'packet', 'prezel',
      'coffee mug', 'bottle cap',
      'carton'
    ]

    for (var i = 0; i < itemList.length; i++) {
      if (this.state.output == itemList[i]) {

        var change = [];

        if (this.state.output == 'water bottle' || this.state.output == 'pop bottle') {
          change.push('pet')
        }
        else if (this.state.output == 'pill bottle' || this.state.output == 'beer bottle' || this.state.output == 'beer glass' || this.state.output == 'beaker') {
          change.push('glass')
        }
        else if (this.state.output == 'pillow' || this.state.output == 'plasticbag' || this.state.output == 'packet' || this.state.output == 'prezel') {
          change.push('snackbag')
        }
        else if (this.state.output == 'coffee mug' || this.state.output == 'bottle cap') {
          change.push('can')
        }
        else if (this.state.output == 'carton') {
          change.push('carton')
        }
        this.props.navigation.navigate('searchDetail', { searchValue: change })
        console.log('Search OutPut : ' + change)
      }
    }
    if (!itemList.includes(this.state.output)) {
      Alert.alert("검색어가 없습니다..");
    }
  }

  render() {
    const modelParams = {
      file: "mobilenet_v1_1.0_224_quant.tflite",
      inputDimX: 224,
      inputDimY: 224,
      outputDim: 1001,
      freqms: 0
    };

    return (
      <Container>
        <Preview
          ref={ref => { this.camera = ref; }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onModelProcessed={data => this.processOutput(data)}
          modelParams={modelParams}>

          <CameraText>{this.state.output}</CameraText>
        </Preview>

        {/* 값을 넘겨주는 버튼 임시 생성 */}
        {/* 값이 없을 때 예외 처리 추가 */}
        <BottomImgContainer>
          <TouchableOpacity
            onPress={() => this.changeFunction()}>
            <BottomImg source={require("../../assets/img/main/magic_ellipse.png")} />
          </TouchableOpacity>
        </BottomImgContainer>

      </Container>
    );
  }
}

export default CameraScreen;