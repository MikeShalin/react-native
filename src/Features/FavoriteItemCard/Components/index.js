import React from 'react'
import { Image, StyleSheet } from 'react-native'
import {
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
} from 'native-base'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

const styles = StyleSheet.create({
  image: {
    height: 200,
    flex: 1,
  },
})

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
      <Image source={{ uri: img }} style={styles.image}/>
    </CardItem>
    <CardItem>
      <Left>
        <Button
          onPress={() => removeFavorite({
            name,
            id,
            short: name[0].toLowerCase(),
          })}
          danger
        >
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