import { Dimensions } from 'react-native';
import { Image, StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';

export default props => {
  const toNext = () => {
    props.navigationCard.navigate('Professional', { ...props })
  }

  return (
    <View style={{
      minHeight: Dimensions.get('window').width / 2.3,
      width: Dimensions.get('window').width / 2.3,
      backgroundColor: '#fff',
      borderRadius: 20,
      margin: 10,
      padding: 10,
    }}>
      <Image style={styles.cardImage} source={props.cover} />
      <Text style={styles.profession}>{props.profession}</Text>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.local}>{props.localAtendimento}</Text>
    </View>
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
    color: '#0007',
    fontSize: 11
  }
});