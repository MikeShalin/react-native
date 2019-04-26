import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import DeckSwiper from '../../PhotoSwiper/Components'

const HomeScreen = ({ photosStore: { photos, ...photosStore } }) => (
  <DeckSwiper photos={photos.slice()} {...photosStore}/>
)

const HomeScreenComposed = compose(
  inject('photosStore'),
  lifecycle({
    componentDidMount() {
      this.props.photosStore.fetchPhotos(1000)
    },
  }),
  observer,
)(HomeScreen)

export default HomeScreenComposed
