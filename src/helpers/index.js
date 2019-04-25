import axios from 'axios'
import m from 'moment'

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