import React  from 'react'
import { Image } from 'react-native'
import {
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Button,
  Grid,
  Col,
} from 'native-base'

const DeckSwiperCard = ({
                          photos,
                          photoName,
                          camerasName,
                          date,
                          img,
                          btnDisLike,
                          btnLike,
                        }) => (
  <Card style={{ elevation: 3 }}>
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
      <Image style={{ height: 300, flex: 1 }} source={img}/>
    </CardItem>
    <Grid>
      <Col>
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
      </Col>
      <Col>
        <Text>{photos.length} cards</Text>
      </Col>
      <Col>
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
      </Col>
    </Grid>
  </Card>
)

export default DeckSwiperCard