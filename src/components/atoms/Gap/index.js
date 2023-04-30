import React from 'react';
import {View, StyleSheet} from 'react-native';

const Gap = () => {
  return <View style={styles.space}></View>;
};

export default Gap;

const styles = StyleSheet.create({
  space: {
    height: 24,
    backgroundColor: '#fafafc',
  },
});
