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
                          photosCount,
                          photoName,
                          camerasName,
                          date,
                          img,
                          btnDisLike,
                          btnLike,
                        }) => (
  <View>
    <View style={{ position: 'absolute', zIndex: 9, color: '#fff', marginTop: 30, marginLeft: 30}}>
      <Text style={{ color: '#fff' }}>{photoName}</Text>
      <Text style={{ color: '#fff' }}>{camerasName}</Text>
      <Text style={{ color: '#fff' }} note>{date}</Text>
    </View>
    <CardItem cardBody>
      <Image style={{
        height: 350,
        flex: 1,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#000',
      }} source={img}/>
    </CardItem>
  </View>
)

export default DeckSwiperCard