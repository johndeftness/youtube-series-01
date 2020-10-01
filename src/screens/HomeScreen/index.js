import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <Button
      title="Go to About"
      onPress={() => navigation.navigate('AboutScreen')}
    />
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
