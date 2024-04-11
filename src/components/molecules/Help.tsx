import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';

const Help = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/tweeter-icon.png')}
          style={styles.twitterIcon}
        />
        <Text style={styles.headerText}>Help Center</Text>
        <View style={styles.headerIcon}>
          <Entypo name="menu" size={25} />
          <Feather name="search" size={23} />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <ImageBackground
          source={require('../../assets/drawer-background.png')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.title}>What can we help you find?</Text>
          <TextInput placeholder="Search" style={styles.input} />
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <Text style={styles.footerText}>Download twitter for Iphone</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.footerText}>Download twitter for Android</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  twitterIcon: {
    width: 50,
    height: 50,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerIcon: {
    flexDirection: 'row',
    gap: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  bodyContainer: {
    height: 300,
    width: '100%',
    backgroundColor: 'red',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 35,
    fontFamily: 'Cochin',
    fontWeight: '900',
    color: '#fff',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    height: 40,
    marginVertical: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#fff',
  },
  footer: {
    flex: 1,
    padding: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginVertical: 10,
  },
  footerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    padding: 20,
  },
});
