import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calculate = (operacao) => {
    let res;
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    switch (operacao) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n1 / n2;
        break;
      default:
        res = '';
    }

    setResultado(res.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => calculate('+')} />
        <Button title="-" onPress={() => calculate('-')} />
        <Button title="*" onPress={() => calculate('*')} />
        <Button title="/" onPress={() => calculate('/')} />
      </View>
      <Text style={styles.resultado}>Total = {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 10,
  },
  resultado: {
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Calculator;
