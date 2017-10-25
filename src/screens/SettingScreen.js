import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { deleteAllDecks, restoreDefaultDecks } from '../utils/actions'
import { MainButton } from '../components/Buttons'
import { color } from '../utils/colors'

class NewCardScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  deleteAllDecks = () => {
    this.props.deleteAllDecks()
    this.props.navigation.navigate('DeckList')
  }

  restoreDefaultDecks = () => {
    this.props.restoreDefaultDecks()
    this.props.navigation.navigate('DeckList')
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: color.darkBlue }}
        contentContainerStyle={styles.wrapper}
      >
      
        <MainButton
        style = {styles.buttons}
          onPress={this.deleteAllDecks}
          title='Delete All Decks'
          stackButton
        />
        <MainButton
          style={styles.buttons}
          onPress={this.restoreDefaultDecks}
          title='Restore Default Decks'
          stackButton
        />
      </KeyboardAwareScrollView>
    )
  }
}

export default connect(null, { deleteAllDecks, restoreDefaultDecks })(
  NewCardScreen
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.darkBlue,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  buttons: {
    marginTop: 20
  }

})
