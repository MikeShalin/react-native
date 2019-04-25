import React, { Fragment } from 'react' //через expo нельзя хукать
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import DeckSwiper from '../../DeckSwiper/Components'

const HomeScreen = ({ photosStore: { photos, ...photosStore } }) => (
  <DeckSwiper photos={photos.slice()} {...photosStore}/>
)

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
