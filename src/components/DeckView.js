import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { color } from '../utils/colors'

class DeckView extends Component {
  static propTypes = {
    deck: PropTypes.object.isRequired,
    toDeck: PropTypes.func.isRequired
  }

  render () {
    const {deck, toDeck} = this.props
    const {title, questions} = deck
    return (
      <TouchableHighlight onPress={toDeck} style={styles.touchableHighlight}>      
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cardCount}>
              {questions.length} Card{questions.length === 1 ? '' : 's'}
            </Text>
          </View>
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
    alignItems: 'center',
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: color.lightGrey
  },
  title: {
    fontSize: 30,
    color: color.textBlue,
    marginBottom: 5
  },
  cardCount: {
    color: color.textBlue
  },
  icon: {
    color: color.navigationColor,
    fontSize: 28
  },
  touchableHighlight: {
    marginBottom: 15,
    borderRadius: 5
  },
})
