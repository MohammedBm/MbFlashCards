import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { color } from '../utils/colors'

export class MainButton extends Component {
  static PropTypes = buttonPropTypes
  render(){
    const { icon, title, onPress, ...props } = this.props
    return(
      <TouchableHighlight style={styles.wrapper} onPress={onPress} {...props}>
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
      </TouchableHighlight>
    )
  }
}

export class SecondaryButton extends Component {
  static propTypes = buttonPropTypes
  render () {
    const {icon, title, onPress, ...props} = this.props
    return (
      <TouchableHighlight style={styles.wrapper} onPress={onPress} {...props}>
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
      </TouchableHighlight>
    )
  }
}

const buttonPropTypes = {
  title: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center'
  },
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
    backgroundColor: color.orange
  },
  mainButtonIcon: {
    marginRight: 10,
    color: color.blue
  },
  mainButtonText: {
    color: color.blue
  },
  buttonSecondary: {
    backgroundColor: 'transparent'
  },
  secondaryButtonIcon: {
    marginRight: 10,
    color: color.orange
  },
  secondaryButtonText: {
    color: color.orange
  }
})