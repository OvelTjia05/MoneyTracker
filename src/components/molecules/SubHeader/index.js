import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {ArrowBack} from '../../../assets/icons';

const SubHeader = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowBack />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    height: 108,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 37,
    paddingBottom: 38,
    paddingLeft: 24,
    columnGap: 32,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
