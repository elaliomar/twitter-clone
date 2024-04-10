import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {TabStackParamList} from '../../types/tabTypes';
import axios from 'axios';
import {TweetData} from '../../types/tweetTypes';
import TweetFooter from './TweetFooter';

const PostDetails = () => {
  const route = useRoute<RouteProp<TabStackParamList, 'Post'>>();
  const navigation = useNavigation();
  const [userData, setUserData] = useState<TweetData[]>([]);
  const postId = route.params.postId;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://artisanlb.net/displayapi.php?id=${postId}`)
        .then(res => {
          console.log('fetched successful ', res.data);
          console.log('length', res.data.length);
          setUserData(res.data);
        });
    };
    fetchData();
  }, [postId]);

  return (
    <View style={styles.container}>
      {userData?.length > 0 ? (
        userData.map(data => (
          <View key={data.id}>
            <View style={styles.topcontainer}>
              {data.image_url === '' ? (
                <Image
                  source={require('../../assets/Guest-user.png')}
                  style={styles.imageStyle}
                />
              ) : (
                <Image
                  source={{uri: `file://${data.image_url}`}}
                  style={styles.imageStyle}
                />
              )}

              <View style={styles.mainContainer}>
                <View>
                  <Text style={styles.name}>{data?.username}</Text>
                  <Text style={styles.time}>{data?.userEmail}</Text>
                </View>
                <Text style={styles.content}>{data?.content}</Text>
              </View>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{data?.date}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{data?.userId}</Text>
            </View>
            <TweetFooter />
          </View>
        ))
      ) : (
        <ActivityIndicator color={'#00b0f0'} style={styles.loader} />
      )}
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topcontainer: {
    flexDirection: 'row',
    padding: 10,
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
    marginTop: 15,
    color: 'black',
  },

  time: {
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
  timeContainer: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
  loader: {
    margin: 15,
  },
});
