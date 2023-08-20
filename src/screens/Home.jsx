import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
