import { get } from 'lodash'

import { buttonAnimation, humanizedDate } from '../../../helpers'
import PhotoSwiperCard from '../../PhotoSwiperCard'
import React from 'react'
import Swiper from 'react-native-deck-swiper'
import { compose, withHandlers } from 'recompose'
import { Grid } from 'native-base'
import { inject } from 'mobx-react'

const style = {
  containerStyle: {
    height: 300,
  },
  cardStyle: {
    background: 'transparent',
    flex: 1,
    justifyContent: 'center',
    height: 350,
  },
}

const PhotoSwiper = ({
                       photos,
                       getPhotoName,
                       getCamerasName,
                       swiper,
                       handleSwipedRight,
                       handleSwipedLeft,
                     }) => (
  <Grid>
    <Swiper
      ref={swiper}
      onSwipedLeft={handleSwipedLeft}
      onSwipedRight={handleSwipedRight}
      cards={photos}
      useViewOverflow={false}
      cardVerticalMargin={30}
      containerStyle={style.containerStyle}
      cardStyle={style.cardStyle}
      backgroundColor='transparent'
      renderCard={card => (
        <PhotoSwiperCard
          photoName={getPhotoName(card)}
          camerasName={getCamerasName(card)}
          date={humanizedDate(get(card, 'earth_date'))}
          img={{ uri: get(card, 'img_src') }}
        />
      )}
      stackSize={3}
      stackSeparation={-15}
      verticalSwipe={false}
      animateOverlayLabelsOpacity
      animateCardOpacity
      swipeBackCard
    >
    </Swiper>
  </Grid>
)

const PhotoSwiperComposed = compose(
  inject('favoriteStore'),
  withHandlers({
    handleSwipedRight: ({
                          handlerAddFavorite,
                          setPhotoIndex,
                          btnLikeAnimatedValue,
                        }) => (index, photo) => {
      handlerAddFavorite(photo)
      setPhotoIndex(index)
      buttonAnimation(btnLikeAnimatedValue)
    },
    handleSwipedLeft: ({ setPhotoIndex, btnDisLikeAnimatedValue }) => (index) => {
      setPhotoIndex(index)
      buttonAnimation(btnDisLikeAnimatedValue)
    },
  }),
)(PhotoSwiper)

export default PhotoSwiperComposed