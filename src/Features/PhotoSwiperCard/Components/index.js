import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { CardItem, Text, View } from 'native-base'

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  wrapper: {
    position: 'absolute',
    zIndex: 9,
    color: '#fff',
    marginTop: 30,
    marginLeft: 30,
  },
  image: {
    height: 350,
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#000',
  }
})

const PhotoSwiperCard = ({ photoName, camerasName, date, img }) => (
  <View>
    <View style={styles.wrapper}>
      <Text style={styles.text}>{photoName}</Text>
      <Text style={styles.text}>{camerasName}</Text>
      <Text style={styles.text} note>{date}</Text>
    </View>
    <CardItem cardBody>
      <Image style={styles.image} source={img}/>
    </CardItem>
  </View>
)

export default PhotoSwiperCard