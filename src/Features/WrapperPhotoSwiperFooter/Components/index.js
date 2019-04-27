import React from 'react'
import { compose, withHandlers } from 'recompose'
import {
  Grid,
  Left,
  Right,
  Text,
} from 'native-base'

import FooterButton from '../../FooterButton/Components'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginLeft: 0,
    marginRight: 0,
    color: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
  },
  photoCount: {
    height: 20,
    marginTop: 80,
    textAlign: 'center',
    width: 100,
  },
})

const WrapperPhotoSwiperFooter = ({
                                    btnDisLikeAnimatedValue,
                                    btnLikeAnimatedValue,
                                    photosCount,
                                    handleSwipedLeft,
                                    handleSwipedRight,
                                    getStyle,
                                  }) => (
  <Grid>
    <Left>
      <FooterButton
        style={getStyle(btnDisLikeAnimatedValue, 'marginLeft', '#000')}
        onPress={handleSwipedLeft}
      >
        <Text style={styles.title}>👎</Text>
      </FooterButton>
    </Left>
    <Left>
      <Text style={styles.photoCount}>{photosCount} cards</Text>
    </Left>
    <Right>
      <FooterButton
        style={getStyle(btnLikeAnimatedValue, 'marginRight', '#ff0000')}
        onPress={handleSwipedRight}
      >
        <Text style={styles.title}>👍</Text>
      </FooterButton>
    </Right>
  </Grid>
)

const WrapperPhotoSwiperFooterComposed = compose(
  withHandlers({
    getStyle: () => (scale, marginDir, backgroundColor) => ({
      animated: { transform: [{ scale }] },
      button: {
        [marginDir]: 50,
        backgroundColor,
      },
    }),
    handleSwipedLeft: ({ handlerAddFavorite, photoIndex, swiper }) => () => {
      handlerAddFavorite(swiper.current.state.cards[photoIndex])
      swiper.current.swipeLeft()
    },
    handleSwipedRight: ({ swiper }) => () => {
      swiper.current.swipeRight()
    },
  }),
)(WrapperPhotoSwiperFooter)

export default WrapperPhotoSwiperFooterComposed