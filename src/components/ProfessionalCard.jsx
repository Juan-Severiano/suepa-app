import { Dimensions } from 'react-native';
import { Image, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';

export default props => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => {
      props.navigation.navigate('Professional')
    }}>
      <Image style={styles.cardImage} source={require('../../assets/1.png')} />
      <Text style={styles.profession}>Psicólogo</Text>
      <Text style={styles.name}>Nome do Profissional</Text>
      <Text style={styles.local} onPress={() => {
        Linking.openURL('https://www.google.com/maps/@-9.5916075,-51.5495391,8z?entry=ttu')
      }}>Local onde Atua</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    minHeight: Dimensions.get('window').width / 2.3,
    width: Dimensions.get('window').width / 2.3,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  cardImage: {
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 2.6,
    borderRadius: 20
  },
  profession: {
    color: '#f00',
    fontWeight: '600',
    fontSize: 16
  },
  name: {
    fontWeight: '600'
  },
  local: {
    color: '#0007'
  }
});