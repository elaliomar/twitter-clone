import {StyleSheet, Text, Pressable} from 'react-native';
import React, {FC} from 'react';

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton: FC<Props> = ({title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00b0f0',
    padding: 12,
    borderRadius: 20,
    width: '80%',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  pressed: {
    backgroundColor: '#0070C0',
  },
});
