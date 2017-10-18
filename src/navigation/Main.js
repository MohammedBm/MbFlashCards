import React from 'react'
import {TabNavigator} from 'react-navigation'
import {FontAwesome} from '@expo/vector-icons'
import DeckList from '../screens/DeckList'
import AddDeck from '../screens/AddDeck'
import Deck from '../screens/Deck'
import { color } from '../utils/colors'

const Main = TabNavigator(
  {
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        title: 'Add Deck',
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name='pencil' size={30} color={tintColor} />
        )
      }
    },
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        title: 'Deck List',
        tabBarLabel: 'Deck List',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name='clone' size={30} color={tintColor} />
        )
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        title: 'Deck',
        tabBarLabel: 'Deck',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name='vcard-o' size={30} color={tintColor} />
        )
      }
    }
  },
  {
    animationEnabled: true,
    initialRouteName: 'DeckList',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: color.orange,
      style: {
        height: 56,
        backgroundColor: color.darkBlue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export default Main
