import { StackNavigator } from 'react-navigation'
import { color } from '../utils/colors'
import Main from './Main'

const AppNavigation = StackNavigator(
  {
    Index: {screen: Main}
  },
  {
    initialRouteName: 'Index',
    navigationOptions: {
      headerTintColor: color.orange,
      headerStyle: {
        backgroundColor: color.darkBlue
      }
    }
  }
)

export default AppNavigation
