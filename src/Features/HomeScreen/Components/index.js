import React, { Fragment } from 'react' //через expo нельзя хукать
import { Button, Text, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import DeckSwiper from '../../DeckSwiper/Components'

const HomeScreen = ({ photosStore: { photos, ...photosStore }, ...props }) => {
  return  (
    <Fragment>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <DeckSwiper photos={photos.slice()} {...photosStore}/>
      <Text>{photos.length} cards</Text>
    </Fragment>
  )
}

const HomeScreenComposed = compose(
  inject('photosStore'),
  lifecycle({
    componentDidMount() {
      this.props.photosStore.fetchPhotos(10)
    },
  }),
  observer,
)(HomeScreen)

export default HomeScreenComposed
