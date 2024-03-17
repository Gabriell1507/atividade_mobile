import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import Carrinho from "./assets/carrinho.png";

export default function App() {
  const [text, setText] = useState("");
  const [carts, setCarts] = useState([]);

  const handleAddCartItem = () => {
    if (text.trim()) {
      setCarts((prevCarts) => [...prevCarts, text]);
      setText("");
    }
  };

  const handleClearText = () => {
    setText("");
  };

  return (
    <View style={styles.div}>
      <View style={styles.header}>
        <Image style={styles.imagem} source={Carrinho} />
        <Text style={styles.texto}>Cadastre o produto:</Text>
      </View>

      <View>
        <Text style={styles.texto2}>Descrição:</Text>
        <TextInput
          style={styles.text_input}
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
      </View>

      <View style={styles.flex}>
        <Button title="LIMPAR" onPress={handleClearText} />

        <Button onPress={handleAddCartItem} title="CADASTRAR" />
      </View>

      <FlatList
        style={styles.lista}
        data={carts}
        renderItem={({ item }) => <Text style={styles.cart}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: "#FFD801", // Alterando para amarelo
    padding: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 150,
    height: 150,
  },
  texto: {
    margin: 24,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  texto2: {
    marginTop: 20,
    fontSize: 18,
    padding: 15,
  },
  text_input: {
    width: "100%",
    height: 35,
    borderWidth: 1,
    padding: 5,
    fontSize: 15,
  },
  flex: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
    gap: 20,
  },
  cart: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
});
