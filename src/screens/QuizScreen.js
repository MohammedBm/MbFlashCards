import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Content from '../components/Content'
import { color } from '../utils/colors'

class QuizScreen extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <Content>
          <Text style={styles.header}>QuizScreen</Text>
        </Content>
      </View>
    )
  }
}

export default QuizScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.blue,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 28,
    paddingBottom: 5,
    color: color.darkBlue,
    backgroundColor: 'transparent'
  }
})
