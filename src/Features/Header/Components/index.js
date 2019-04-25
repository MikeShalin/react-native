import React from 'react'
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base'
import { compose, defaultProps, withHandlers } from 'recompose'
import { get } from 'lodash'
import { inject, observer } from 'mobx-react'

import { APP_NAME } from '../../../../src/constants'

const HeaderWrapper = ({
                         handlerPress,
                         favoriteStore: {
                           handleUndo,
                           lastPhoto,
                         },
                       }) => (
  <Header>
    <Left>
      <Button
        transparent
        danger={!!lastPhoto}
        disabled={!lastPhoto}
        onPress={handleUndo}
      >
        <Text>Undo</Text>
      </Button>
    </Left>
    <Body>
      <Title>{APP_NAME}</Title>
    </Body>
    <Right>
      <Button transparent danger onPress={handlerPress}>
        <Icon name='heart'/>
      </Button>
    </Right>
  </Header>
)

const HeaderWrapperCompose = compose(
  inject('favoriteStore'),
  defaultProps({
    route: {
      Home: 'FavoritePhotos',
      FavoritePhotos: 'Home',
    },
  }),
  withHandlers({
    handlerPress: ({ navigation, route }) => () => {
      const { nav } = navigation.current.state
      const { routes, index } = nav
      const currentRoute = get(routes, [index, 'routeName'])
      const prevRoute = get(route, currentRoute)
      navigation.current._navigation.navigate(prevRoute)
    },
  }),
  observer,
)(HeaderWrapper)

export default HeaderWrapperCompose