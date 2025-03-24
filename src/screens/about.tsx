import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from '../components/button';

const alex = require('../assets/alex.png');
const paula = require('../assets/paula.png');

export default function AboutScreen({setShowAbout}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>About Us</Text>

        {/* Contenedor para centrar las imágenes */}
        <View style={styles.imagesContainer}>
          <Image source={alex} style={styles.image} />
          <Image source={paula} style={styles.image} />
        </View>

        <Text style={styles.description}>
          We are Pau and Alex, two endavans that worked together sharing ideas
          to create this app to make commuting easier. Feel free to reach us if
          you find any issues or if you have any suggestion.
        </Text>
        <Button title="Go Back" onPress={() => setShowAbout(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    alignItems: 'center', // Centra todo en la pantalla
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center', // Centra el contenido dentro de la card
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1e293b',
    marginBottom: 16,
    textAlign: 'center',
  },
  imagesContainer: {
    flexDirection: 'row', // Coloca las imágenes en una fila
    justifyContent: 'center', // Centra las imágenes horizontalmente
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10, // Espacio entre imágenes
    resizeMode: 'contain',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
