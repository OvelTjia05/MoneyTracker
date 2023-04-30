import React from 'react';
import {View, Text, TextInput as Input, StyleSheet} from 'react-native';

const TextInput = ({label, placeHolder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.textInput} placeholder={placeHolder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 6,
  },
});
