import React from 'react'
import { get } from 'lodash'
import Swiper from 'react-native-deck-swiper'
import { compose, withHandlers } from 'recompose'
import { Grid } from 'native-base'
import { inject } from 'mobx-react'
import { StyleSheet } from 'react-native'

import { buttonAnimation, humanizedDate } from '../../../helpers'
import PhotoSwiperCard from '../../PhotoSwiperCard/Components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    top: 0
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    top: 0
  },
})

const PhotoSwiper = ({
                       photos,
                       getPhotoName,
                       getCamerasName,
                       swiper,
                       handleSwipedRight,
                       handleSwipedLeft,
                     }) => (
  <Grid style={{ flex: 4 }}>
    <Swiper
      ref={swiper}
      onSwipedLeft={handleSwipedLeft}
      onSwipedRight={handleSwipedRight}
      cards={photos}
      useViewOverflow={false}
      cardVerticalMargin={30}
      containerStyle={styles.container}
      cardStyle={styles.card}
      backgroundColor='transparent'
      renderCard={(card) => (
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