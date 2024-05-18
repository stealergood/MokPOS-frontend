import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const OrderDetailsScreen = ({ route }) => {
  const { orderId } = route.params;
  const order = useSelector(state => state.orders.find(order => order.id === orderId));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      {order ? (
        <View>
          <Text>Product: {order.productName}</Text>
          <Text>Price: ${order.price}</Text>
          <Text>Quantity: {order.quantity}</Text>
          <Text>Total: ${order.total}</Text>
        </View>
      ) : (
        <Text>Order not found.</Text>
      )}
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
  }
});

export default OrderDetailsScreen;
