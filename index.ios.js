import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  Navigator,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

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

class HomePage extends Component {
  handleClick(props) {
    props.navigator.push({id: 'detail'})
  }
  render() {
    return(
        <View style={styles.containerView}>
          <TouchableHighlight onPress={this.handleClick.bind(this, this.props)}>
            <Text>{this.props.title}</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

class DetailPage extends Component {
  handleClick(props) {
    props.navigator.pop()
  }
  render() {
    return(
        <View style={styles.containerView}>
          <TouchableHighlight onPress={this.handleClick.bind(this, this.props)}>
            <Text>{this.props.title}</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerView: {
   flex: 1,
   justifyContent: 'center',
  }
})

AppRegistry.registerComponent('OwlNative', () => PageNavigator);
