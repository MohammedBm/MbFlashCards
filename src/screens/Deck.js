import React, {Component} from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'
import Background from '../components/Background'
import { color } from '../utils/colors'

class Deck extends Component {
  render () {
    const {state, navigate} = this.props.navigation
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#0000FF',
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Background>
          <View style={{backgroundColor: 'transparent'}}>
            {!state.params || !state.params.deck ? (
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                    paddingBottom: 10
                  }}
                >
                  No Deck Delected
                </Text>
                <Button
                  onPress={() => navigate('DeckList')}
                  title={'Select a Deck'}
                />
              </View>
            ) : (
              state.params.deck && (
                <View>
                  <View>
                    <Text style={styles.header}>{state.params.deck.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.body}>
                      {state.params.deck.description}
                    </Text>
                  </View>
                  <View>
                    <Text>Card Count: {state.params.deck.cards.length}</Text>
                  </View>
                  <Button onPress={() => {}} title={'Start'} />
                  <Button onPress={() => {}} title={'Add Card'} />
                </View>
              )
            )}
          </View>
        </Background>
      </View>
    )
  }
}

export default Deck

const styles = StyleSheet.create({
 header: {
   fontSize: 28,
   paddingBottom: 5,
   color: color.darkBlue,
   backgroundColor: 'transparent'
 },
 body: {
   fontSize: 18,
   paddingBottom: 5,
   color: color.darkBlue,
   backgroundColor: 'transparent'
 }
})
