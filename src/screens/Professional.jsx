import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native'
import WebView from 'react-native-webview'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Video } from 'expo-av'

export default class Professional extends Component {
  state = { ...this.props.route.params }

  back() {
    this.props.navigation.navigate('Home')
  }

  render() {
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
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          useNativeControls
          style={styles.video}
        />
        <Text style={styles.name} >{this.state.name}</Text>
        <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: 20, marginTop: 10 }}>
          <Ionicons name='compass-outline' size={27} color='#0007' onPress={() => {
            Linking.openURL(`${this.state.localAtendimentoUrl}`)
          }} />
          <Text onPress={() => {
            Linking.openURL(`${this.state.localAtendimentoUrl}`)
          }} style={styles.local}>{this.state.localAtendimento}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: 20, marginTop: 10 }} >
          <Ionicons name='logo-instagram' size={25} color='#0007' onPress={() => {
            Linking.openURL(`https://www.instagram.com/${this.state.instagram}/`)
          }} />
          <Text onPress={() => {
            Linking.openURL(`https://www.instagram.com/${this.state.instagram}/`)
          }} style={styles.socialMedia}>{this.state.instagram}</Text>
        </View>
        <Text style={styles.description}>{this.state.description}</Text>
        <Text style={styles.description}>Entre em contato com</Text>
        <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: 20, marginTop: 10 }} >
          <Ionicons name='call-outline' size={30} color='#000' onPress={() => {
            Linking.openURL(`https://wa.me/${this.state.number}`)
          }} />
          <Text onPress={() => {
            Linking.openURL(`https://wa.me/${this.state.number}`)
          }} style={styles.number}>
            {this.state.number}
          </Text>
        </View>
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
  local: {
    color: '#0007',
    fontSize: 17
  },
  socialMedia: {
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
    fontSize: 25,
    color: '#000e',
  }
})
