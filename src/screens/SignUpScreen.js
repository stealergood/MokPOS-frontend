import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/actions';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUpScreen = ({ navigation }) => {
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(signUp(storeName, email, phoneNumber, password));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Input placeholder="Store Name" value={storeName} onChangeText={setStoreName} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  }
});

export default SignUpScreen;
