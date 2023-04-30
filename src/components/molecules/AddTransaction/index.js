import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from '../../atoms/Button';

const AddTransaction = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <Button
        label="Cash On Hand"
        backgroundColor="#02CF8E"
        navigation={navigation}
        textColor="#020202"
        toScreen="CashOnHand"
      />
      <Button
        label="Cash On Bank"
        backgroundColor="#02CF8E"
        navigation={navigation}
        textColor="#020202"
        toScreen="CashOnBank"
      />
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
