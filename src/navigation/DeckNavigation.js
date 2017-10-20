import { StackNavigator } from 'react-navigation'
import { color } from '../utils/colors'
import DeckListScreen from '../screens/DeckListScreen'
import DeckScreen from '../screens/DeckScreen'
import NewCardScreen from '../screens/NewCardScreen'
import QuizScreen from '../screens/QuizScreen'

const DeckNavigation = StackNavigator(
  {
    DeckList: {
      screen: DeckListScreen,
      path: 'decks',
      navigationOptions: () => ({
        title: `All Decks`
      })
    },
    Deck: {
      screen: DeckScreen,
      path: 'decks/:title',
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`
      })
    },
    NewCard: {
      screen: NewCardScreen,
      path: 'decks/:title/new',
      navigationOptions: () => ({
        title: `New Card`
      }),
      mode: 'modal'
    },
    Quiz: {
      screen: QuizScreen,
      path: 'decks/:title/quiz',
      navigationOptions: () => ({
        title: `Quiz`
      })
    }
  },
  {
    initialRouteName: 'DeckList',
    navigationOptions: {
      headerTintColor: color.orange,
      headerStyle: {
        backgroundColor: color.darkBlue
      }
    }
  }
)

export default DeckNavigation
