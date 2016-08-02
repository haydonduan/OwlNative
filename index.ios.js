import React, { Component } from 'react';
import { AppRegistry,Navigator } from 'react-native';

import MyScene from './MyScene';

class YoDawgApp extends Component {
  render() {
    return (

  <MyScene title="adfasdf" />

  )
  }
}

AppRegistry.registerComponent('OwlNative', () => YoDawgApp);

