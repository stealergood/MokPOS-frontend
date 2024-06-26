import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

const HelloScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>MokPOS</Text>
      <Text style={styles.subtitle}>Point of sales with easy management</Text>
      <Button title="Create new account" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Log in" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center'
  }
});

export default HelloScreen;