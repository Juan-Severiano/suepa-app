import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header'
import Card from '../components/ProfessionalCard'
import professionals from '../professionals';

export default class Home extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
