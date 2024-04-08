import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const CustomInputText = ({...props}) => {
  return <TextInput style={styles.inputField} {...props} />;
};

export default CustomInputText;

const styles = StyleSheet.create({
  inputField: {
    color: 'black',
    fontSize: 16,
    padding: 5,
    width: '100%',
  },
});
