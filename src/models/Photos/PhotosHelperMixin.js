
import { types } from 'mobx-state-tree'

const PhotosHelperMixin = types
  .model('PhotosHelperMixin')
  .actions(self => ({
    setPhotos(photos) {
      self.photos = photos
    },
    setFetching(fetchState) {
      self.isFetching = fetchState
    },
    setError(error) {
      self.error = error
    },
  }))

export default PhotosHelperMixin
