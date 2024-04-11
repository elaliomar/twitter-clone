import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import CustomInputText from '../atoms/CustomInputText';
import CustomButton from '../atoms/CustomButton';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Formik, FormikHelpers} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {handleAuthError} from '../../utils/authHelpers';
import {AuthStackParamList} from '../../types/authTypes';

type SignScreenNavigationProp = NavigationProp<AuthStackParamList, 'SignUp'>;

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function SignUp() {
  const navigation = useNavigation<SignScreenNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async (
    values: {username: string; email: string; password: string},
    formikHelpers: FormikHelpers<{
      username: string;
      email: string;
      password: string;
    }>,
  ) => {
    setIsLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      const user = userCredential.user;
      await firestore().collection('users').doc(user.uid).set({
        username: values.username,
        email: values.email,
        password: values.password,
      });

      Alert.alert('User created successfully');
      navigation.navigate('LogIn');
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsLoading(false);
      formikHelpers.resetForm();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/background.png')}
      />
      <View style={styles.lockIconContainer}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          source={require('../../assets/lock.png')}
        />
      </View>
      <View
        style={{
          flex: 0.4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Text
          entering={FadeInUp.duration(1000).springify()}
          style={styles.signupText}>
          Sign Up
        </Animated.Text>
      </View>
      <Formik
        initialValues={{username: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={styles.signupFormContainer}>
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={styles.inputContainer}>
              <CustomInputText
                onChangeText={handleChange('username')}
                value={values.username}
                placeholder="Username"
                placeholderTextColor={'gray'}
              />
              {errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={styles.inputContainer}>
              <CustomInputText
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Email"
                placeholderTextColor={'gray'}
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={styles.inputContainer}>
              <CustomInputText
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Password"
                placeholderTextColor={'gray'}
                secureTextEntry
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </Animated.View>
            {isLoading ? (
              <ActivityIndicator size="large" color="#00b0f0" />
            ) : (
              <CustomButton onPress={() => handleSubmit()} title="SignUp" />
            )}

            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={styles.loginTextContainer}>
              <Text>Already have an account? </Text>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.loginLink}>LogIn</Text>
              </Pressable>
            </Animated.View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  lockIconContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    marginBottom: 20,
  },
  loginTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginLink: {
    color: '#00b0f0',
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
});
