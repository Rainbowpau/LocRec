import {View, Text, StyleSheet, Image, Button} from 'react-native';

export default function ChatScreen({setShowChat}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Chat with Us</Text>
        <Text style={styles.description}>
        *//this is the chat screen
        </Text>
        <Button title="go back" onPress={() => setShowChat(false)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 200,
    borderRadius: 12,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1e293b',
    marginBottom: 16,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
});
