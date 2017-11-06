import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { color } from '../utils/colors'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getDeckQuestionsShuffled } from '../utils/helpers'
import { MainButton, SecondaryButton } from '../components/Buttons'
import { updateLocalNotificationWithNewQuiz } from '../utils/helpers'


const defaultState = {
  currentCard: 0,
  side: 'front',
  complete: false,
  points: 0
}

class QuizScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  state = { ...defaultState }

  showAnswer = () => {
    this.setState({ side: 'back' })
  }

  addPoints = () => {
    this.setState(
      state => ({ points: state.points + 1 }),
      () => this.next()
    )
  }

  next = () => {
    const { questions } = this.props
    const nextCard = this.state.currentCard + 1
    if (nextCard < questions.length) {
      this.setState({ currentCard: nextCard, side: 'front' })
    } else {
      this.setState({ complete: true }, () =>
        updateLocalNotificationWithNewQuiz()
      )
    }
  }

  reset = () => {
    this.setState({ ...defaultState })
  }

  goToDeck = () => {
    this.props.navigation.goBack()
  }

  render () {
    const { currentCard, side, complete, points } = this.state
    const { questions } = this.props
    const { question, answer } = questions[currentCard]
    const deckTitle = this.props.navigation.state.params.title

    return (
      <View style={styles.wrapper}>
        {complete === false && (
          <View style={styles.questionsRemaining}>
            <Text style={styles.questionsRemainingText}>
              {currentCard + 1}/{questions.length}
            </Text>
          </View>
        )}
        {(() => {
          if (complete) {
            return (
              <View style={styles.section}>
                <View>
                  <View style={styles.titleWrapper}>
                    <Text style={styles.title}>You have Completed {deckTitle} Quiz</Text>
                  </View>
                  <Text style={styles.message}>
                    You got {points} out of {questions.length}!
                  </Text>
                </View>
                <View style={styles.buttonWrapper}>
                  <SecondaryButton onPress={this.reset} icon={'repeat'} title='Start Again' />
                  <MainButton onPress={this.goToDeck} icon={'bars'} title='View Deck' />
                </View>
              </View>
            )
          } else if (side === 'front') {
            return (
              <View style={styles.section}>
                <View>
                  <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Question {currentCard + 1} </Text>
                  </View>
                  <View style={styles.messageWrapper}>
                    <Text style={styles.message}>{question}</Text>
                  </View>
                </View>
                <MainButton onPress={this.showAnswer} icon={'eye'} title='Show Answer' />
              </View>
            )
          } else if (side === 'back') {
            return (
              <View style={styles.section}>
                <View>
                  <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Answer</Text>
                  </View>
                  <View style={styles.messageWrapper}>
                    <Text style={styles.message}>{answer}</Text>
                  </View>
                </View>
                <View style={styles.buttonWrapper}>
                  <SecondaryButton onPress={this.next} icon={'times '} title='Incorrect' />
                  <MainButton onPress={this.addPoints} icon={'check'} title='Correct' />
                </View>
              </View>
            )
          }
        })()}
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, props) => {
  const deckTitle = props.navigation.state.params.title
  return { questions: getDeckQuestionsShuffled(decks, deckTitle) }
}
export default connect(mapStateToProps)(QuizScreen)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.mainBackground,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionsRemaining: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  questionsRemainingText: {
    color: color.textBlue
  },
  section: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 30
  },
  titleWrapper: {
    marginBottom: 10
  },
  title: {
    fontSize: 25,
    color: color.buttonText,
    textAlign: 'center'
  },
  messageWrapper: {
    marginBottom: 20
  },
  message: {
    fontSize: 18,
    color: color.textBlue,
    textAlign: 'center'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  }
})
