import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../types/drawerTypes';

const AvatarHeader = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<DrawerStackParamList>>();
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Image
        source={require('../../assets/tweeter-icon.png')}
        style={styles.image}
      />
    </Pressable>
  );
};

export default AvatarHeader;

const styles = StyleSheet.create({
  image: {
    height: 25,
    aspectRatio: 1,
    marginLeft: 20,
  },
});
