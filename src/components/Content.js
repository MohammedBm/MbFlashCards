import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { color } from '../utils/colors'

class Content extends Component {
  render () {
    return <View style={styles.image}>{this.props.children}</View>
  }
}

export default Content

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: color.grey,
    borderRadius: 2
  }
})
