import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Tweet from './Tweet';
import tweets from '../../assets/Twitter Asset Bundle/assets/data/tweets';

const Feed = () => {
  return (
    <View style={styles.page}>
      <FlatList data={tweets} renderItem={({item}) => <Tweet tweet={item} />} />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  }, // ma ella taami barki b ekhr l project bshila
});
