import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cashier')}
      >
        <Text style={styles.link}>Cashier</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ListProduct')}
      >
        <Text style={styles.link}>Manage Products</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { marginBottom: 20 },
  headerText: { fontSize: 32, fontWeight: 'bold', color: 'black' },
  link: { fontSize: 24, color: 'black', marginBottom: 20 },
  line: { borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 20 },
});

export default HomeScreen;
