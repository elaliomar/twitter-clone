import {Alert} from 'react-native';

export const handleAuthError = (error: any) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      Alert.alert(
        'Authentication Failed',
        'The email address is already in use by another account.',
      );
      break;
    case 'auth/weak-password':
      Alert.alert('Authentication Failed', 'The password is too weak.');
      break;
    case 'auth/invalid-email':
      Alert.alert('Authentication Failed', 'The email address is invalid.');
      break;
    case 'auth/invalid-credential':
      Alert.alert(
        'Authentication Failed',
        'Wrong credentials. Please try again.',
      );
      break;
    default:
      Alert.alert(
        'Authentication Failed',
        'An unexpected error occurred. Please try again.',
      );
  }
};
