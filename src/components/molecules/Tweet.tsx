import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TweetData} from '../../types/tweetTypes';
import {useNavigation} from '@react-navigation/native';

const Tweet = ({id, username, image_url, content, date}: TweetData) => {
  const [imageValue, setImageValue] = useState(image_url);
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Post');
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        {imageValue === '' ? (
          <Image
            source={require('../../assets/Guest-user.png')}
            style={styles.imageStyle}
          />
        ) : (
          <Image
            source={{uri: `file://${image_url}`}}
            style={styles.imageStyle}
          />
        )}
        <View style={styles.mainContainer}>
          <View style={styles.secondContainer}>
            <Text style={styles.name}>{username}</Text>
            <Text style={styles.time}> · {date}</Text>
          </View>
          <Text style={styles.content}>{content}</Text>
          <View style={styles.footer}>
            <Pressable>
              <Icon name="share" size={20} color="gray" />
            </Pressable>
            <Pressable>
              <Icon name="retweet" size={20} color="gray" />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(Tweet);

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
    color: 'black',
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
    color: 'black',
  },
  secondContainer: {
    flexDirection: 'row',
  },
  time: {
    color: 'gray',
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
