import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={{
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image style={{
          maxHeight: 60,
          maxWidth: 60,
        }} source={require('../../assets/scea-logo.png')} />
      </View>
    )
  }
}
