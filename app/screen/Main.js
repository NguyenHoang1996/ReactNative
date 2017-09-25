
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';

import { Buttonss } from '../components/Button';
import styles from './styles';


class Main extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    handleChap1 = () => {
        this.props.navigation.navigate('Home', { title: "HomeWork Chap1"});
    };

    handleChap2 = () => {
        this.props.navigation.navigate('Home2', { title: "HomeWork Chap2"});
    };

      render() {
        return (
          <View style={styles.container}>
            <View style={styles.Header}>
              <Text style={styles.text}>Click button to show the log: </Text>
            </View>
    
            <View style={styles.wrapper}>
              <Buttonss text='L2ES6_Chap1' onPress={this.handleChap1} color='#a52a2a'    ></Buttonss>
              <Buttonss text='L2ES6_Chap2' onPress={this.handleChap2} color='powderblue' ></Buttonss>
            </View>
          </View>        
        );
      }
    }
    
    export default Main;