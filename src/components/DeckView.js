import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { color } from '../utils/colors'

class DeckView extends Component {
  static propTypes = {
    deck: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  }

  render () {
    const {deck, navigate} = this.props
    return (
      <TouchableHighlight onPress={() => navigate('Deck', {deck})}>
        <View style={styles.wrapper}>
          <Text style={styles.header}>{deck.name}</Text>
          <FontAwesome name={'angle-right'} style={styles.icon} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default DeckView

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: color.darkGrey
  },
  header: {
    fontSize: 28,
    color: color.grey,
    backgroundColor: 'transparent'
  },
  icon: {
    color: color.orange,
    fontSize: 28
  }
})
