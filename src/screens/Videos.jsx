import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, FlatList, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import youtubeVideos from '../youtube-videos'

export default props => {
  return (
    <>
      <TouchableOpacity style={{
        padding: 10,
        backgroundColor: '#0001',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10,
        position: 'absolute',
        zIndex: 5
      }} onPress={() => {
        props.navigation.goBack()
      }}>
        <Ionicons name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <View style={{ marginTop: 50 }}>
          <FlatList
            data={youtubeVideos}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.cardContainer} onPress={() => {
                  Linking.openURL(`${item.link}`)
                }}>
                  <Image style={styles.cardImg} source={require('../../assets/youtube.png')} />
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name='logo-youtube' size={30} color='#000' />
                    <Text style={{
                      fontSize: 20,
                      fontWeight: '700',
                      marginLeft: 10,
                    }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5
  },
  cardImg: {
    height: Dimensions.get('window').width / 1.5,
    width: Dimensions.get('window').width / 1.5,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

})