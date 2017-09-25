import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Buttonss = ({color, text, onPress}) => (
  <TouchableOpacity style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      backgroundColor: color,
      // alignSelf: 'stretch',
    }} 
    onPress={onPress}
  >
    <View style={styles.wrapper}>
      <Text style={styles.text}> {text} </Text>
    </View>
  </TouchableOpacity>
);

Buttonss.propTypes = {
  color:PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default Buttonss;