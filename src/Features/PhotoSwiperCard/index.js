import React  from 'react'
import { Image, View } from 'react-native'
import {
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Grid,
  Col,
  Left,
  Right,
  Content,
  StyleSheet,
} from 'native-base'

const PhotoSwiperCard = ({
                          photos,
                          photoName,
                          camerasName,
                          date,
                          img,
                          btnDisLike,
                          btnLike,
                        }) => (
  <Card style={{ elevation: 3 }} >
    <CardItem>
      <Left>
        <Body>
          <Text>{photoName}</Text>
          <Text>{camerasName}</Text>
          <Text note>{date}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Content>
        <Image style={{ height: 300, flex: 1 }} source={img}/>
        <Button
          style={{ position: 'absolute' }}
          onPress={null}
          ref={btnDisLike}
          dark
          rounded
          large
        >
          <Text>👎</Text>
        </Button>
        <Button
          style={{ position: 'absolute' }}
          onPress={null}
          ref={btnLike}
          danger
          rounded
          large
        >
          <Text>👍</Text>
        </Button>
      </Content>
    </CardItem>
    <Grid>
      <Col>
      </Col>
      <Col>
        <Text>{photos.length} cards</Text>
      </Col>
      <Col>
      </Col>
    </Grid>
  </Card>
)

export default PhotoSwiperCard