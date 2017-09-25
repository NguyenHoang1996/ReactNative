
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import index from './app/index';

AppRegistry.registerComponent('aa', () => index);

//Đậu má export thì lúc import đừng có bỏ dấu {} vào, import không thôi
