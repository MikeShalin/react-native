import { types } from 'mobx-state-tree'
import { get } from 'lodash'

import { callApi } from '../../../src/helpers'
import { API_KEY } from '../../../src/constants'

const PhotosApiMixin = types
  .model('PhotosApiMixin')
  .actions(self => ({
    photosSuccess(data) {
      self.setPhotos(get(data, 'photos', []))
      self.setFetching(false)
    },
    photosRequest() {
      self.setFetching(true)
    },
    photosFailure(error) {
      self.setFetching(true)
      self.setError(error)
    },

    fetchPhotos(photosCount) {
      const uri = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`
      const config = {
        sol: photosCount,
        api_key: API_KEY,
      }
      callApi({
        uri,
        config,
        onRequest: () => {
          self.photosRequest()
        },
        onSuccess: ({ data }) => {
          self.photosSuccess(data)
        },
        onError: (error) => {
          self.photosFailure(error)
        },
      })
    },

  }))

export default PhotosApiMixin
