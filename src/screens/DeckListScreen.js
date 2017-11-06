import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import DeckView from '../components/DeckView'
import { connect } from 'react-redux'
import { color } from '../utils/colors'
import { getDecks } from '../utils/helpers'

class DeckListScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render () {
    const { decks, navigation } = this.props
    const { navigate } = navigation

    return (
      <View style={styles.wrapper}>
        <FlatList
          data={decks}
          renderItem={({item}) => (
            <DeckView
              deck={item}
              toDeck={() => navigate('Deck', { title: item.title })}
            />
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({ decks: getDecks(decks) })

export default connect(mapStateToProps)(DeckListScreen)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.darkBlue,
    paddingVertical: 30,
    paddingHorizontal: 15
  }
})
