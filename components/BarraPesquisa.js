import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Linking } from 'react-native';

const BarraDePesquisa = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('');

  const lidarComPesquisa = () => {
    const url = `https://www.google.com/search?q=${encodeURIComponent(termoDeBusca)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui para pesquisar"
        value={termoDeBusca}
        onChangeText={setTermoDeBusca}
      />
      <Button title="Pesquisar" onPress={lidarComPesquisa} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default BarraDePesquisa;
