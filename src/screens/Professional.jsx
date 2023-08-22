import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native'
import WebView from 'react-native-webview'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Video } from 'expo-av'

export default class Professional extends Component {
  state = {...this.props.route.params}

  back () {
    console.log('era pra voltar')
  }
  
  render() {
    console.log(this.props)
    return (
      <View>
        <TouchableOpacity style={styles.buttom} onPress={() => {
          this.back()
        }}>
          <Ionicons name='arrow-back' size={30} color='#fff' />
        </TouchableOpacity>
        <Video
          source={require('../../gandalf.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          useNativeControls
          style={styles.video}
        />
        <Text style={styles.name} >{this.state.name}</Text>
        <Text style={styles.local} onPress={() => {
          Linking.openURL(`${this.state.localAtendimentoUrl}`)
        }}>{this.state.localAtendimento}</Text>
        <Text onPress={() => {
          Linking.openURL(`https://www.instagram.com/${this.state.instagram}/`)
        }} style={styles.socialMedia}>@{this.state.instagram}</Text>
        <Text style={styles.description}>{this.state.description }</Text>
        <Text style={styles.description}>Entre em contato com</Text>
        <Text onPress={() => {
          Linking.openURL(`https://wa.me/${this.state.number}`)
        }} style={styles.number}>{this.state.number}</Text>
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
