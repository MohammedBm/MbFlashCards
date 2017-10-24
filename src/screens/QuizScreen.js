import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Content from '../components/Content'
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

  addPoint = () => {
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

    return (
      <View style={styles.wrapper}>
        {complete === false && (
          <View>
            <Text>
              {currentCard + 1}/{questions.length}
            </Text>
          </View>
        )}
        {(() => {
          if (complete) {
            return (
              <View>
                <Content>
                  <Text>Complete</Text>
                  <Text>
                    {points}/{questions.length}
                  </Text>
                </Content>
                <View style={styles.buttonWrapper}>
                  <SecondaryButton onPress={this.reset} title='Start Again' />
                  <MainButton onPress={this.goToDeck} title='Go Back to Deck' />
                </View>
              </View>
            )
          } else if (side === 'front') {
            return (
              <View>
                <Content>
                  <Text style={styles.question}>{question}</Text>
                </Content>
                <MainButton onPress={this.showAnswer} title='Show Answer' />
              </View>
            )
          } else if (side === 'back') {
            return (
              <View>
                <Content>
                  <Text style={styles.answer}>{answer}</Text>
                </Content>
                <View style={styles.buttonWrapper}>
                  <SecondaryButton onPress={this.next} title='Incorrect' />
                  <MainButton onPress={this.addPoint} title='Correct' />
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
    backgroundColor: color.darkBlue,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    fontSize: 28,
    paddingBottom: 5,
    color: color.lightBlue,
  },
  answer: {
    fontSize: 18,
    paddingBottom: 5,
    color: color.lightBlue
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  }
})
