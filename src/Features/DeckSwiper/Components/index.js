import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { get } from 'lodash'
import m from 'moment/moment'
import { isEmpty } from 'lodash'

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

// {/** () => _deckSwiper.current._root.swipeLeft() **/}
// {/** () => _deckSwiper.current._root.swipeRight() **/}
const PhotosSwiper = ({ photos, isFetching }) => {
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
          onSwipeRight={({ id }) => {
            btnLike.current._root.touchableHandlePress()
          }}
          onSwipeLeft={({ id }) => {
            btnDisLike.current._root.touchableHandlePress()
          }}
          renderItem={item => (
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{get(item, ['rover', 'name'])}</Text>
                    <Text>{get(item, ['rover', 'cameras', 0, 'name'])}</Text>
                    <Text
                      note>{m(get(item, 'earth_date')).format('MMMM D, YYYY')}</Text>
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

export default observer(PhotosSwiper)