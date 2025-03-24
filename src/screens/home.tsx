import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import About from './about';
import Metrics from './metrics';
import Chat from './chat';
import {Button} from '../components/button';

const icon = require('../assets/icon.png');

export const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const onPressChat = () => {
    setShowChat(!showChat);
  };

  const onPressAbout = () => {
    setShowAbout(!showAbout);
  };

  const onPressMetrics = () => {
    setShowMetrics(!showMetrics);
  };

  if (showAbout) {
    return <About setShowAbout={setShowAbout} />;
  }
  if (showMetrics) {
    return <Metrics setShowMetrics={setShowMetrics} />;
  }
  if (showChat) {
    return <Chat setShowChat={setShowChat} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.phrase}>Bienvenida/o a Location Recording.</Text>
      <Text style={styles.title}>
        {
          'En esta aplicación podrás guardar tus idas a la oficina, conocer acerca de tus tiempos de llegada, salida y otras métricas.\n\nA su vez podras chatear con nuestra inteligencia artificial para informarte sobre tus tiempos de llegada, salida, conocer posibles formas de mejorar tu desempeno y muchas cosas más.'
        }
      </Text>
      <View style={styles.buttonsContainer}>
        <Button title="Metrics" onPress={onPressMetrics} />
        <Button title="Chat" onPress={onPressChat} />
        <Button title="About" onPress={onPressAbout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1, padding: 20, paddingTop: 100},
  title: {fontSize: 18, fontWeight: '500', margin: 20, textAlign: 'justify'},
  phrase: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  buttonsContainer: {flex: 1, justifyContent: 'space-evenly'},
  icon: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    left: 10,
    right: 0,
  },
});
