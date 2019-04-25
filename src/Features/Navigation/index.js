import React from 'react' //через expo нельзя хукать
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../HomeScreen/Components'
import FavoritePhotos from '../FavoritePhotos/Components'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    FavoritePhotos: FavoritePhotos,
  },
  {
    initialRouteName: 'Home',
  },
)

const Navigation = createAppContainer(AppNavigator)

export default Navigation
