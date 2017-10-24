import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { color } from '../utils/colors'
import glamorous from 'glamorous-native'

export class MainButton extends Component {
  static PropTypes = buttonPropTypes
  render(){
    const { icon, title, onPress, ...props } = this.props
    return(
      <MainButtonEl onPress={onPress} {...props}>
        <View style={[styles.button, styles.mainButton]}>
          {icon != null && (
            <FontAwesome
              name={icon}
              size={24}
              style={styles.mainButtonIcon}
            />
          )}
          <Text style={styles.mainButtonText}>{title}</Text>
        </View>
      </MainButtonEl>
    )
  }
}

export class SecondaryButton extends Component {
  static propTypes = buttonPropTypes
  render () {
    const {icon, title, onPress, ...props} = this.props
    return (
      <SecondaryButtonEl onPress={onPress} {...props}>      
        <View style={[styles.button, styles.buttonSecondary]}>
          {icon != null && (
            <FontAwesome
              name={icon}
              size={24}
              style={styles.secondaryButtonIcon}
            />
          )}
          <Text style={styles.secondaryButtonText}>{title}</Text>
        </View>
      </SecondaryButtonEl>
    )
  }
}

const buttonPropTypes = {
  title: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string
}

const buttonElStyles = { alignSelf: 'center' }
const buttonElDisabledStyles = { opacity: 0.4 }

const MainButtonEl = glamorous(TouchableHighlight)(
  buttonElStyles,
  ({ disabled }) => disabled && buttonElDisabledStyles
)
const SecondaryButtonEl = glamorous(TouchableHighlight)(
  buttonElStyles,
  ({ disabled }) => disabled && buttonElDisabledStyles
)

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },
  mainButton: {
    backgroundColor: color.twitter
  },
  mainButtonIcon: {
    marginRight: 10,
    color: color.darkBlue
  },
  mainButtonText: {
    color: color.darkBlue
  },
  buttonSecondary: {
    backgroundColor: 'transparent'
  },
  secondaryButtonIcon: {
    marginRight: 10,
    color: color.twitter
  },
  secondaryButtonText: {
    color: color.twitter
  }
})
