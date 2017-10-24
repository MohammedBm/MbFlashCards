import React from 'react';
import {View} from 'react-native'
import AppNavigation from './src/navigation/AppNavigation'
import AppStatusBar from './src/navigation/AppStatusBar'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/redux/reducers'

export default class App extends React.Component {
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
