import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import DeckView from '../components/DeckView'
import data from '../data'
import { color } from '../utils/colors'

class DeckList extends Component {
  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={{flex: 1, backgroundColor: color.blue, padding: 5}}>
        <FlatList
          data={[...data.decks]}
          renderItem={({item}) => (
            <DeckView deck={item} navigate={navigate} />
          )}
        />
      </View>
    )
  }
}

export default DeckList
