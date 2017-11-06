import React from 'react'
import {TabNavigator} from 'react-navigation'
import {FontAwesome} from '@expo/vector-icons'
import DeckNavigation from './DeckNavigation'
import NewDeckScreen from '../screens/NewDeckScreen'
import {color} from '../utils/colors'
import SettingScreen from '../screens/SettingScreen'

const AppNavigation = TabNavigator(
  {
    DeckList: {
      screen: DeckNavigation,
      navigationOptions: {
        title: 'Deck List',
        tabBarLabel: 'Deck List',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name='clone' size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        title: 'Add Deck',
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name='pencil' size={30} color={tintColor} />
        )
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='sliders' size={30} color={tintColor} />
        )
      }
    }
  },
  {
    animationEnabled: true,
    initialRouteName: 'DeckList',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: color.navigationColor,
      style: {
        height: 56,
        backgroundColor: color.mainBackground,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export default AppNavigation
