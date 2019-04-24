import React from 'react' //через expo нельзя хукать
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../HomeScreen/Components'
import FavoritePhotos from '../FavoritePhotos/Components'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'My Mars',
      },
    },
    Details: {
      screen: FavoritePhotos,
      navigationOptions: {
        title: 'My Mars',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
)

const Navigation = createAppContainer(AppNavigator)

export default Navigation
