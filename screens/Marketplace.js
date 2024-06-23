import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const items = [
  {
    id: "1",
    title: "3 Beds 2 Bath Apartment",
    price: "$2,575",
    image: "https://via.placeholder.com/150",
    description: "Spacious and sunny apartment in a prime location.",
  },
  {
    id: "2",
    title: "4 Beds 2 Baths House",
    price: "$3,500",
    image: "https://via.placeholder.com/150",
    description: "Beautiful family home with large backyard.",
  },
  {
    id: "3",
    title: "Nintendo Switch",
    price: "$230",
    image: "https://via.placeholder.com/150",
    description: "Nintendo Switch with accessories, lightly used.",
  },
  {
    id: "4",
    title: "CO2 Tanks",
    price: "$50",
    image: "https://via.placeholder.com/150",
    description: "20lbs CO2 tanks, great for beverage systems.",
  },
];

const ItemCard = ({ title, price, image, description }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const MarketplaceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Marketplace</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => <ItemCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "green",
  },
  description: {
    fontSize: 12,
    color: "gray",
  },
});

export default MarketplaceScreen;
