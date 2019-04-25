import React from 'react' //через expo нельзя хукать
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../HomeScreen/Components'
import FavoritePhotos from '../FavoritePhotos/Components'
import { INITIAL_ROUTE } from '../../constants'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    FavoritePhotos: FavoritePhotos,
  },
  {
    initialRouteName: INITIAL_ROUTE,
    headerMode: 'none',
  },
)

const Navigation = createAppContainer(AppNavigator)

export default Navigation
