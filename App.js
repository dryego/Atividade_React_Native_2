import { Text, SafeAreaView,View, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card, Title } from 'react-native-paper';

// or any files within the Snack
import Calculadora from './components/Calculadora';
import BarraDePesquisa from './components/BarraPesquisa';
import Label from './components/Label';
import Image from './components/Imagens'

const renderCard = (title) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>
    </Card>
  );
};

export default function App() {
  return (
    <View style ={styles.container}>
      <Text style = {styles.paragraph}>Atividade prática 02 - React Native</Text>      
      <View>
        <Text style = {styles.paragraph}> Calculadora </Text>
        <Calculadora />
      </View>
      <View>
        <Text style = {styles.paragraph}> Pesquisa </Text>
        <BarraDePesquisa />
      </View>
      <View>
        <Text style = {styles.paragraph}> Label </Text>
        <Label />
      </View>
      <View>
        <Text style = {styles.paragraph}> Imagens </Text>
        <Image />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 1,
  },
  paragraph: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    width: '80%',
    marginBottom: 20,
    marginHorizontal:5
  }
});
