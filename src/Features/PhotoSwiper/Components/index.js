import React from 'react'
import { inject, observer } from 'mobx-react'
import { get, isEmpty } from 'lodash'
import { DeckSwiper, Spinner, Content } from 'native-base'
import { compose, withHandlers } from 'recompose'

import { humanizedDate } from '../../../helpers'
import PhotoSwiperCard from '../../PhotoSwiperCard'

const PhotosSwiper = ({
                        photos,
                        isFetching,
                        getPhotoName,
                        getCamerasName,
                        handlerSwipeRight,
                      }) => {
  if (isFetching) return <Spinner color='red'/>
  const btnLike = React.createRef()
  const btnDisLike = React.createRef()
  const _deckSwiper = React.createRef()
  return (
    <DeckSwiper
      ref={_deckSwiper}
      dataSource={photos}
      onSwipeRight={(photo) => {
        btnLike.current._root.touchableHandlePress()
        handlerSwipeRight(photo)
      }}
      onSwipeLeft={() => {

        //todo что происходит на свайп влево?
        btnDisLike.current._root.touchableHandlePress()
      }}
      renderItem={(item) => (
        <PhotoSwiperCard
          photos={photos}
          photoName={getPhotoName(item)}
          camerasName={getCamerasName(item)}
          date={humanizedDate(get(item, 'earth_date'))}
          img={{ uri: get(item, 'img_src') }}
          btnDisLike={btnLike}
          btnLike={btnDisLike}
        />
      )}
    />
  )
}

const PhotosSwiperComposed = compose(
  inject('favoriteStore'),
  observer,
  withHandlers({
    getPhotoName: () => (photo) => get(photo, ['rover', 'name']),
    getCamerasName: () => (photo) => get(photo, ['rover', 'cameras', 0, 'name']),
  }),
  withHandlers({
    handlerSwipeRight: ({
                          favoriteStore: {
                            addFavorite,
                          },
                          getPhotoName,
                          getCamerasName,
                        }) => ({
                                 id,
                                 earth_date,
                                 img_src,
                                 ...photo
                               }) => {
      const name = getPhotoName(photo, 'name')

      addFavorite({
        id,
        name,
        img: img_src,
        short: name && name[0].toLowerCase(),
        cameras: getCamerasName(photo),
        date: humanizedDate(earth_date),
      })
    },
  }),
)(PhotosSwiper)

export default PhotosSwiperComposed