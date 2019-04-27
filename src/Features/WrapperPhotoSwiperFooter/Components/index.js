import React from 'react'
import { compose, withHandlers } from 'recompose'
import {
  Grid,
  Left,
  Right,
  Text,
} from 'native-base'

import FooterButton from '../../FooterButton/Components'

const style = {
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
}

const WrapperPhotoSwiperFooter = ({
                                    btnDisLikeAnimatedValue,
                                    btnLikeAnimatedValue,
                                    photosCount,
                                    footerAddFavorite,
                                    footerNext,
                                    getStyle,
                                  }) => (
  <Grid>
    <Left>
      <FooterButton
        style={getStyle( btnDisLikeAnimatedValue, 'marginLeft', '#000')}
        onPress={footerAddFavorite}
      >
        <Text style={style.title}>👎</Text>
      </FooterButton>
    </Left>
    <Left>
      <Text style={style.photoCount}>{photosCount} cards</Text>
    </Left>
    <Right>
      <FooterButton
        style={getStyle( btnLikeAnimatedValue, 'marginRight', '#ff0000')}
        onPress={footerNext}
      >
        <Text style={style.title}>👍</Text>
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
    })
  })
)(WrapperPhotoSwiperFooter)

export default WrapperPhotoSwiperFooterComposed