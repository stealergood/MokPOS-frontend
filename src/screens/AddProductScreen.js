import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddProductScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    const newProduct = {
      productName,
      sellingPrice,
      category,
      image,
    };

    navigation.navigate('ListProduct', { newProduct });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Name</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
      />

      <Text style={styles.label}>Selling Price</Text>
      <TextInput
        style={styles.input}
        value={sellingPrice}
        onChangeText={setSellingPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Image</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={chooseImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePickerText}>Tap to choose image</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Save Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  imagePicker: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  imagePickerText: {
    color: '#aaa',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddProductScreen;
