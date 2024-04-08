import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {tweetProp} from '../../types/tweetTypes';

const Tweet = ({tweet}: tweetProp) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Guest-user.png')}
        style={styles.imageStyle}
      />
      <View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.time}> · 2h</Text>
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: '#fff',
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  secondContainer: {
    flexDirection: 'row',
  },
  time: {
    color: 'gray',
    marginLeft: 5,
  },
});
