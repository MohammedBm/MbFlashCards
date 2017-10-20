import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native'
import { color } from '../utils/colors'
import { MainButton } from '../components/Buttons'

class NewDeckScreen extends Component {
  state = {
    name: ''
  }

  render () {
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
        <MainButton onPress={() => {}} title='Create Deck' />
      </KeyboardAvoidingView>
    )
  }
}

export default NewDeckScreen

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
  }
})
