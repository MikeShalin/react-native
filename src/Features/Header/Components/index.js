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

import { APP_NAME } from '../../../../src/constants'

const HeaderWrapper = (props) => (
  <Header>
    {
      console.log(props)
    }
    <Left>
      <Button transparent danger>
        <Text>Undo</Text>
      </Button>
    </Left>
    <Body>
      <Title>{APP_NAME}</Title>
    </Body>
    <Right>
      <Button transparent danger onPress={() => props.navigation.current._navigation.navigate('FavoritePhotos')}>
        <Icon name='heart'/>
      </Button>
    </Right>
  </Header>
)

export default HeaderWrapper