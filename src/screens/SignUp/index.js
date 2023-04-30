import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Gap from '../../components/atoms/Gap';
import SubHeader from '../../components/molecules/SubHeader';
import TextInput from '../../components/molecules/TextInput';
import AddPhoto from '../../components/molecules/AddPhoto';
import SignUpError from '../../components/molecules/SignUpError';
import Button from '../../components/atoms/Button';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SignUpError />
      <SubHeader title="Sign Up" navigation={navigation} />
      <Gap />
      <AddPhoto />
      <TextInput label="Full Name" placeHolder="Type your full name" />
      <TextInput label="Email Address" placeHolder="Type your email address" />
      <TextInput label="Password" placeHolder="Type your password" />
      <Button label="continue" backgroundColor="#02CF8E" textColor="#020202" />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
