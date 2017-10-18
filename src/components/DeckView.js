import React, { Component } from 'react'
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native'
import Background from './Background'
import { color } from '../utils/colors'

class DeckView extends Component {
  render () {
    const { deck, navigate } = this.props
    return (
      <TouchableHighlight onPress={() => navigate('Deck', {deck})}>
        <View>
          <Background>
            <View>
              <Text style={styles.header}>{deck.name}</Text>
            </View>
          </Background>
        </View>
      </TouchableHighlight>
    )
  }
}

export default DeckView

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    paddingBottom: 5,
    color: color.darkBlue,
    backgroundColor: 'transparent'
  },
  button: {
    backgroundColor: 'transparent'
  }
})
