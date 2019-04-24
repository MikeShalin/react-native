import React from 'react' //через expo нельзя хукать
import { View, Button, Text } from 'react-native'
import { compose, lifecycle } from 'recompose'
import { inject, observer } from 'mobx-react'

//favoriteStore
const FavoritePhotosScreen = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Favorite Photos Screen</Text>
    {
      console.log('\n\n\nlol', props.favoriteStore)
    }
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate('Home')}
    />
  </View>
)

const FavoritePhotosScreenComposed = compose(
  inject('favoriteStore'),
  lifecycle({
    componentDidMount() {
      // this.props.photosStore.fetchPhotos(10)
    },
  }),
  observer,
)(FavoritePhotosScreen)

export default FavoritePhotosScreen
