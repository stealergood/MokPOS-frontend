import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentMethodScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Success')}>
        <Text style={styles.method}>Cash</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Success')}>
        <Text style={styles.method}>Non Cash</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  method: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
    textAlign: 'center'
  }
});

export default PaymentMethodScreen;
