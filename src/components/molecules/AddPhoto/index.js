import React from 'react';
import {View, StyleSheet, Text, br} from 'react-native';

const AddPhoto = () => {
  return (
    <View style={styles.ringBorder}>
      <View style={styles.ring}>
        <Text style={styles.text}>Add Photo</Text>
      </View>
    </View>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  ringBorder: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderStyle: 'dashed',
    borderRadius: 100,
    borderColor: '#8D92A3',
    marginTop: 22,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ring: {
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
