import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import styles from './styles'

export default class DetailPage extends Component {
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

