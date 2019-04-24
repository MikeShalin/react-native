import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

const FavoriteItemCard = ({
                            name,
                            cameras,
                            date,
                            img,
                            id,
                            favoriteStore: {
                              removeFavorite,
                            },
                          }) => (
  <Card>
    <CardItem>
      <Left>
        <Body>
          <Text>{cameras}</Text>
          <Text>{name}</Text>
          <Text note>{date}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image source={{ uri: img }}
             style={{ height: 200, width: null, flex: 1 }}/>
    </CardItem>
    <CardItem>
      <Left>
        <Button danger onPress={() => removeFavorite({
          name,
          id,
          short: name[0].toLowerCase(),
        })}>
          <Text>×</Text>
        </Button>
      </Left>
    </CardItem>
  </Card>
)

const FavoriteItemCardComposed = compose(
  inject('favoriteStore'),
  observer,
)(FavoriteItemCard)

export default FavoriteItemCardComposed