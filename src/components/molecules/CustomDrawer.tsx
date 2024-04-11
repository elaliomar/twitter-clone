import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {userServerData} from '../../types/userServerData';
import {useSelector} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthStackParamList} from '../../types/authTypes';
import {signOut} from '../../redux/slices/auth';
import {useDispatch} from 'react-redux';
import {getUserData} from '../../utils/fireStoreUtils';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [userData, setUserData] = useState<userServerData | null>();
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.auth.userId);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const data = await getUserData(userId);
        setUserData(data);
      }
    };

    fetchData();
  }, [userId]);

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      dispatch(signOut());
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../../assets/drawer-background.png')}
          style={{padding: 20, height: 200}}>
          <View style={styles.usernameView}>
            <Text
              style={
                styles.usernameText
              }>{`Welcome ${userData?.username}!!!`}</Text>
            <Text style={styles.deviceText}>
              {Platform.OS === 'ios' ? (
                <Text>IPhone Device in use</Text>
              ) : (
                <Text>Android Device in use</Text>
              )}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.drawerView}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerView}>
        <Pressable style={styles.pressebaleView} onPress={handleSignOut}>
          <View style={styles.shareView}>
            <Ionicons name="exit-outline" size={23} />
            <Text style={styles.shareText}>Sign out</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  usernameView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameText: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    fontWeight: '600',
    color: '#fff',
  },
  drawerView: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  footerView: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  shareView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    marginLeft: 7,
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  pressebaleView: {
    paddingVertical: 15,
  },
  deviceText: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    fontWeight: '600',
    color: Platform.OS === 'ios' ? 'red' : 'green',
  },
});
