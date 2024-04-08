import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {imagePath} from '../../types/imageTypes';
import {userServerData} from '../../types/userServerData';
import {getUserData} from '../../utils/fireStoreUtils';
import {useSelector} from 'react-redux';
import CreatingPost from './CreatingPost';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState<imagePath>(null);
  const [userData, setUserData] = useState<userServerData | null>();
  const userId = useSelector((state: any) => state.auth.userId);
  const userEmail = useSelector((state: any) => state.auth.userEmail);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const data = await getUserData(userId);
        setUserData(data);
      }
    };

    fetchData();
  }, [userId]);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 155,
      height: 155,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        console.log(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <View style={styles.backgroundView}>
        <Image
          source={require('../../assets/drawer-background.png')}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.profileImageView}>
        {selectedImage ? (
          <Image
            source={{uri: selectedImage}}
            resizeMode="contain"
            style={styles.profileImage}
          />
        ) : (
          <Image
            source={require('../../assets/Guest-user.png')}
            resizeMode="contain"
            style={styles.profileImage}
          />
        )}
        <View style={styles.userDataView}>
          <Text style={styles.username}>{userData?.username}</Text>
          <Text style={styles.email}>{`${userEmail}`}</Text>
        </View>
        <View style={styles.buttonView}>
          <Pressable style={styles.pressebaleStyle} onPress={handleImagePicker}>
            <Text style={styles.buttonTextView}>Add Profile Picture</Text>
          </Pressable>
        </View>
      </View>
      <CreatingPost />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  backgroundView: {
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: 150,
  },
  profileImageView: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  profileImage: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: '#fff',
    borderWidth: 4,
    marginTop: -70,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
  },
  email: {
    color: 'gray',
    fontWeight: '300',
  },
  buttonView: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 20,
  },
  pressebaleStyle: {
    width: 140,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b0f0',
    borderRadius: 10,
  },
  buttonTextView: {
    color: 'white',
    fontWeight: 'bold',
  },
  userDataView: {
    width: '100%',
    paddingLeft: 20,
  },
});
