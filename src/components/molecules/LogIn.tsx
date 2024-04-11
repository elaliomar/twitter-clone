import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CustomInputText from '../atoms/CustomInputText';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Formik, FormikHelpers} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import CustomButton from '../atoms/CustomButton';
import {useDispatch} from 'react-redux';
import {setUser, setEmail} from '../../redux/slices/auth';
import {handleAuthError} from '../../utils/authHelpers';
import {AuthStackParamList} from '../../types/authTypes';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

type LoginScreenNavigationProp = NavigationProp<AuthStackParamList, 'LogIn'>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const handleFormSubmit = async (
    values: {email: string; password: string},
    formikHelpers: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => {
    setIsLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      dispatch(setUser(userCredential.user.uid));
      dispatch(setEmail(userCredential.user.email));
    } catch (error) {
      console.log(error);
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
          style={styles.loginText}>
          Login
        </Animated.Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={styles.loginFormContainer}>
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
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
              entering={FadeInDown.delay(200).duration(1000).springify()}
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
              <CustomButton onPress={() => handleSubmit()} title="LogIn" />
            )}
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={styles.signupTextContainer}>
              <Text>Don't have an account? </Text>
              <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupLink}>SignUp</Text>
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
  loginFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  loginText: {
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
  signupTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupLink: {
    color: '#00b0f0',
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
});
