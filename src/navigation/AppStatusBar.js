import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import { Constants } from 'expo'
import { color } from '../utils/colors'

class AppStatusBar extends Component {
  render () {
    return (
      <View
        style={{
          backgroundColor: color.mainBackground,
          height: Constants.statusBarHeight
        }}
      >
        <StatusBar barStyle='dark-content' />
      </View>
    )
  }
}

export default AppStatusBar
