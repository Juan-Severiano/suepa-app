import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Professional extends Component {
  
  render() {
    console.log(this.props)
    return (
      <View>
        <Text>{this.props.route.params.title}</Text>
      </View>
    )
  }
}
