import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { get } from 'lodash'
import m from 'moment/moment'
import { isEmpty } from 'lodash'
import { humanizedDate } from '../../../helpers'

import { Image, StyleSheet } from 'react-native'
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Spinner,
  Button,
  Grid,
  Row,
  Col,
} from 'native-base'
import { compose, withHandlers } from 'recompose'

// {/** () => _deckSwiper.current._root.swipeLeft() **/}
// {/** () => _deckSwiper.current._root.swipeRight() **/}
const PhotosSwiper = ({
                        photos,
                        isFetching,
                        favoriteStore: {
                          addFavorite,
                        },
                        getPhotoName,
                        getCamerasName,
                      }) => {
  // console.log('\n\n\nlolphotos', photos)
  if (isEmpty(photos)) return <Spinner color='red'/> //todo исправить на isFetching
  const btnLike = React.createRef()
  const btnDisLike = React.createRef()
  const _deckSwiper = React.createRef()
  return (
    <Container>
      <Header/>
      <View>
        <DeckSwiper
          ref={_deckSwiper}
          dataSource={photos}
          onSwipeRight={({
                           id,
                           earth_date,
                           img_src,
                           ...photo
                         }) => {
            btnLike.current._root.touchableHandlePress()

            const name = getPhotoName(photo, 'name')
            addFavorite({
              id,
              name,
              img: img_src,
              short: name && name[0].toLowerCase(),
              cameras: getCamerasName(photo),
              date: humanizedDate(earth_date),
            })
          }}
          onSwipeLeft={({ id }) => {
            btnDisLike.current._root.touchableHandlePress()
          }}
          renderItem={item => (
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{getPhotoName(item)}</Text>
                    <Text>{getCamerasName(item)}</Text>
                    <Text note>{humanizedDate(get(item, 'earth_date'))}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }}
                       source={{ uri: get(item, 'img_src') }}/>
              </CardItem>
              <Grid>
                <Col>
                  <Button onPress={null} ref={btnDisLike} dark rounded large>
                    <Text>👎</Text>
                  </Button>
                </Col>
                <Col>
                  <Button onPress={null} ref={btnLike} danger rounded large>
                    <Text>👍</Text>
                  </Button>
                </Col>
              </Grid>
            </Card>
          )
          }
        />
      </View>
    </Container>
  )
}

const PhotosSwiperComposed = compose(
  inject('favoriteStore'),
  observer,
  withHandlers({
    getPhotoName: () => (photo) => get(photo, ['rover', 'name']),
    getCamerasName: () => (photo) => get(photo, ['rover', 'cameras', 0, 'name']),
  }),
)(PhotosSwiper)

export default PhotosSwiperComposed