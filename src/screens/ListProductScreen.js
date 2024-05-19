import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ListProductScreen = ({ route, navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (route.params?.newProduct) {
      setProducts(prevProducts => [...prevProducts, route.params.newProduct]);
    }
  }, [route.params?.newProduct]);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      {item.image && <Image source={{ uri: item.image }} style={styles.productImage} />}
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.productPrice}>${item.sellingPrice}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddProduct')}>
        <Text style={styles.addButtonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ListProductScreen;
