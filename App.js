import React from 'react';
import { View, StyleSheet } from 'react-native'
import AppNavigation from './src/navigation/AppNavigation'
import AppStatusBar from './src/navigation/AppStatusBar'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/utils/reducers'
import { setLocalNotification } from './src/utils/helpers'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  
  render () {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <AppStatusBar />
          <AppNavigation />
        </View>
      </Provider>
    )
  }
}
