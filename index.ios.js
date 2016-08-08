import React, { Component } from 'react';
import {
  AppRegistry, NavigatorIOS, Navigator, Text, View, TouchableHighlight, StyleSheet, TouchableOpacity
} from 'react-native';

import HomePage   from './homepage'
import DetailPage from './detailpage'
import styles     from './styles'

var navigatorBar = {
  LeftButton: function(route, navigator, index, navState) {
    if (route.id == 'homepage'){
      return null;
    }

    return(
        <TouchableOpacity onPress={() => {navigator.pop()}}>
          <Text>UP</Text>
        </TouchableOpacity>
    );
  },
  RightButton: function(route, navigator, index, navState) {
    if (route.id == 'detailpage'){
      return null;
    }

    return(
        <TouchableOpacity onPress={() => {navigator.push({id: 'detailpage', title: 'detail page'})}}>
          <Text>NEXT</Text>
        </TouchableOpacity>
    );
  },
  Title: function(route, navigator, index, navState) {
    return(
      <Text>{route.title}</Text>
    );
  }
}

class PageNavigator extends Component {
  render() {
    return(<Navigator
        style={styles.container}
        initialRoute={{id: 'homepage'}}
        renderScene={
          function(route, navigator){
            if (route.id == 'homepage'){
              return <HomePage navigator={navigator} title="home page" />
            } else {
              return <DetailPage navigator={navigator} title="detail page" />
            }
          }
        }
       navigationBar={
          <Navigator.NavigationBar
            routeMapper={ navigatorBar }
            style={styles.navigatorBar}
         />
       }
     />)
  }
}

AppRegistry.registerComponent('OwlNative', () => PageNavigator);
