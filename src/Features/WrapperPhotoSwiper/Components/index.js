import React from 'react'
import { inject, observer } from 'mobx-react'
import { size, get } from 'lodash'
import {
  compose,
  withHandlers,
  defaultProps,
  withState,
  lifecycle,
} from 'recompose'

import { humanizedDate } from '../../../helpers'
import PhotoSwiper from '../../PhotoSwiper/Components'
import WrapperPhotoSwiperFooter from '../../WrapperPhotoSwiperFooter/Components'
import { Animated } from 'react-native'
import { Spinner, Container } from 'native-base'

const WrapperPhotoSwiper = ({ isFetching, ...props }) => {
  if (isFetching) return <Spinner color='red'/>
  return (
    <Container>
      <PhotoSwiper {...props}/>
      <WrapperPhotoSwiperFooter
        photosCount={size(props.photos)}
        {...props}
      />
    </Container>
  )
}

const WrapperPhotoSwiperComposed = compose(
  withState('photoIndex', 'setPhotoIndex', 0),
  inject('favoriteStore'),
  observer,
  defaultProps({
    btnDisLikeAnimatedValue: new Animated.Value(1),
    btnLikeAnimatedValue: new Animated.Value(1),
    swiper: React.createRef(),
  }),
  withHandlers(({
    getPhotoName: () => (photo) => get(photo, ['rover', 'name']),
    getCamerasName: () => (photo) => get(photo, ['rover', 'cameras', 0, 'name']),
  })),
  withHandlers({
    handlerAddFavorite: ({
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
  observer,
  lifecycle({
    componentDidUpdate(prevProps) {
      const {
        setPhotoIndex,
        lastPhoto,
        swiper,
        photoIndex,
        favoriteStore: { removeFavorite },
      } = this.props
      if(prevProps.lastPhoto && !lastPhoto) {
        setPhotoIndex(photoIndex)
        swiper.current.swipeBack()
        removeFavorite(swiper.current.state.cards[photoIndex])
      }
    },
  }),
  observer,
)(WrapperPhotoSwiper)

export default WrapperPhotoSwiperComposed