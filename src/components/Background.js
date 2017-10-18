import React, { Component } from 'react'
import {Image, StyleSheet} from 'react-native'

class Background extends Component {
  render () {
    return (
      <Image
        style={styles.image}
        source={{
          // TODO: host image
          uri:
            'https://www.toptal.com/designers/subtlepatterns/patterns/organic-tiles.png'
        }}
      >
        {this.props.children}
      </Image>
    )
  }
}

export default Background

const styles = StyleSheet.create({
  image: {
    resizeMode: 'repeat',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10
  }
})
