import {StyleSheet, Pressable, View} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {onDisplayNotification} from '../../utils/localNotification';

const TweetFooter = () => {
  return (
    <View style={styles.footer}>
      <Pressable onPress={onDisplayNotification}>
        <Icon name="comment-o" size={20} color="gray" />
      </Pressable>
      <Pressable onPress={onDisplayNotification}>
        <EvilIcons name="retweet" size={30} color="gray" />
      </Pressable>
      <Pressable onPress={onDisplayNotification}>
        <Icon name="heart-o" size={20} color="gray" />
      </Pressable>
      <Pressable onPress={onDisplayNotification}>
        <EvilIcons name="share-google" size={30} color="gray" />
      </Pressable>
    </View>
  );
};

export default TweetFooter;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
});
