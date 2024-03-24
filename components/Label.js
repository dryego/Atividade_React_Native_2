
import {StyleSheet,View, Text } from 'react-native';

const label = () => {
  return (
    <View style = {styles.labelsContainer}>
      <Text style = {styles.label}> Montanhas </Text>
      <Text style = {styles.label}> Praia </Text>
      <Text style = {styles.label}> Comidas </Text>
    </View>
  );
};

const styles = StyleSheet.create({
 labelsContainer: {
   flexDirection: 'row',
   justifyContent: "space-around",
   width: '100%',
   marginBottom:20
   
 },
 label:{ 
  fontSize: 18,
  backgroundColor: '#e0e0e0',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 5,
 }
});

export default label;