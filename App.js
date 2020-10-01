import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import HomeStack from './src/navigation/HomeStack';

const App = (props) => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
export default App;
