import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native'
import WebView from 'react-native-webview'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Video } from 'expo-av'

export default class Professional extends Component {
  back () {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.buttom} onPress={() => {
          this.back()
        }}>
          <Ionicons name='arrow-back' size={30} color='#000' />
        </TouchableOpacity>
        <Video
          source={require('../../gandalf.mp4')} // Substitua pelo caminho do seu vídeo
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          useNativeControls
          style={styles.video}
        />
        <Text style={styles.name} >Nome do Profissional</Text>
        <Text style={styles.local} onPress={() => {
          Linking.openURL('https://www.google.com/maps/@-9.5916075,-51.5495391,8z?entry=ttu')
        }}>Rua alguma coisa ai, N° 123, Bairro Qualquer, Amontada, CE</Text>
        <Text onPress={() => {
          Linking.openURL('https://www.instagram.com/_juan.sev_/')
        }} style={styles.socialMedia}>@teuinstagram</Text>
        <Text style={styles.description}>Pra colocarem uma descrição bem boa aqui e chamar a atenção do povo</Text>
        <Text style={styles.description}>Entre em contato com</Text>
        <Text onPress={() => {
          Linking.openURL('https://wa.me/+5588988586931')
        }} style={styles.number}>+55 (88) 988586931</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttom: {
    padding: 10,
    backgroundColor: '#0001',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,
    position: 'absolute',
    zIndex: 5
  },
  video: {
    width: '100%',
    height: Dimensions.get('window').width / 1.5,
  },
  name: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 30,
    fontWeight: '800',
    color: '#000',
  },
  local:{
    marginLeft: 20,
    marginTop: 10,
    color: '#0007',
    fontSize: 17
  },
  socialMedia: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
    color: '#0009',
  },
  description: {
    marginLeft: 20,
    fontSize: 17,
    marginTop: 10,
    color: '#000e',
  },
  number: {
    marginLeft: 20,
    fontSize: 25,
    marginTop: 10,
    color: '#000e',
  }
})
