import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUpError = () => {
  return (
    <View>
      <Text>Email sudah terdaftar pada aplikasi</Text>
    </View>
  );
};

export default SignUpError;

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'space-between',
  },
});
