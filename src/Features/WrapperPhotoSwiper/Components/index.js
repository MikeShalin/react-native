import React from 'react'
import { inject, observer } from 'mobx-react'
import { get, delay, size } from 'lodash'
import {
  compose,
  withHandlers,
  defaultProps,
  withState,
} from 'recompose'

import { humanizedDate } from '../../../helpers'
import PhotoSwiper from '../../PhotoSwiper/Components'
import WrapperPhotoSwiperFooter from '../../WrapperPhotoSwiperFooter/Components'
import { Animated } from 'react-native'
import {
  Spinner,
  Grid,
  Container,
} from 'native-base'

const WrapperPhotoSwiper = ({ isFetching, ...props }) => {
  if (isFetching) return <Spinner color='red'/>
  // const swiper = React.createRef()
  return (
    <Container>
      <Grid>
        <PhotoSwiper {...props}/>
      </Grid>
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
  withHandlers({
    getPhotoName: () => (photo) => get(photo, ['rover', 'name']),
    getCamerasName: () => (photo) => get(photo, ['rover', 'cameras', 0, 'name']),
    handlerPressIn: () => (animatedValue) => {
      Animated.spring(animatedValue, {
        toValue: .5,
      }).start()
    },
    handlerPressOut: () => (animatedValue) => {
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 3,
        tension: 40,
      }).start()
    },
  }),
  withHandlers({
    btnAnimation: ({ handlerPressIn, handlerPressOut }) => (animatedValue) => {
      handlerPressIn(animatedValue)
      delay(() => handlerPressOut(animatedValue), 100)
    },
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
  withHandlers({
    swiperAddFavorite: ({
                         handlerAddFavorite,
                         setPhotoIndex,
                         btnAnimation,
                         btnLikeAnimatedValue,
    }) => (index, photo) => {
      handlerAddFavorite(photo)
      setPhotoIndex(index)
      btnAnimation(btnLikeAnimatedValue)
    },
    footerAddFavorite: ({
                         handlerAddFavorite,
                         photoIndex,
                         swiper,
                       }) => () => {
      handlerAddFavorite(swiper.current.state.cards[photoIndex])
      swiper.current.swipeLeft()
    },
    swiperNext: ({
                          setPhotoIndex,
                          btnAnimation,
                          btnDisLikeAnimatedValue,
                        }) => (index) => {
      setPhotoIndex(index)
      btnAnimation(btnDisLikeAnimatedValue)
    },
    footerNext: ({ swiper }) => () => {
      swiper.current.swipeRight()
    },
  }),
)(WrapperPhotoSwiper)

export default WrapperPhotoSwiperComposed