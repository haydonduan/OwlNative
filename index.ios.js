import React, { Component } from 'react';
import {
  AppRegistry, NavigatorIOS, Navigator, Text, View, TouchableHighlight, StyleSheet
} from 'react-native';

import HomePage   from './homepage'
import DetailPage from './detailpage'
import styles     from './styles'

class PageNavigator extends Component {
  render() {
    return(<Navigator
        style={styles.container}
        initialRoute={{id: 'main'}}
        renderScene={function(route, navigator){
            if (route.id == 'main'){
              return <HomePage navigator={navigator} title="home page" />
            } else {
              return <DetailPage navigator={navigator} title="detail page" />
            }
          }
        }
        />)
  }
}

AppRegistry.registerComponent('OwlNative', () => PageNavigator);
