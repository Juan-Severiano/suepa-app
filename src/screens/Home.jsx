import { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header'
import Card from '../components/ProfessionalCard'
import professionals from '../professionals';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons'
import youtubeVideos from '../youtube-videos';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <Text style={{ fontSize: 30, fontWeight: '800', marginLeft: 20 }}>Comece por aqui</Text>
        <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
          <FlatList
            numColumns={2}
            data={professionals}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                  this.props.navigation.navigate('Professional', {...item})
                }}>
                  <Card id={item.id} {...item} />
                </TouchableOpacity>)
            }
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
