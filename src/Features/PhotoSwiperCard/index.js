import React from 'react'
import { Image } from 'react-native'
import {
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Button,
  Grid,
  Right,
  Col,
  Container,
  View,
} from 'native-base'

//      <CardItem>
//         <Left>
//           <Body>
//             <Text>{photoName}</Text>
//             <Text>{camerasName}</Text>
//             <Text note>{date}</Text>
//           </Body>
//         </Left>
//       </CardItem>

//
const DeckSwiperCard = ({
                          photos,
                          photoName,
                          camerasName,
                          date,
                          img,
                          btnDisLike,
                          btnLike,
                        }) => (
  <Container>
    <View>
      <View style={{ position: 'absolute', zIndex: 9, color: '#fff', marginTop: 30, marginLeft: 30}}>
        <Text style={{color: '#fff'}}>{photoName}</Text>
        <Text style={{color: '#fff'}}>{camerasName}</Text>
        <Text style={{color: '#fff'}} note>{date}</Text>
      </View>
      <Card style={{ elevation: 3, marginTop: 20 }}>
        <CardItem cardBody>
          <Image style={{ height: 430, flex: 1 }} source={img}/>
        </CardItem>
      </Card>
      <Grid>
        <Left>
          <Button
            style={{ marginLeft: 50, left: 0 }}
            onPress={null}
            ref={btnDisLike}
            dark
            rounded
            large
          >
            <Text>👎</Text>
          </Button>
        </Left>
       <View>
         <Text style={{ height: 20 }}>{photos.length} cards</Text>
       </View>
        <Right>
          <Button
            style={{ marginRight: 50, right: 0 }}
            onPress={null}
            ref={btnLike}
            danger
            rounded
            large
          >
            <Text>👍</Text>
          </Button>
        </Right>
      </Grid>

    </View>
  </Container>
)

export default DeckSwiperCard