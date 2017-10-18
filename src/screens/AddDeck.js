import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native'
import Background from '../components/Background'
import { color } from '../utils/colors'

class AddDeck extends Component {
  state = {
    name: '',
    description: ''
  }

  render () {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={{
          flex: 1,
          backgroundColor: color.blue,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'stretch'
        }}
      >
        <Background>
          <View style={{backgroundColor: 'transparent'}}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Deck Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={name => this.setState({name})}
                value={this.state.name}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Deck Description</Text>
              <TextInput
                style={styles.input}
                onChangeText={description => this.setState({description})}
                value={this.state.description}
              />
            </View>
            <Button onPress={() => {}} title='Create Deck' />
          </View>
        </Background>
      </KeyboardAvoidingView>
    )
  }
}

export default AddDeck

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 20
  },
  label: {
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 10
  },
  input: {
    height: 40,
    borderColor: color.blue,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    backgroundColor: color.white
  }
})
