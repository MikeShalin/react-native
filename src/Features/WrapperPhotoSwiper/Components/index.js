import React from 'react'
import { inject, observer } from 'mobx-react'
import { size, get } from 'lodash'
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
  }), withHandlers(({
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
)(WrapperPhotoSwiper)

export default WrapperPhotoSwiperComposed