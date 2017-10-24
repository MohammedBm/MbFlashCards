import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard
} from 'react-native'
import { color } from '../utils/colors'
import { MainButton } from '../components/Buttons'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createNewDeck } from '../redux/actions/'
import { getDeckIds } from '../redux/helpers'

class NewDeckScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  constructor() {
    super()
    this.state = { name: '' }
  }

  onSubmit = () => {
    Keyboard.dismiss()
    const { name } = this.state
    this.setState({ name: '' }, () => {
      this.props.createNewDeck({ name: name })
      this.props.navigation.navigate('Deck', { title: name })
    })
  } 

  render () {
    const empty = this.state.name === ''
    const duplicateName = this.props.deckIds.includes(this.state.name)
    const disabled = empty || duplicateName

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={name => this.setState({name})}
            value={this.state.name}
            keyboardAppearance='dark'
          />
        </View>
        {duplicateName && (
          <View style={styles.errorWrapper}>
            <Text style={styles.errorText}>
              Deck with name `<Text style={{ fontWeight: '600' }}>
                {this.state.name}
              </Text>` already exists.
            </Text>
            <Text style={styles.errorText}>Please choose another name</Text>
          </View>
        )}

        <MainButton
          onPress={this.onSubmit}
          title='Create Deck'
          disabled={disabled}
        />


      </KeyboardAvoidingView>
    )
  }
}
const mapStateToProps = ({ decks }) => ({ deckIds: getDeckIds(decks) })
export default connect(mapStateToProps, { createNewDeck })(NewDeckScreen)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.blue,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  inputWrapper: {
    marginBottom: 20
  },
  label: {
    fontSize: 24,
    paddingBottom: 10,
    color: color.grey
  },
  input: {
    fontSize: 20,
    borderRadius: 5,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    backgroundColor: color.darkGrey,
    color: color.grey
  },
  errorWrapper: {
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    marginBottom: 20
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: color.orange
  }
})
