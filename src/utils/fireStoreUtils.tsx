import firestore from '@react-native-firebase/firestore';
import {userServerData} from '../types/userServerData';

export const getUserData = async (
  userId: string,
): Promise<userServerData | null> => {
  try {
    const userDocument = await firestore()
      .collection('users')
      .doc(userId)
      .get();

    if (userDocument.exists) {
      return userDocument.data() as userServerData;
    } else {
      console.error('No user found with ID: ', userId);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data: ', error);
    return null;
  }
};
