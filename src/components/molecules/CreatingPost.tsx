import {Pressable, StyleSheet, Modal, Text, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import CustomInputText from '../atoms/CustomInputText';
import {CreatingPostProps} from '../../types/creatingPostProps';
import axios from 'axios';
import {useSelector} from 'react-redux';

const CreatingPost: React.FC<CreatingPostProps> = ({username, imagePath}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tweet, setTweet] = useState('');
  const userId = useSelector((state: any) => state.auth.userId);
  const userEmail = useSelector((state: any) => state.auth.userEmail);
  const handleSubmitData = async () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    console.log(formattedDate);
    const postData = {
      username: username,
      image_url: imagePath,
      content: tweet,
      date: formattedDate,
      userEmail: userEmail,
      userId: userId,
    };

    const API_URL = 'https://artisanlb.net/post.php';
    try {
      const response = await axios.post(API_URL, postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(JSON.stringify(postData));
      console.log('Data posted successfully:', response.data);
    } catch (error) {
      console.log(error);
    }
    setTweet('');
    setIsVisible(false);
  };
  return (
    <>
      <Pressable
        onPress={() => setIsVisible(true)}
        style={({pressed}) => [
          styles.floatingButton,
          pressed && styles.pressed,
        ]}>
        <Feather name="plus" size={24} color={'white'} />
      </Pressable>
      <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet">
        <View style={styles.modelView}>
          <View style={styles.headerView}>
            <Pressable onPress={() => setIsVisible(false)}>
              <Feather name="x" size={24} color={'black'} />
            </Pressable>
            {tweet && (
              <Pressable
                style={styles.postPressebale}
                onPress={handleSubmitData}>
                <Text style={styles.postButton}>Post</Text>
              </Pressable>
            )}
          </View>
          <CustomInputText
            value={tweet}
            onChangeText={(value: React.SetStateAction<string>) =>
              setTweet(value)
            }
            placeholder="what's happening?"
            multiline
            numberOfLines={5}
          />
        </View>
      </Modal>
    </>
  );
};

export default CreatingPost;

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: '#00b0f0',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  pressed: {
    backgroundColor: '#fff',
  },
  modelView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  headerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postButton: {fontSize: 15, fontWeight: 'bold', color: '#fff'},
  postPressebale: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#00b0f0',
    borderRadius: 20,
  },
});
