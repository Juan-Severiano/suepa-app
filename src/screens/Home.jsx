import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header'
import Card from '../components/ProfessionalCard'

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <View style={styles.container}>
          <Text>SOEPA App</Text>
          <Text>Sistema de Orientação nao sei oq lá para pais de autistas</Text>
          <Text
            onPress={() => {
              this.props.navigation.navigate('Professional', {
                title: 'asdasdasdasdasdasd'
              })
            }}
          >
            Clique aqui para ir para a tela do profissional
          </Text>
        </View> */}
        <Text>Comece por aqui</Text>
        <View style={styles.container}>
          <Card navigation={this.props.navigation} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
