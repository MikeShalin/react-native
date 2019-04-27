import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import WrapperPhotoSwiper from '../../WrapperPhotoSwiper/Components'

const HomeScreen = ({
                      photosStore: {
                        photos,
                        ...photosStore
                      },
                      favoriteStore: {
                        lastPhoto,
                      },
                    }) => (
  <WrapperPhotoSwiper photos={photos.slice()}
                      lastPhoto={lastPhoto} {...photosStore}/>
)

const HomeScreenComposed = compose(
  inject('photosStore', 'favoriteStore'),
  lifecycle({
    componentDidMount() {
      this.props.photosStore.fetchPhotos(1000)
    },
  }),
  observer,
)(HomeScreen)

export default HomeScreenComposed
