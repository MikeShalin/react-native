import React from 'react'
import { Animated, TouchableHighlight } from 'react-native'

const initialStyle = {
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
}

const FooterButton = ({ children, style, onPress }) => (
  <Animated.View style={style.animated}>
    <TouchableHighlight
      style={{ ...style.button, ...initialStyle.button }}
      onPress={onPress}
    >
      {children}
    </TouchableHighlight>
  </Animated.View>
)

export default FooterButton