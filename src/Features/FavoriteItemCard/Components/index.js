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

const FavoriteItemCard = ({
                            name,
                            cameras,
                            date,
                            img,
                            id,
                          }) => (
  <Card>
    <CardItem>
      {
        console.log('\n\n\nlolFavoriteItemCard', id)
      }
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
        <Button transparent>
          <Icon active name="thumbs-up"/>
          <Text>12 Likes</Text>
        </Button>
      </Left>
      <Body>
        <Button transparent>
          <Icon active name="chatbubbles"/>
          <Text>4 Comments</Text>
        </Button>
      </Body>
      <Right>
        <Text>11h ago</Text>
      </Right>
    </CardItem>
  </Card>
)

export default FavoriteItemCard