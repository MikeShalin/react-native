import { get } from 'lodash'

import { humanizedDate } from '../../../helpers'
import PhotoSwiperCard from '../../PhotoSwiperCard'
import React from 'react'
import Swiper from 'react-native-deck-swiper'

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
                       swiperAddFavorite,
                       swiperNext,
                     }) => (
  <Swiper
    ref={swiper}
    onSwipedLeft={swiperNext}
    onSwipedRight={swiperAddFavorite}
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
    onSwipedAll={() => console.log('onSwipedAll')}
    stackSize={3}
    stackSeparation={-15}
    verticalSwipe={false}
    animateOverlayLabelsOpacity
    animateCardOpacity
    swipeBackCard
  >
    {/*<Button onPress={() => swiper.current.swipeBack()}*/}
    {/*        title='Swipe Back'/>*/}
  </Swiper>
)

export default PhotoSwiper