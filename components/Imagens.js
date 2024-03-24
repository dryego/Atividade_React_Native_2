import {StyleSheet,View, Image } from 'react-native';

const Imagens = () =>{
  return (
    <View style = {styles.imagenContainer}>
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
      <Image source = {require("../assets/viagen.png")} style = {styles.img} />
    </View>
  )
}

const styles = StyleSheet.create ({
  imagenContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%'
  },
  img:{
    width: 100,
    height: 100,
    marginBottom: 10
  }
})

export default Imagens