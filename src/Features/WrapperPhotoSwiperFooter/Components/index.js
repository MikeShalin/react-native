// import React from 'react'
import React from 'react'
import { Animated, TouchableHighlight } from 'react-native'
import {
  Grid,
  Left,
  Right,
  Button,
  Text,
} from 'native-base'

const style = {
  button: {
    left: 0,
    transition: 3,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 57,
    borderLeftWidth: null,
    borderRightWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    flexDirection: 'row',
    elevation: 2,
    alignItems: 'center',
    width: 60,
    right: 0,
  },
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
                                  }) => (
  <Grid>
    <Left>
      <Animated.View
        style={{ transform: [{ scale: btnDisLikeAnimatedValue }] }}
      >
        <TouchableHighlight
          style={{
            marginLeft: 50,
            backgroundColor: '#000',
            ...style.button,
          }}
          onPress={footerAddFavorite}
        >
          <Text style={style.title}>👎</Text>
        </TouchableHighlight>
      </Animated.View>
    </Left>
    <Left>
      <Text style={style.photoCount}>{photosCount} cards</Text>
    </Left>
    <Right>
      <Animated.View style={{
        transform: [{ scale: btnLikeAnimatedValue }],
      }}>
        <TouchableHighlight
          style={{
            marginRight: 50,
            backgroundColor: 'red',
            ...style.button,
          }}
          onPress={footerNext}
        >
          <Text style={style.title}>👍</Text>
        </TouchableHighlight>
      </Animated.View>
    </Right>
  </Grid>
)

export default WrapperPhotoSwiperFooter