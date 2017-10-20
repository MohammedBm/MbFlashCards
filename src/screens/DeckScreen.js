import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { color } from '../utils/colors'
import { MainButton, SecondaryButton } from '../components/Buttons'
import PropTypes from 'prop-types'
import {getDeck} from '../data'

class DeckScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render () {
    const {state, navigate} = this.props.navigation
    const deck = getDeck(state.params.title)
    const {title, questions} = deck
    const navigateToQuiz = () => navigate('Quiz', {title})
    const navigateToNewCard = () => navigate('NewCard', {title})

    return (
      <View style={styles.wrapper}>
        <View style={styles.deckDetails}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View>
            <Text style={styles.cardCountText}>
              <Text style={styles.cardCountNumber}>
                {questions.length}
              </Text>{' '}
              <Text>Card{questions.length === 1 ? '' : 's'}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <SecondaryButton
            title={'Add Card'}
            icon={'vcard-o'}
            onPress={navigateToNewCard}
          />
          <MainButton
            title={'Start Quiz'}
            icon={'rocket'}
            onPress={navigateToQuiz}
          />
        </View>
      </View>
    )
  }
}

export default DeckScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.blue,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  deckDetails: {
    padding: 30
  },
  titleView: {
    marginBottom: 15
  },
  titleText: {
    fontSize: 28,
    color: color.grey
  },
  cardCountText: {
    fontSize: 18,
    color: color.grey
  },
  cardCountNumber: {
    fontSize: 20,
    fontWeight: '600'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  }
})
