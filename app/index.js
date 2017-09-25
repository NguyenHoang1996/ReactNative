import React from 'react';

import Home from './screen/Home';
import Main from './screen/Main';

import StackNavigator from './config/routes';

export default () => <StackNavigator />;

//Đậu má export thì lúc import đừng có bỏ dấu {} vào, import không thôi