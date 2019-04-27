import axios from 'axios'
import m from 'moment'
import { Animated } from 'react-native'
import { delay } from 'lodash'
import { Dimensions } from 'react-native'

const getResult = ({ uri, config }) => axios.get(uri, { params: config })

export const callApi = ({
                          onRequest,
                          onSuccess,
                          onError,
                          ...params
                        }) => {
  onRequest()
  return getResult(params)
    .then(response => {
      onSuccess(response)
    })
    .catch(error => onError(error))
}

export const humanizedDate = (time) => m(time).format('MMMM D, YYYY')

const handlerPressIn = (animatedValue) => {
  Animated.spring(animatedValue, {
    toValue: .5,
  }).start()
}
const handlerPressOut = (animatedValue) => {
  Animated.spring(animatedValue, {
    toValue: 1,
    friction: 3,
    tension: 40,
  }).start()
}

export const buttonAnimation = (animatedValue) => {
  handlerPressIn(animatedValue)
  delay(() => handlerPressOut(animatedValue), 100)
}

export const { height: heightDevice, width: widthDevice } = Dimensions.get('window')

