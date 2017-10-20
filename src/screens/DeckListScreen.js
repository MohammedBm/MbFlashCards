import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, StyleSheet } from 'react-native'
import DeckView from '../components/DeckView'
import { getDecks } from '../data'
import { color } from '../utils/colors'

class DeckListScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.wrapper}>
        <FlatList
          data={getDecks()}
          renderItem={({item}) => (
            <DeckView deck={item} navigate={navigate} />
          )}
        />
      </View>
    )
  }
}

export default DeckListScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.blue,
    paddingVertical: 30,
    paddingHorizontal: 15
  }
})
