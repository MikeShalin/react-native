import axios from 'axios'

const getResult = ({ uri, config }) => axios.get(uri
  // , {
  // params: {
  //   config,
  // },

// }
) //сделать uri, config

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
    .catch(error => onError(error),
    )
}