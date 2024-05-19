import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';

const ListProductScreen = ({ route, navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (route.params && route.params.productInfo) {
      const { productName, sellingPrice, category, imageUri } = route.params.productInfo;
      setProducts(prevProducts => [...prevProducts, { productName, sellingPrice, category, imageUri }]);
    }
  }, [route.params]);

  const handleAddProduct = () => {
    navigation.navigate('AddProduct');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>Name: {item.productName}</Text>
            <Text>Selling Price: {item.sellingPrice}</Text>
            <Text>Category: {item.category}</Text>
            {item.imageUri && <Image source={{ uri: item.imageUri }} style={styles.image} />}
          </View>
        )}
      />
      <Button title="Add Product" onPress={handleAddProduct} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  product: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default ListProductScreen;
