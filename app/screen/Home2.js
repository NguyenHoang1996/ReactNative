
import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';

import { Buttonss } from '../components/Button';
import styles from './styles';

import L2ES6_Exe1  from '../exercises/L2ES6_Exe1.js';
import L2ES6_Exe2  from '../exercises/L2ES6_Exe2.js';
import L2ES6_Exe3  from '../exercises/L2ES6_Exe3.js';
import L2ES6_Exe4  from '../exercises/L2ES6_Exe4.js';
import L2ES6_Exe5  from '../exercises/L2ES6_Exe5.js';
import L2ES6_Exe6  from '../exercises/L2ES6_Exe6.js';
import L2ES6_Exe7  from '../exercises/L2ES6_Exe7.js';
import L2ES6_HomeWork1  from '../exercises/L2ES6_HomeWork1.js';
import L2ES6_HomeWork2  from '../exercises/L2ES6_HomeWork2.js';

class Home2 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.text}>Click button to show the log: </Text>
        </View>

        <View style={styles.wrapper}>
          <Buttonss text='L2ES6_Exe1' onPress={L2ES6_Exe1} color='#a52a2a'    ></Buttonss>
          <Buttonss text='L2ES6_Exe2' onPress={L2ES6_Exe2} color='powderblue' ></Buttonss>
          <Buttonss text='L2ES6_Exe3' onPress={L2ES6_Exe3} color='#a52a2a'    ></Buttonss>
          <Buttonss text='L2ES6_Exe4' onPress={L2ES6_Exe4} color='powderblue' ></Buttonss>
          <Buttonss text='L2ES6_Exe5' onPress={L2ES6_Exe5} color='#a52a2a'    ></Buttonss>
          <Buttonss text='L2ES6_Exe6' onPress={L2ES6_Exe6} color='powderblue' ></Buttonss>
          <Buttonss text='L2ES6_Exe7' onPress={L2ES6_Exe7} color='#a52a2a'    ></Buttonss>
          <Buttonss text='L2ES6_HomeWork1' onPress={L2ES6_HomeWork1} color='powderblue' ></Buttonss>
          <Buttonss text='L2ES6_HomeWork2' onPress={L2ES6_HomeWork2} color='#a52a2a'    ></Buttonss>
        </View>
      </View>        
    );
  }
}

export default Home2;
