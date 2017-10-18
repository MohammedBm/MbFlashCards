import React from 'react';
import {View} from 'react-native'
import AppNavigation from './src/navigation/AppNavigation'
import AppStatusBar from './src/navigation/AppStatusBar'

export default class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <AppStatusBar />
        <AppNavigation />
      </View>
    )
  }
}
