import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default class Professional extends Component {
  back () {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Text>{this.props.route.params.title}</Text>
        <TouchableOpacity style={styles.buttom} onPress={() => {
          this.back()
        }}>
          <Ionicons name='arrow-back' size={30} color='#000' />
        </TouchableOpacity>
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
  },
})
